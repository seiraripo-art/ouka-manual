(() => {
  'use strict';
  const data = window.OUKA_MANUAL;
  const $ = (s, r = document) => r.querySelector(s);
  const root = $('#manualRoot');
  const navList = $('#navList');
  const search = $('#manualSearch');
  const clearSearch = $('#clearSearch');
  const searchStatus = $('#searchStatus');
  const toast = $('#toast');

  $('#manualTitle').textContent = data.title;
  $('#manualSubtitle').textContent = data.subtitle;
  $('#manualIntro').textContent = data.intro;
  $('#manualUpdated').textContent = `Version ${data.version} / 更新 ${data.updated}`;

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/\s+/g, ' ');
  }

  function sectionText(section) {
    return [section.title, section.path, section.command, ...(section.body || [])].filter(Boolean).join(' ');
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 1500);
  }

  async function copyText(value) {
    try {
      await navigator.clipboard.writeText(value);
      showToast('コピーしました');
    } catch {
      const area = document.createElement('textarea');
      area.value = value;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
      showToast('コピーしました');
    }
  }

  function renderQuickLinks() {
    $('#quickLinks').innerHTML = data.quickLinks.map(link => `
      <a class="quick-link ${escapeHtml(link.tone || '')}" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(link.label)}
      </a>`).join('');
  }

  function renderManual() {
    root.innerHTML = '';
    navList.innerHTML = '';
    data.categories.forEach((category, catIndex) => {
      const article = document.createElement('article');
      article.className = 'category';
      article.id = `cat-${category.id}`;
      article.dataset.search = normalize([category.title, category.description, ...category.sections.map(sectionText)].join(' '));
      article.innerHTML = `
        <button class="category-trigger" type="button" aria-expanded="false">
          <span class="category-icon" aria-hidden="true">${escapeHtml(category.icon)}</span>
          <span><span class="category-title">${escapeHtml(category.title)}</span><span class="category-desc">${escapeHtml(category.description)}</span></span>
          <span class="category-chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="category-content"></div>`;

      const content = $('.category-content', article);
      category.sections.forEach((section, index) => {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'manual-section';
        sectionEl.dataset.search = normalize(sectionText(section));
        const pathCard = section.path ? `<div class="path-card"><code>${escapeHtml(section.path)}</code><button class="copy-btn" type="button" data-copy="${escapeHtml(section.path)}">コピー</button></div>` : '';
        const commandCard = section.command ? `<div class="command-card"><code>${escapeHtml(section.command)}</code><button class="copy-btn" type="button" data-copy="${escapeHtml(section.command)}">コピー</button></div>` : '';
        sectionEl.innerHTML = `
          <button class="section-trigger" type="button" aria-expanded="false">
            <span>${escapeHtml(section.title)}</span><span aria-hidden="true">＋</span>
          </button>
          <div class="section-body">
            ${pathCard}${commandCard}
            ${(section.body || []).map(p => `<p>${escapeHtml(p)}</p>`).join('')}
          </div>`;
        content.appendChild(sectionEl);
      });
      root.appendChild(article);

      const nav = document.createElement('a');
      nav.className = 'nav-item';
      nav.href = `#cat-${category.id}`;
      nav.textContent = category.title;
      navList.appendChild(nav);
      if (catIndex === 0) article.classList.add('open');
    });
  }

  function bindInteractions() {
    root.addEventListener('click', event => {
      const catButton = event.target.closest('.category-trigger');
      if (catButton) {
        const category = catButton.closest('.category');
        const open = category.classList.toggle('open');
        catButton.setAttribute('aria-expanded', String(open));
        return;
      }
      const secButton = event.target.closest('.section-trigger');
      if (secButton) {
        const section = secButton.closest('.manual-section');
        const open = section.classList.toggle('open');
        secButton.setAttribute('aria-expanded', String(open));
        secButton.lastElementChild.textContent = open ? '−' : '＋';
        return;
      }
      const copyButton = event.target.closest('[data-copy]');
      if (copyButton) copyText(copyButton.dataset.copy);
    });
  }

  function filterManual(query) {
    const q = normalize(query);
    clearSearch.hidden = !q;
    let matches = 0;
    document.querySelectorAll('.category').forEach(category => {
      let categoryHasMatch = false;
      category.querySelectorAll('.manual-section').forEach(section => {
        const hit = !q || section.dataset.search.includes(q);
        section.hidden = !hit;
        if (hit) { categoryHasMatch = true; if (q) matches += 1; }
      });
      category.hidden = q ? !categoryHasMatch : false;
      if (q && categoryHasMatch) {
        category.classList.add('open');
        const trigger = $('.category-trigger', category);
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
    searchStatus.textContent = q ? `${matches}件の項目が見つかりました` : '';
    const existing = $('.empty-state');
    if (existing) existing.remove();
    if (q && matches === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = '該当する項目がありません。別の言葉で検索してみてください。';
      root.appendChild(empty);
    }
  }

  function setupDrawer() {
    const drawer = $('#navDrawer');
    const backdrop = $('#navBackdrop');
    const open = () => { drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); backdrop.hidden = false; document.body.style.overflow = 'hidden'; };
    const close = () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); backdrop.hidden = true; document.body.style.overflow = ''; };
    $('#openNav').addEventListener('click', open);
    $('#closeNav').addEventListener('click', close);
    backdrop.addEventListener('click', close);
    navList.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      close();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.classList.add('open');
        $('.category-trigger', target)?.setAttribute('aria-expanded','true');
      }
    });
  }

  function setupScroll() {
    const top = $('#backToTop');
    const update = () => top.classList.toggle('show', window.scrollY > 500);
    window.addEventListener('scroll', update, { passive:true });
    top.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
    update();
  }

  renderQuickLinks();
  renderManual();
  bindInteractions();
  setupDrawer();
  setupScroll();
  search.addEventListener('input', () => filterManual(search.value));
  clearSearch.addEventListener('click', () => { search.value = ''; filterManual(''); search.focus(); });
})();
