window.MANUAL_DATA = [
  {
    id:'start', kicker:'BASIC', title:'最初に確認すること', intro:'予約サイト・管理画面・詳細管理の使い分けと、普段の運用で使う入口です。',
    items:[
      {title:'3つの画面の使い分け', body:`
        <div class="table-wrap"><table><thead><tr><th>画面</th><th>URL</th><th>主な用途</th></tr></thead><tbody>
        <tr><td>公開サイト</td><td><a href="https://oukaripo.com/reserve" target="_blank" rel="noopener">oukaripo.com/reserve</a></td><td>お客さんが空き状況を確認して予約する画面</td></tr>
        <tr><td>管理画面</td><td><a href="https://admin.oukaripo.com/reserve" target="_blank" rel="noopener">admin.oukaripo.com/reserve</a></td><td>予約確認・予約対応など、日常的な予約管理</td></tr>
        <tr><td>詳細管理</td><td><a href="https://admin.oukaripo.com/reserve/detail" target="_blank" rel="noopener">admin.oukaripo.com/reserve/detail</a></td><td>通知・サイト内容・テンプレート・デザインなどの設定</td></tr>
        </tbody></table></div>
        <p class="note">管理画面と詳細管理はCloudflare Accessで保護されています。</p>`},
      {title:'管理画面へログインする', body:`
        <p>管理画面または詳細管理へアクセスすると、Cloudflare Accessの認証画面が表示されます。許可されているGoogleアカウントで認証してください。</p>
        <p>テスト期間中は、次の2アカウントを許可する運用です。</p>
        <div class="codebox"><pre>ouka.admin@gmail.com\nookaripo.reserve@gmail.com</pre></div>
        <p>正式運用後にテスト用アカウントを外す場合は、Cloudflare Access側とWorker側の許可設定の両方を変更します。</p>`}
    ]
  },
  {
    id:'reservation', kicker:'DAILY', title:'予約の確認・対応', intro:'新しい予約が入った後に使う基本操作です。',
    items:[
      {title:'新しい予約を確認する', body:`
        <ol><li>管理画面を開きます。</li><li>予約一覧から対象の予約を開きます。</li><li>予約日時・枠数・お名前・連絡方法などを確認します。</li><li>内容を確認して、予約確定など必要な操作を行います。</li></ol>
        <p class="note">新規予約通知をONにしている場合は、設定したメールまたはLINEにも管理者通知が届きます。</p>`},
      {title:'予約を確定する', body:`
        <p>予約内容を確認したうえで「予約確定」の操作を行います。お客さんには、現在設定されている予約確定テンプレートの内容が送信されます。</p>
        <p>管理者への送信控えをONにしている場合、実際にお客さんへ送った内容の控えも管理者へ届きます。</p>`},
      {title:'前日確認を送る', body:`
        <p>前日確認の対象予約に対して送信します。管理者通知設定で「前日確認を送ったとき」の控えをONにしている場合、メールまたはLINEにも控えが届きます。</p>`},
      {title:'管理画面から手動メッセージを送る', body:`
        <p>予約詳細から、お客さんへ個別のメッセージを送信できます。送信控えをONにしていると、送った本文を管理者側でも確認できます。</p>`},
      {title:'オンラインキャンセル', body:`
        <p>予約には専用のキャンセルURLを使用するオンラインキャンセル機能があります。キャンセルが成立すると対象枠が解放されます。</p>
        <p>初期のオンラインキャンセル期限は<strong>予約日の3日前23:59</strong>です。キャンセル通知をONにしている場合、管理者へ通知されます。</p>`}
    ]
  },
  {
    id:'schedule', kicker:'SCHEDULE', title:'出勤・枠の管理', intro:'公開カレンダーへ出す予約枠を管理します。',
    items:[
      {title:'枠を設定する', body:`
        <p>管理画面の枠管理から、公開する日付と時間帯を設定します。通常枠は予約可能な時間を過ぎると電話案内表示を経て受付終了となり、姫予約限定枠は締切後に受付終了になります。</p>
        <p>設定後は公開サイトで表示を確認してください。</p>`},
      {title:'公開サイトの受付表示', body:`
        <div class="table-wrap"><table><thead><tr><th>区分</th><th>締切後の流れ</th></tr></thead><tbody>
        <tr><td>通常枠</td><td>予約可能 → 📞 → ×</td></tr>
        <tr><td>姫予約限定</td><td>予約可能 → ×</td></tr>
        </tbody></table></div>
        <p class="note">予約送信時にもサーバー側で締切が再判定されます。</p>`}
    ]
  },
  {
    id:'notifications', kicker:'v1.2.5', title:'管理者通知設定', intro:'v1.2.5では、管理者が受け取る通知をメール・LINEごとに細かく切り替えられます。',
    items:[
      {title:'親スイッチと個別スイッチの考え方', body:`
        <p>詳細管理の「管理者通知設定」には、メールとLINEそれぞれに<strong>全体ON/OFF</strong>があります。</p>
        <ul><li><strong>管理者メール通知 全体ON/OFF</strong></li><li><strong>管理者LINE通知 全体ON/OFF</strong></li></ul>
        <p class="important">親スイッチがOFFの場合、下の個別項目をONにしていてもその通知方法では送信されません。</p>`},
      {title:'通知ごとのON/OFF', body:`
        <div class="table-wrap"><table><thead><tr><th>通知内容</th><th>メール</th><th>LINE</th></tr></thead><tbody>
        <tr><td>新しい予約が入ったとき</td><td>ON/OFF</td><td>ON/OFF</td></tr>
        <tr><td>予約を確定したとき</td><td>ON/OFF</td><td>ON/OFF</td></tr>
        <tr><td>前日確認を送ったとき</td><td>ON/OFF</td><td>ON/OFF</td></tr>
        <tr><td>管理画面からお客さんへメッセージを送ったときの控え</td><td>ON/OFF</td><td>ON/OFF</td></tr>
        <tr><td>キャンセルが発生したとき</td><td>ON/OFF</td><td>ON/OFF</td></tr>
        <tr><td>送信エラー等の重要エラー</td><td>ON/OFF</td><td>ON/OFF</td></tr>
        </tbody></table></div>`},
      {title:'送信控えとは', body:`
        <p>予約確定・前日確認・手動メッセージ・キャンセル関連など、管理画面からお客さんへ送信した内容を管理者自身にも届ける機能です。</p>
        <p>LINEの送信控えでも、<strong>お客さんへ実際に送った内容が分かる形</strong>で通知されます。</p>
        <p class="tip">「送ったはずだけど、何を送ったか確認したい」というときに使いやすいので、普段は控え通知をONにしておくと管理しやすいです。</p>`},
      {title:'LINEが未設定の場合', body:`
        <p>LINE公式アカウント側のAPI設定がまだ終わっていない場合は、管理者LINE通知をOFFのまま使用できます。メール通知だけで予約システムを運用できます。</p>`}
    ]
  },
  {
    id:'line', kicker:'LINE', title:'LINE連携を設定する', intro:'LINE公式アカウントはすでに持っているけれど、LINE DevelopersやAPIは初めて、という前提で説明します。',
    items:[
      {title:'最初に知っておくこと：LINE LoginとMessaging APIは別', body:`
        <p>この予約システムでは、LINEまわりで役割の違う設定値を使います。</p>
        <div class="table-wrap"><table><thead><tr><th>必要な値</th><th>役割</th><th>取得場所</th></tr></thead><tbody>
        <tr><td><strong>LINE Login Channel ID</strong></td><td>お客さんが予約サイトとLINEを連携するときの認証</td><td>LINE Developers → LINE Loginチャネル → チャネル基本設定</td></tr>
        <tr><td><strong>LINE Login Channel Secret</strong></td><td>LINE Loginの認証処理</td><td>LINE Developers → LINE Loginチャネル → チャネル基本設定</td></tr>
        <tr><td><strong>Messaging API Channel Access Token</strong></td><td>LINE公式アカウントからメッセージを送るための認証</td><td>LINE Developers → Messaging APIチャネル → Messaging API設定</td></tr>
        </tbody></table></div>
        <p class="important">LINE LoginチャネルとMessaging APIチャネルは別です。Channel IDとChannel SecretをMessaging APIのアクセストークン代わりに使うものではありません。</p>`},
      {title:'STEP 1：LINE Official Account ManagerでMessaging APIを有効にする', body:`
        <p>すでに持っている桜香のLINE公式アカウントを使います。新しく公式アカウントを作り直す必要はありません。</p>
        <ol>
          <li><a href="https://manager.line.biz/" target="_blank" rel="noopener">LINE Official Account Manager</a>へログインします。</li>
          <li>桜香のLINE公式アカウントを選びます。</li>
          <li>画面右上付近の「設定」を開きます。</li>
          <li>「Messaging API」を開きます。</li>
          <li>Messaging APIをまだ利用していなければ「Messaging APIを利用する」を押します。</li>
          <li>プロバイダーの選択画面が出たら、今後LINE Loginでも使うプロバイダーを選びます。</li>
        </ol>
        <p class="note">現在はLINE Developers ConsoleからMessaging APIチャネルを直接新規作成する方式ではありません。既存のLINE公式アカウントでMessaging APIを有効にすると、対応するMessaging APIチャネルが作成されます。</p>
        <p class="important">プロバイダーは後から気軽に変える前提にしない方がいいです。LINE Loginチャネルも同じプロバイダーにまとめてください。</p>
        <p><a href="https://developers.line.biz/ja/docs/messaging-api/getting-started/" target="_blank" rel="noopener">LINE公式：Messaging APIを始めよう</a></p>`},
      {title:'STEP 2：Messaging API Channel Access Tokenを取得する', body:`
        <ol>
          <li><a href="https://developers.line.biz/console/" target="_blank" rel="noopener">LINE Developers Console</a>へログインします。</li>
          <li>STEP 1で選んだプロバイダーを開きます。</li>
          <li>桜香のLINE公式アカウントに対応する<strong>Messaging APIチャネル</strong>を開きます。</li>
          <li>「Messaging API設定」タブを開きます。</li>
          <li>「チャネルアクセストークン」の項目までスクロールします。</li>
          <li>この予約システムへ固定値として登録する場合は、画面から発行できる<strong>長期のチャネルアクセストークン</strong>を使用します。</li>
          <li>発行された文字列をコピーして、安全な場所に一時保存します。</li>
        </ol>
        <p class="important">長期チャネルアクセストークンを再発行すると、それまで使っていた長期トークンは無効になります。再発行した場合は予約システム側の設定も入れ替えてください。</p>
        <p><a href="https://developers.line.biz/ja/docs/basics/channel-access-token/" target="_blank" rel="noopener">LINE公式：チャネルアクセストークン</a></p>`},
      {title:'STEP 3：LINE Loginチャネルを作る', body:`
        <ol>
          <li>LINE Developers Consoleで、Messaging APIチャネルと<strong>同じプロバイダー</strong>を開きます。</li>
          <li>新しいチャネルを作成し、チャネルの種類で<strong>LINE Login</strong>を選びます。</li>
          <li>チャネル名・説明など必要項目を入力します。</li>
          <li>アプリタイプは予約サイトで使うため<strong>ウェブアプリ</strong>を選びます。</li>
          <li>作成したLINE Loginチャネルを開きます。</li>
        </ol>
        <p class="note">LINE公式アカウントをLINE Loginチャネルへリンクする場合も、同じプロバイダー内の公式アカウントだけが対象です。</p>
        <p><a href="https://developers.line.biz/ja/docs/line-login/getting-started/" target="_blank" rel="noopener">LINE公式：LINEログインを始めよう</a></p>`},
      {title:'STEP 4：LINE Login Channel IDを取得する', body:`
        <ol><li>作成したLINE Loginチャネルを開きます。</li><li>「チャネル基本設定」タブを開きます。</li><li><strong>チャネルID（Channel ID）</strong>を探します。</li><li>表示されている数字をコピーします。</li></ol>
        <p>これが<strong>LINE Login Channel ID</strong>です。</p>`},
      {title:'STEP 5：LINE Login Channel Secretを取得する', body:`
        <ol><li>同じLINE Loginチャネルの「チャネル基本設定」を開きます。</li><li><strong>チャネルシークレット（Channel secret）</strong>を探します。</li><li>表示または発行された文字列をコピーします。</li></ol>
        <p>これが<strong>LINE Login Channel Secret</strong>です。</p>
        <p class="important">Channel Secretはパスワードと同じ扱いです。公開ページ・スクリーンショット・GitHubなどへ載せないでください。</p>`},
      {title:'STEP 6：LINE LoginのコールバックURLを設定する', body:`
        <ol><li>LINE Loginチャネルの「LINEログイン設定」タブを開きます。</li><li>「コールバックURL」に、桜香予約システムで指定されているLINE Login用コールバックURLを登録します。</li><li>保存します。</li></ol>
        <p class="important">コールバックURLは1文字でも違うとログインできません。ここは予約システム側で使用しているURLをそのまま登録してください。</p>`},
      {title:'STEP 7：本番利用できる状態にする', body:`
        <p>LINE Loginチャネルを作成した直後は、開発者やテスターだけが利用できる状態になっている場合があります。お客さんが利用する前に、LINE Developers Consoleでチャネルの公開状態を確認してください。</p>
        <p class="note">テスト中は自分のアカウントでLINE連携を確認し、本番公開後に実際のお客さんが利用できる状態になっているか確認します。</p>`},
      {title:'最終的に用意する3つの値', body:`
        <div class="checks"><span>□ LINE Login Channel ID</span><span>□ LINE Login Channel Secret</span><span>□ Messaging API Channel Access Token</span></div>
        <p>この3つが揃えば、LINE LoginとMessaging APIの基本的な認証情報が揃います。</p>
        <p class="important">予約システムへ登録するときは、各値をそれぞれ対応する設定へ入れます。Channel SecretやAccess Tokenを公開HTMLへ直接書かないでください。</p>`},
      {title:'LINE連携後の確認', body:`
        <ol><li>公開予約サイトからLINE連携を試します。</li><li>LINE連携が完了できることを確認します。</li><li>テスト予約を入れます。</li><li>管理者LINE通知をONにし、新規予約通知が届くことを確認します。</li><li>予約確定や手動メッセージを送り、送信控えが届くことを確認します。</li></ol>
        <p class="tip">LINE側の設定が終わるまでは、管理者LINE通知をOFFにしたままメールだけでテストできます。</p>`}
    ]
  },
  {
    id:'content', kicker:'SITE', title:'サイト内容・自己紹介の編集', intro:'公開サイトの文章を再デプロイせず変更できます。',
    items:[
      {title:'自己紹介「桜香について」を編集する', body:`
        <p>詳細管理の「サイト内容」から自己紹介を編集します。</p>
        <ul><li>表示ON/OFF</li><li>見出し</li><li>自己紹介本文</li><li>小見出し</li><li>文字揃え</li><li>プレビュー</li></ul>
        <p>保存した文章はD1に保存され、再デプロイなしで公開サイトへ反映されます。</p>
        <p class="note">公開側では、カレンダー周辺から「桜香と過ごす110分」の前あたりに、現在の桜テーマに合わせたカードとして表示されます。</p>`},
      {title:'トップ紹介文を編集する', body:`
        <p>詳細管理のトップ紹介文は、公開サイトの<strong>「桜香と過ごす110分」の上に表示される文章</strong>です。</p>
        <p>現在表示しているトップ紹介文を変更したいときは、この項目を編集して保存します。</p>`},
      {title:'「桜香と過ごす110分」の表示', body:`
        <p>①〜⑩の内容は折り畳み式で表示されます。</p>
        <p>最後のメッセージ「大切なお時間を、誠実に、甘やかにお迎えいたします。お逢いできる日を心よりお待ちしております。」は折り畳まず常時表示されます。</p>`},
      {title:'FAQを編集する', body:`
        <p>詳細管理からFAQの内容やデザインを編集できます。変更後はプレビューを確認し、保存後に公開サイトでも表示を確認します。</p>`}
    ]
  },
  {
    id:'templates', kicker:'MESSAGE', title:'メール・LINEテンプレート', intro:'予約受付・確定・前日確認・キャンセル・管理者通知など、現行運用で使う文章を管理します。',
    items:[
      {title:'現在使用する主なテンプレート', body:`
        <ul><li>予約受付</li><li>予約確定</li><li>前日確認</li><li>キャンセル完了</li><li>管理者新規予約通知</li><li>管理者キャンセル通知</li><li>管理画面からの送信控え</li></ul>
        <p>文章を編集した場合は、差し込み項目が正しく残っているか確認してから保存してください。</p>`},
      {title:'送信控えで確認できる内容', body:`
        <p>送信控えでは、どの操作で、いつ、どの予約に対して、どんな内容をお客さんへ送ったか確認できるようにします。メールとLINEのどちらを受け取るかは「管理者通知設定」で切り替えます。</p>`}
    ]
  },
  {
    id:'environment', kicker:'MAIL', title:'TEST / PRODUCTION', intro:'正式納品前のテストと、本番運用でメール送信先・送信元を切り替えます。',
    items:[
      {title:'TESTモード', body:`
        <div class="codebox"><pre>お客さん宛メール送信元：ouka.admin@gmail.com\n管理者通知先：ouka.admin@gmail.com</pre></div>
        <p>桜香ちゃんへ正式納品する前の動作確認で使用します。</p>`},
      {title:'PRODUCTIONモード', body:`
        <div class="codebox"><pre>お客さん宛メール送信元：ookaripo.reserve@gmail.com\n管理者通知先：ookaripo.reserve@gmail.com</pre></div>
        <p>本番運用で使用します。</p>`},
      {title:'切り替えても共通のもの', body:`
        <p>TEST / PRODUCTIONを切り替えても、次のデータは共通です。</p>
        <ul><li>予約データ</li><li>サイト内容</li><li>テンプレート</li><li>D1</li><li>R2</li></ul>
        <p>環境に応じて切り替わるのは、主にGASとメールの送信元・管理者通知先です。</p>`}
    ]
  },
  {
    id:'design', kicker:'DESIGN', title:'画像・デザイン管理', intro:'公開サイトの見た目に関する管理です。',
    items:[
      {title:'画像ライブラリ', body:`
        <p>背景・バナー・faviconなど、公開サイトで使用する画像を画像ライブラリから管理します。変更前にプレビューを確認してから保存してください。</p>`},
      {title:'トップバナー', body:`
        <p>PCではトップバナーが大きくなりすぎないよう調整された現行デザインを使用します。画像を差し替える場合も、現在の表示比率を前提に作成してください。</p>`},
      {title:'半透明カード', body:`
        <p>公開サイトのカードは、詳細管理から色や透明度を調整できる構成です。背景との読みやすさをプレビューで確認してから保存します。</p>`}
    ]
  },
  {
    id:'shiftimage', kicker:'IMAGE TOOL', title:'シフト一覧画像生成', intro:'告知用のシフト画像を作る機能です。',
    items:[
      {title:'シフト一覧画像を作る', body:`
        <ol><li>管理側の画像生成機能を開きます。</li><li>表示したい期間・枠を確認します。</li><li>背景や必要な表示を調整します。</li><li>プレビューを確認して画像を保存します。</li></ol>
        <p>公開カレンダーの予約情報をもとに、告知用画像を作成できます。</p>`}
    ]
  },
  {
    id:'check', kicker:'CHECK', title:'設定変更後の確認', intro:'通知やサイト内容を変更したときの確認ポイントです。',
    items:[
      {title:'通知設定を変えたとき', body:`
        <div class="checks"><span>□ 親スイッチがONか</span><span>□ 必要な個別通知がONか</span><span>□ メール通知が届くか</span><span>□ LINEを使う場合はLINE通知が届くか</span><span>□ 送信控えに実際の送信内容が表示されるか</span></div>`},
      {title:'サイト文章を変えたとき', body:`
        <div class="checks"><span>□ 詳細管理で保存できたか</span><span>□ 公開サイトへ反映されたか</span><span>□ PC表示で崩れていないか</span><span>□ スマホ表示で読みづらくないか</span></div>`},
      {title:'LINEを設定したとき', body:`
        <div class="checks"><span>□ LINE Login Channel IDを取得した</span><span>□ LINE Login Channel Secretを取得した</span><span>□ Messaging API Channel Access Tokenを取得した</span><span>□ LINE LoginのコールバックURLを登録した</span><span>□ LINE Loginが利用できる公開状態になっている</span><span>□ テスト予約でLINE通知を確認した</span></div>`}
    ]
  }
];
