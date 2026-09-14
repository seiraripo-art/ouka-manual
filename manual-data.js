window.MANUAL_DATA = [
  {
    id:'start', kicker:'BASIC', title:'最初に確認すること', intro:'公開サイト・管理画面・詳細管理の使い分けです。',
    items:[
      {title:'3つの画面の使い分け', body:`
        <div class="table-wrap"><table><thead><tr><th>画面</th><th>URL</th><th>主な用途</th></tr></thead><tbody>
        <tr><td>公開サイト</td><td><a href="https://oukaripo.com/reserve" target="_blank" rel="noopener">oukaripo.com/reserve</a></td><td>お客さんが空き状況を確認し、予約リクエストを送信する画面</td></tr>
        <tr><td>管理画面</td><td><a href="https://admin.oukaripo.com/reserve" target="_blank" rel="noopener">admin.oukaripo.com/reserve</a></td><td>予約確認・確定・キャンセル・出勤枠・送信履歴などの日常運用</td></tr>
        <tr><td>詳細管理</td><td><a href="https://admin.oukaripo.com/reserve/detail" target="_blank" rel="noopener">admin.oukaripo.com/reserve/detail</a></td><td>受付ルール・通知・LINE・文章・サイト内容・デザインの設定</td></tr>
        </tbody></table></div>`},
      {title:'管理画面へログインする', body:`
        <p>管理画面または詳細管理を開き、表示される認証画面で許可されているGoogleアカウントを使ってログインします。</p>
        <p class="note">ログイン後は、普段の予約対応は主に「管理画面」、文章や通知設定を変えるときは「詳細管理」を使います。</p>`}
    ]
  },
  {
    id:'overview', kicker:'OVERVIEW', title:'概要タブ', intro:'今日やることと未対応予約を最初に確認する画面です。',
    items:[
      {title:'予約件数を見る', body:`
        <p>概要には次の3つの件数が表示されます。</p>
        <ul><li><strong>本日の確定予約</strong>：今日の確定済み予約</li><li><strong>未対応予約</strong>：まだ確定・キャンセル処理をしていない予約</li><li><strong>今後の確定予約</strong>：明日以降の確定済み予約</li></ul>
        <p>未対応予約がある場合は目立つ案内が表示されます。「未対応予約を確認」から予約タブへ移動できます。</p>`},
      {title:'今回のアップデート内容', body:`
        <p>概要タブの<strong>一番下</strong>に、現在のバージョンで追加・変更された主な内容が表示されます。</p>
        <p class="note">日常的に使う予約件数や運用リンクが上、更新内容は補足として最下部に表示されます。</p>`}
    ]
  },
  {
    id:'reservation', kicker:'DAILY', title:'予約の確認・対応', intro:'新しい予約が届いてから、確定・連絡・キャンセルまでの基本操作です。',
    items:[
      {title:'新しい予約を確認する', body:`
        <ol><li>管理画面の「予約」タブを開きます。</li><li>「受付済み」の予約を確認します。</li><li>予約日時・お名前・連絡方法・枠数・料金・コースを確認します。</li><li>内容を確認したら「確定」または必要な処理を行います。</li></ol>
        <p>通常予約は<strong>110分コース</strong>、二輪車予約は<strong>二輪車</strong>と表示されます。確定前は店舗名を表示せず、確定後に確定店舗が表示されます。</p>`},
      {title:'予約を確定する', body:`
        <ol><li>対象予約の「確定」を押します。</li><li>確定店舗を選びます。</li><li>件名・本文を確認します。予約確定用テンプレートが自動で読み込まれます。</li><li>必要なら文章や管理メモを編集し、「実行」を押します。</li></ol>
        <p class="note">お客さんへの通知だけ送信に失敗した場合は、予約確定そのものとは分けて表示されます。予約一覧の状態と表示メッセージを確認してください。</p>`},
      {title:'お客さんへ連絡する・送信履歴を見る', body:`
        <p>各予約の<strong>「連絡を送信」</strong>から、その予約のお客さんへ個別メッセージを送れます。</p>
        <p><strong>「送信履歴」</strong>では、その予約に紐づく送信日時・送信内容・送信結果を確認できます。</p>`},
      {title:'予約情報を削除する', body:`
        <p>各予約の「予約情報を削除」から予約データを削除できます。確認画面が表示されるので、対象予約を確認してから実行します。</p>
        <p class="important">この操作はキャンセル処理とは別です。予約自体を管理画面から消したい場合に使います。</p>`},
      {title:'手動で予約を追加する', body:`
        <p>予約タブの<strong>「＋ 手動で予約を追加」</strong>から、電話やLINEなどで受けた予約を登録できます。</p>
        <ul><li>出勤枠がまだ作られていない日でも登録可能</li><li>開始時間は 9:00 / 11:00 / 13:00 / 15:00 / 17:00 / 19:00 / 21:00</li><li>登録した時間は予約済みとして扱われ、あとから出勤枠を作っても公開側では×になります</li><li>必要なら登録と同時に予約確定メールを送信できます</li></ul>`},
      {title:'キャンセルする', body:`
        <p>管理画面からキャンセルする場合は対象予約の「キャンセル」を押し、キャンセル区分と送信文を確認して実行します。</p>
        <p>オンラインキャンセルの初期設定は<strong>予約日の3日前23:59まで</strong>です。期限を過ぎてから成立した予約は、予約サイトからのオンラインキャンセルはできません。</p>`}
    ]
  },
  {
    id:'booking', kicker:'BOOKING', title:'予約リクエストの流れ', intro:'公開サイトから予約を送ったときの画面と、直前予約の扱いです。',
    items:[
      {title:'予約フォームのお名前欄', body:`
        <p>お名前欄は<strong>「氏名（偽名可）」</strong>です。</p>
        <p>呼ばれたいお名前でも構いません。入力は<strong>ひらがな20文字まで</strong>です。</p>`},
      {title:'通常受付中に送信した場合', body:`
        <p>予約リクエストの送信に成功すると、入力フォームは消えて<strong>専用の送信完了画面</strong>へ切り替わります。</p>
        <p>画面には「予約リクエストを送信しました」と表示され、日時・コース・お名前・ご連絡の目安を確認できます。</p>
        <p><strong>この時点ではまだ予約確定ではありません。</strong> 桜香からの予約確定連絡を待ちます。</p>
        <div class="note"><strong>ご連絡の目安</strong><br>・予約希望日の2日前以前：24時間以内<br>・前日：予約当日の8:00まで<br>・当日：予約時間の1時間前まで</div>`},
      {title:'通常受付の締切を過ぎた直前予約', body:`
        <p>締切を過ぎていても、通常枠は<strong>日時選択 → フォーム入力 → 内容確認 → 予約リクエスト送信</strong>まで進めます。</p>
        <p>送信後は「📞 続けてお店へお電話ください」が目立つ形で表示されます。</p>
        <p>お電話の際は、<strong>「桜香の姫予約サイトから予約リクエストを送りました」</strong>と伝えます。</p>
        <p>スマホでは「📞 お店へ電話する」ボタンから発信画面を開けます。</p>
        <p class="important">サイトへの送信だけでは予約確定になりません。店舗で電話受付後、管理側で確定します。</p>`},
      {title:'直前予約の自動返信', body:`
        <p>通常受付の締切後に届いた予約リクエストでは、自動返信にも<strong>店舗への電話が必要</strong>という案内が追加されます。</p>
        <p>予約受付メール自体には、オンラインキャンセル用URLの案内は表示しません。</p>`}
    ]
  },
  {
    id:'schedule', kicker:'SCHEDULE', title:'出勤枠・予約受付ルール', intro:'出勤枠の表示と、オンライン受付の締切を管理します。',
    items:[
      {title:'出勤枠を設定する', body:`
        <p>管理画面の「出勤枠」タブから日付を選び、各時間の受付・勤務区分・満室案内・手動表示を設定します。</p>
        <p>手動表示を<strong>「自動（受付ルールに従う）」</strong>にしている枠は、詳細管理の「予約受付ルール」を自動で参照します。</p>`},
      {title:'予約受付ルールを変更する', body:`
        <p>詳細管理の「予約受付ルール」で主に次を変更できます。</p>
        <ul><li>9:00枠のオンライン締切</li><li>11:00以降を開始何分前まで通常受付にするか</li><li>姫予約限定の前日締切</li><li>当日の通常枠を受け付けるか</li><li>2枠予約</li><li>前日確認の自動送信</li><li>二輪車予約</li><li>オンラインキャンセル</li></ul>
        <p>自動設定の枠は、受付ルールを変更すると<strong>各枠を作り直さなくても新しい締切に従います。</strong></p>`},
      {title:'翌月の予定を見る・公開範囲を設定する', body:`
        <p>公開サイトのカレンダーは、最初は当月が表示されます。右上の<strong>「›」</strong>を押すと翌月、左の<strong>「‹」</strong>を押すと当月へ戻れます。</p>
        <p>翌月に出勤枠を登録していても、公開範囲の最終日より後の日付は公開されません。翌月分を公開するときは、管理画面の「出勤枠」で対象月を表示し、<strong>公開範囲</strong>を設定します。</p>
        <ol><li>管理画面 →「出勤枠」を開きます。</li><li>月を翌月に変更して「表示」を押します。</li><li>「公開範囲」から「第○週まで」または「制限なし」を選びます。</li><li>「保存」を押します。</li></ol>
        <p>たとえば翌月の第3週まで公開したい場合は、翌月を表示して<strong>「第3週まで」</strong>を選んで保存します。</p>
        <p class="note">カレンダーの月送りボタン自体は常に翌月まで使えます。実際に予定が見える範囲は、この「公開範囲」の設定に従います。</p>`},
      {title:'手動表示を使う場合', body:`
        <p>特定の枠だけ自動判定から外したい場合は、出勤枠の「手動表示」で<strong>空き固定／直前予約扱い（📞）／×</strong>を選べます。</p>
        <p class="note">通常運用では「自動（受付ルールに従う）」にしておくと、受付ルール側だけ変更すれば済みます。</p>`}
    ]
  },
  {
    id:'notifications', kicker:'NOTICE', title:'管理者通知・店舗LINE通知', intro:'予約が動いたときのメール・LINE通知を設定します。',
    items:[
      {title:'管理者通知を設定する', body:`
        <p>詳細管理の「管理者通知」で、管理者メール通知・管理者LINE通知の全体ON/OFFと、通知タイミングごとのON/OFFを設定できます。</p>
        <p>新規予約、予約確定、前日確認、お客さんへの送信控え、キャンセル、重要エラーなどを個別に選べます。</p>
        <p class="important">全体スイッチがOFFの場合、個別項目がONでもその通知方法では届きません。</p>`},
      {title:'送信控え', body:`
        <p>管理画面からお客さんへ送った予約確定・前日確認・手動メッセージなどの内容を、管理者にも控えとして送れます。</p>
        <p>予約単位の内容は、予約タブの「送信履歴」からも確認できます。</p>`},
      {title:'店舗LINE通知を設定する', body:`
        <p>詳細管理の<strong>「店舗LINE通知」</strong>では、予約受付時刻に関係なく、<strong>新しい予約リクエストが入るたびに</strong>店舗の通常LINEへ自動通知できます。</p>
        <ol><li><strong>「新しい予約を店舗LINEへ通知する」</strong>をONにします。</li><li>通知先を登録します。</li><li>「テスト送信」で届くことを確認します。</li></ol>
        <p>通知には、日時・氏名・電話番号・コース・枠数・二輪車の有無／相手・来店状況・<strong>満室時の対応</strong>・候補日時（入力がある場合）など、店舗受付に必要な情報が入ります。</p>
        <p>通知内の<strong>「管理画面」</strong>リンクから、未対応予約の一覧へ直接移動できます。</p>
        <p class="note">通常予約も直前予約も通知対象です。直前予約だけは「直前予約リクエスト」と表示され、お客さんへ店舗への電話を案内済みであることも一緒に通知されます。</p>
        <p class="important">店舗LINEへの通知に失敗しても、お客さんの予約リクエスト自体は失敗扱いになりません。</p>`},
      {title:'最近メッセージを送ったLINEから店舗を登録する', body:`
        <ol><li>お店の通常LINEから、桜香のLINE公式アカウントへ一度メッセージを送ってもらいます。</li><li>管理画面の「店舗LINE通知」で「最近のLINEを更新」を押します。</li><li>表示された候補の<strong>「このLINEを店舗通知先に設定」</strong>を押します。</li></ol>
        <p>この方法なら、長いUser IDを自分で探して入力する必要はありません。必要な場合はUser IDの直接入力もできます。</p>`}
    ]
  },
  {
    id:'line', kicker:'LINE', title:'LINE連携の初期設定', intro:'LINE公式アカウントは持っているけれど、LINE DevelopersやAPIは初めてという場合の手順です。',
    items:[
      {title:'用意するLINEの設定値', body:`
        <div class="table-wrap"><table><thead><tr><th>設定値</th><th>使い道</th><th>取得場所</th></tr></thead><tbody>
        <tr><td><strong>LINE Login Channel ID</strong></td><td>お客さんとのLINE連携</td><td>LINE Developers → LINE Loginチャネル → チャネル基本設定</td></tr>
        <tr><td><strong>LINE Login Channel Secret</strong></td><td>LINE Loginの認証</td><td>LINE Developers → LINE Loginチャネル → チャネル基本設定</td></tr>
        <tr><td><strong>Messaging API Channel Access Token</strong></td><td>LINE公式アカウントからメッセージ送信</td><td>LINE Developers → Messaging APIチャネル → Messaging API設定</td></tr>
        <tr><td><strong>Messaging API Channel Secret</strong></td><td>店舗LINE候補を受け取るWebhookの確認</td><td>LINE Developers → Messaging APIチャネル → チャネル基本設定</td></tr>
        </tbody></table></div>`},
      {title:'STEP 1：既存のLINE公式アカウントでMessaging APIを有効にする', body:`
        <ol><li><a href="https://manager.line.biz/" target="_blank" rel="noopener">LINE Official Account Manager</a>へログインします。</li><li>桜香のLINE公式アカウントを選びます。</li><li>「設定」→「Messaging API」を開きます。</li><li>未利用なら「Messaging APIを利用する」を押し、プロバイダーを選びます。</li></ol>
        <p class="note">LINE Loginチャネルも、できるだけ同じプロバイダー内に作ります。</p>`},
      {title:'STEP 2：Messaging APIのAccess TokenとChannel Secretを取得する', body:`
        <ol><li><a href="https://developers.line.biz/console/" target="_blank" rel="noopener">LINE Developers Console</a>を開きます。</li><li>桜香のLINE公式アカウントに対応するMessaging APIチャネルを開きます。</li><li>「Messaging API設定」から<strong>Channel Access Token</strong>を発行・コピーします。</li><li>「チャネル基本設定」から<strong>Channel Secret</strong>をコピーします。</li></ol>
        <p>取得した値を詳細管理の「LINE設定」に入力します。</p>`},
      {title:'STEP 3：LINE Loginチャネルを作る', body:`
        <ol><li>LINE Developers Consoleで同じプロバイダーを開きます。</li><li>LINE Loginチャネルを作成します。</li><li>アプリタイプはウェブアプリを選びます。</li><li>「チャネル基本設定」から<strong>Channel ID</strong>と<strong>Channel Secret</strong>を取得します。</li><li>「LINEログイン設定」に、予約システムで使用するコールバックURLを登録します。</li></ol>`},
      {title:'STEP 4：予約システムへ保存して確認する', body:`
        <ol><li>詳細管理 →「LINE設定」を開きます。</li><li>LINE Login Channel ID / Secret、Messaging API Channel Access Token / Secretを入力します。</li><li>利用したい「LINE予約連携」「お客さんへのLINE送信」「管理者LINE通知」をONにします。</li><li>保存後、「接続テスト」で確認します。</li></ol>
        <p class="note">秘密情報は保存後に画面へそのまま再表示されません。「設定済み」の表示で確認します。</p>`},
      {title:'店舗LINE候補を取得するためのWebhook（詳しい手順）', body:`
        <p>この設定は、<strong>お店の通常LINEから桜香のLINE公式アカウントへ送られたメッセージを予約システムが受け取り、そのLINEを店舗通知先の候補として表示するため</strong>に使います。</p>
        <p class="important">使うのは<strong>LINE Loginチャネルではなく、桜香のLINE公式アカウントに紐づいているMessaging APIチャネル</strong>です。</p>

        <h4>設定前に確認すること</h4>
        <ol>
          <li>詳細管理 → <strong>「LINE設定」</strong>を開きます。</li>
          <li><strong>Messaging API Channel Access Token</strong>が設定済みになっていることを確認します。</li>
          <li><strong>Messaging API Channel Secret</strong>が設定済みになっていることを確認します。<br><small>※ LINE Login Channel Secretとは別物です。</small></li>
          <li>未設定の場合は、LINE DevelopersのMessaging APIチャネルから取得して保存してから先へ進みます。</li>
        </ol>

        <h4>STEP 1：予約システム側のWebhook URLをコピーする</h4>
        <ol>
          <li>詳細管理 → <strong>「店舗LINE通知」</strong>を開きます。</li>
          <li><strong>「Webhook URL」</strong>欄に表示されているURLをコピーします。</li>
          <li>現在の通常URLは <code>https://oukaripo.com/line/webhook</code> です。<br><small>※ 将来URLが変わる可能性があるため、手入力せず管理画面に表示されているURLをコピーするのがおすすめです。</small></li>
        </ol>

        <h4>STEP 2：LINE DevelopersでMessaging APIチャネルを開く</h4>
        <ol>
          <li><a href="https://developers.line.biz/console/" target="_blank" rel="noopener">LINE Developers Console</a>へログインします。</li>
          <li>桜香のLINE公式アカウントで使っている<strong>プロバイダー</strong>を開きます。</li>
          <li>チャネル一覧から、桜香のLINE公式アカウントに紐づいた<strong>Messaging API</strong>チャネルを開きます。</li>
          <li>上部メニューの<strong>「Messaging API設定」</strong>を開きます。</li>
        </ol>
        <p class="note">「LINE Login」と書かれたチャネルではありません。LINE公式アカウント名が表示されているMessaging APIチャネルを選びます。</p>

        <h4>STEP 3：Webhook URLを登録して検証する</h4>
        <ol>
          <li>「Messaging API設定」の中にある<strong>Webhook設定</strong>までスクロールします。</li>
          <li><strong>Webhook URL</strong>に、STEP 1でコピーしたURLを貼り付けます。</li>
          <li>「更新」などの保存操作を行います。</li>
          <li><strong>「検証」</strong>を押します。</li>
          <li>成功の表示が出れば、LINEから予約システムへWebhookを送れる状態です。</li>
          <li><strong>「Webhookの利用」</strong>をONにします。</li>
        </ol>
        <p class="note">LINE Official Account Manager側にWebhookのON/OFFが表示される場合もONにします。LINE Developers側とOfficial Account Manager側のWebhook設定は同期します。</p>

        <h4>STEP 4：お店のLINEからメッセージを1通送る</h4>
        <ol>
          <li>店舗スタッフが普段使っているLINEアカウントで、桜香のLINE公式アカウントを友だち追加します。</li>
          <li><strong>店舗スタッフの個人LINE → 桜香のLINE公式アカウント</strong>へ、1対1のトークでメッセージを1通送ります。</li>
          <li>内容は「テスト」「店舗です」など何でも構いません。</li>
        </ol>
        <p class="important">グループトークやオープンチャットではなく、<strong>通知先にしたい本人の通常LINEから公式LINEへ直接</strong>送ってください。</p>

        <h4>STEP 5：管理画面で候補を確認して登録する</h4>
        <ol>
          <li>詳細管理 → <strong>「店舗LINE通知」</strong>へ戻ります。</li>
          <li><strong>「最近のLINEを更新」</strong>を押します。</li>
          <li>「最近メッセージを送ったLINEアカウント」に、先ほど送信したLINEの表示名・User ID・日時が表示されます。</li>
          <li>該当するLINEの<strong>「このLINEを店舗通知先に設定」</strong>を押します。</li>
          <li><strong>「新しい予約を店舗LINEへ通知する」</strong>をONにして、設定を保存します。</li>
          <li>最後に<strong>「テスト送信」</strong>を押し、お店のLINEへメッセージが届くことを確認します。</li>
        </ol>

        <h4>候補が表示されない場合</h4>
        <div class="table-wrap"><table><thead><tr><th>確認するところ</th><th>対処</th></tr></thead><tbody>
          <tr><td>Webhookの検証が失敗する</td><td>管理画面のWebhook URLをコピーし直し、詳細管理 → LINE設定で<strong>Messaging API Channel Secret</strong>が設定済みか確認します。</td></tr>
          <tr><td>検証は成功するが候補が出ない</td><td>LINE Developersの<strong>「Webhookの利用」</strong>がONか確認し、店舗の通常LINEから公式LINEへもう一度1対1でメッセージを送ります。</td></tr>
          <tr><td>「Webhook署名：未設定」と出る</td><td>詳細管理 → LINE設定へ<strong>Messaging API Channel Secret</strong>を保存します。LINE Login Channel Secretではありません。</td></tr>
          <tr><td>「Messaging API：未設定」と出る</td><td>詳細管理 → LINE設定へ<strong>Messaging API Channel Access Token</strong>を保存します。</td></tr>
          <tr><td>候補は出るがテスト送信が届かない</td><td>通知先に設定したLINEが桜香の公式LINEを友だち追加済みで、ブロックしていないことを確認します。</td></tr>
        </tbody></table></div>
        <p class="note">一度通知先を登録すれば、通常は毎回Webhook設定をやり直す必要はありません。店舗LINEの通知先を変更するときだけ、同じ手順で新しいLINEからメッセージを送って登録します。</p>`}
    ]
  },
  {
    id:'content', kicker:'SITE', title:'公開サイトの編集', intro:'自己紹介・サービス内容・FAQ・表示順などを詳細管理から変更できます。',
    items:[
      {title:'自己紹介「桜香について」を編集する', body:`
        <p>詳細管理 →「サイト内容」の自己紹介は、簡易リッチエディタで作成します。</p>
        <p>「＋ 文字」「＋ 画像」「＋ セクション区切り」から要素を追加し、各要素ごとに編集します。</p>
        <ul><li>文字サイズ</li><li>フォント</li><li>文字色</li><li>太字</li><li>左寄せ／中央寄せ／右寄せ</li><li>リンクURL</li><li>画像</li><li>表示／非表示</li><li>↑↓またはドラッグによる並べ替え</li><li>削除</li></ul>
        <p>下部のプレビューを確認して「自己紹介を保存」を押します。自己紹介全体の表示ON/OFFも切り替えられます。</p>`},
      {title:'サービス内容を編集する', body:`
        <p>「110分の過ごし方」で、各項目のタイトル・文章を編集できます。項目追加・削除も可能です。</p>
        <p>「最後のメッセージ」は折り畳みの外に常時表示される文章です。</p>`},
      {title:'よくあるご質問を編集する', body:`
        <p>詳細管理の「よくあるご質問」から質問・回答・表示ON/OFF・並び順を編集できます。</p>
        <p>FAQデザインでは、見出し・質問・回答の文字サイズ、太字、色なども変更できます。</p>`},
      {title:'公開サイトの表示順序を変更する', body:`
        <p>詳細管理 →「サイト内容」の<strong>「公開サイトの表示順序」</strong>で、次の6項目を並べ替えられます。</p>
        <ul><li>カレンダー・出勤予定</li><li>ご予約の流れ</li><li>料金</li><li>自己紹介／桜香について</li><li>サービス内容紹介／桜香と過ごす110分</li><li>よくある質問</li></ul>
        <p>PCではドラッグ、スマホでは↑↓ボタンでも変更できます。「表示順序を保存」を押すと公開サイトへ反映されます。</p>`},
      {title:'トップ紹介文・サイトデザイン', body:`
        <p>トップ紹介文、背景、トップバナー、追加バナー、半透明カードの色や透明度なども詳細管理から編集できます。</p>
        <p>変更後は公開サイトをPC・スマホの両方で確認すると分かりやすいです。</p>`}
    ]
  },
  {
    id:'messages', kicker:'MESSAGE', title:'メール・LINE文章', intro:'自動返信や予約確定など、お客さんへ送る文章を編集します。',
    items:[
      {title:'テンプレートを編集する', body:`
        <p>詳細管理の「メール・LINE文章」から、予約受付・予約確定・前日確認・キャンセルなどの文章を編集できます。</p>
        <p>予約日時・お名前・料金などの自動入力部分は、送信時に実際の予約情報へ置き換わります。</p>`},
      {title:'条件付き文章を編集する', body:`
        <p>「条件付き文章」では、9:00予約・二輪車など、特定条件のときだけ入る文章を編集できます。</p>`},
      {title:'送信前にテストする', body:`
        <p>メール送信環境にはテンプレートのテスト送信機能があります。実予約を作らずに、現在の文章と自動入力内容を確認できます。</p>
        <p>LINEも「LINEテンプレートテスト」から指定したUser IDへ確認送信できます。</p>`}
    ]
  },
  {
    id:'shiftimage', kicker:'IMAGE TOOL', title:'シフト一覧画像生成', intro:'告知用のシフト一覧画像を作成し、設定や画像を保存できます。',
    items:[
      {title:'画像設定を保存・読み込む', body:`
        <p>編集状態を残したい場合は<strong>「画像設定を保存」</strong>を使います。</p>
        <p>別端末などで保存済みの状態へ戻す場合は<strong>「保存した設定を読み込む」</strong>を使います。</p>
        <p class="note">画面上では「D1」などの技術用語は使わず、保存する内容が分かる表記になっています。</p>`},
      {title:'PCでシフト画像を保存する', body:`
        <ol><li>保存形式を JPG / PNG / WebP から選びます。</li><li>「シフト画像を保存」を押します。</li><li>ブラウザのダウンロードとして画像が保存されます。</li></ol>`},
      {title:'iPhone・iPadで写真に保存する', body:`
        <ol><li>「シフト画像を保存」を押します。</li><li>iOSの共有メニューが開いたら<strong>「画像を保存」</strong>を選びます。</li><li>写真ライブラリへ保存されます。</li></ol>
        <p>共有メニューを開けない場合は保存用画像が表示されるので、画像を長押しして「写真に保存」または「画像を保存」を選びます。</p>
        <p class="note">WebPを選んでいる場合、iPhone・iPadでは写真へ保存しやすいよう共有時にJPGへ変換されます。</p>`}
    ]
  },
  {
    id:'price', kicker:'PRICE', title:'料金の見方', intro:'予約一覧や系列店案内で使われる基本料金です。',
    items:[
      {title:'基本料金と系列店割引', body:`
        <div class="table-wrap"><table><thead><tr><th>内容</th><th>料金・割引</th></tr></thead><tbody>
        <tr><td>110分・1枠</td><td>72,500円</td></tr>
        <tr><td>110分・2枠</td><td>145,000円</td></tr>
        <tr><td>通常110分コースで系列店案内</td><td>1枠につき11,000円引き</td></tr>
        <tr><td>二輪車で系列店案内</td><td>1枠につき22,000円引き</td></tr>
        </tbody></table></div>
        <p>二輪車は枠数×キャスト人数分の料金計算になります。</p>`}
    ]
  }
];
