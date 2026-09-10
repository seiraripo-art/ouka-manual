(() => {
  const root = document.getElementById('manualRoot');
  const quickLinks = document.getElementById('quickLinks');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');
  const source = Array.isArray(window.MANUAL_DATA) ? window.MANUAL_DATA : [];

  function render(data){
    root.innerHTML = '';
    quickLinks.innerHTML = source.map(ch => `<a href="#${ch.id}">${escapeHtml(ch.title)}</a>`).join('');
    data.forEach((chapter, ci) => {
      const section = document.createElement('section');
      section.className = 'chapter';
      section.id = chapter.id;
      section.innerHTML = `<div class="chapter-head"><span class="chapter-kicker">${escapeHtml(chapter.kicker || '')}</span><h2>${escapeHtml(chapter.title)}</h2><p class="chapter-intro">${escapeHtml(chapter.intro || '')}</p></div>`;
      chapter.items.forEach((item, ii) => {
        const details = document.createElement('details');
        details.dataset.search = stripHtml(`${chapter.title} ${chapter.intro || ''} ${item.title} ${item.body}`).toLowerCase();
        details.innerHTML = `<summary>${escapeHtml(item.title)}</summary><div class="detail-body">${item.body}</div>`;
        if (ci === 0 && ii === 0) details.open = true;
        section.appendChild(details);
      });
      root.appendChild(section);
    });
    installCopyButtons();
  }

  function installCopyButtons(){
    document.querySelectorAll('.codebox').forEach(box => {
      if (box.querySelector('.copy-btn')) return;
      const button = document.createElement('button');
      button.className = 'copy-btn';
      button.type = 'button';
      button.textContent = 'コピー';
      button.addEventListener('click', async () => {
        const text = box.querySelector('pre')?.innerText || '';
        try { await navigator.clipboard.writeText(text); button.textContent = 'コピー済み'; }
        catch { button.textContent = '選択してコピー'; }
        setTimeout(() => button.textContent = 'コピー', 1500);
      });
      box.appendChild(button);
    });
  }

  function filterManual(){
    const q = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    document.querySelectorAll('.chapter').forEach(chapter => {
      let chapterVisible = false;
      chapter.querySelectorAll('details').forEach(details => {
        const hit = !q || details.dataset.search.includes(q);
        details.hidden = !hit;
        if (hit) { chapterVisible = true; visibleCount++; if (q) details.open = true; }
      });
      chapter.hidden = !chapterVisible;
    });
    noResults.hidden = visibleCount !== 0;
  }

  function stripHtml(html){
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }

  render(source);
  searchInput.addEventListener('input', filterManual);
})();
