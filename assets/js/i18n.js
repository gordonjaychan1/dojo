/* English / Japanese toggle for the dojo page and the members-only demo.
   English lives in index.html as usual; this file only holds the Japanese.
   - data-i18n="key"       swaps the element's contents (may contain links and spans)
   - data-i18n-alt / -aria / -ph / -done   swap alt, aria-label, placeholder, data-done
   The English is read from the page the first time, so switching back needs no copy of it here.
   The chosen language is remembered, and ?lang=ja links straight to the Japanese version. */

const JA = {
  "meta.title": "空手コーチが作る、道場のためのウェブサイト · Gordon Jay Chan",
  "meta.desc": "空手コーチが作る、空手・テコンドー・柔術などの道場のためのウェブサイト。無料体験の申し込み、保護者向けの少年部ページ、会員限定の昇級審査ページなど。月額9,500円、初期費用なし。",

  "brand.tag": "道場ウェブサイト",
  "nav.aria": "このページの目次",
  "nav.work": "制作実績",
  "nav.about": "自己紹介",
  "nav.pricing": "料金",
  "nav.faq": "よくある質問",
  "nav.contact": "お問い合わせ",

  "hero.label": "道場の経営者・師範の方へ",
  "hero.h1": '<span class="belt-line">空手コーチ</span>が作る、道場のためのウェブサイト',
  "hero.l1": "保護者の方が入会を決める前に何を見ているか、よく分かっています。",
  "hero.l2": "ソフトウェアテストの実務経験は2年以上。公開初日から美しく、何年も安定して動くサイトを作ります。",
  "hero.l3": "制作・サーバー管理・いつでも更新し放題まで、すべて月額料金に含まれます。",
  "hero.cta": '道場のサイトを作る <span aria-hidden="true">→</span>',
  "hero.cta2": "制作実績を見る",
  "hero.styles": "<span>空手</span><span>ボクシング</span><span>柔術</span><span>テコンドー</span><span>総合格闘技</span><span>柔道</span><span>カンフー</span><span>ほか</span>",
  "hero.alt": "白帯の生徒の技を、笑顔で直している黒帯のGordon",

  "cert.aria": "Gordonについて",
  "cert.kicker": "ウェブデザイナー",
  "cert.1": "<b>空手歴17年</b><span>林派糸東流 初段</span>",
  "cert.2": "<b>品質保証（QA）エンジニア</b><span>ソフトウェアテストが本業</span>",
  "cert.3": "<b>サンタクララ大学 空手部コーチ</b>",

  "needs.label": "サービス内容",
  "needs.h2": "道場のウェブサイトに含まれるもの",
  "needs.p": "新しく道場を探しているご家族にも、稽古の合間にサイトを見る生徒さんにも。",
  "n1.h": "無料体験の申し込みを、いちばん目立つ場所に",
  "n1.p": "すべてのページに体験レッスンのボタンを置きます。申し込みは生徒さんの年齢と希望クラスつきでメールに届くので、その日のうちに折り返し連絡できます。",
  "mock.title": "無料体験に申し込む",
  "mock.who": "参加するのは？",
  "mock.chips": '<span class="on">子ども</span><span>中高生</span><span>大人</span>',
  "mock.class": "クラス",
  "mock.select": "少年部（5〜7歳）· 火 16:30",
  "mock.btn": "無料体験を予約する",
  "n2.h": "保護者向けに書いた少年部のページ",
  "n2.p": "入会を決めるのは保護者の方。対象年齢、初回の稽古の流れ、服装など、気になる疑問に答えます。",
  "n3.h": "いつも最新のスケジュールと料金",
  "n3.p": "クラスの時間や料金が変わったら、メッセージを送るだけで更新します。",
  "n4.h": "指導者紹介と系譜",
  "n4.p": "指導者とその段位、そして流派の師の系譜を紹介します。",
  "n5.h": "会員限定ページ",
  "n5.p": "級ごとの稽古内容、技の動画、非公開の写真ギャラリーなど、特定の生徒だけに見せたいものをパスワードで保護します。",
  "n5.try": "デモを試す →",
  "n6.h": "イベントと大会結果",
  "n6.p": "セミナー、昇級審査の日程、休館日、そして保護者がシェアしたくなる大会の入賞結果。",
  "n7.h": "写真・動画ギャラリー",
  "n7.p": "稽古の写真や大会の動画を、スマホでもすばやく表示します。",
  "n8.h": "今お使いのソフトとも連携",
  "n8.p": "月謝管理のソフトはそのまま。サイトから入会ページや会員ページにリンクします。",
  "n8.sw": "<span>Kicksite</span><span>Spark Membership</span><span>Zen Planner</span><span>ほか</span>",

  "work.label": "制作実績",
  "work.h2": "これまでに作った道場サイト",
  "work.p": "11年間通った私のホーム道場と、空手界のレジェンド、2012年世界チャンピオン宇佐美里香さんの道場です。これほどの方の道場を自分の仕事で表現できることを、光栄に思います。スライダーを動かすと、リニューアル前後を比べられます。",
  "ba.before2024": "リニューアル前 · 2024",
  "ba.before": "リニューアル前",
  "ba.after": "リニューアル後",
  "aabba.altAfter": "リニューアル後のAABBA空手のトップページ",
  "aabba.altBefore": "リニューアル前（2024年）のAABBA空手のトップページ",
  "aabba.range": "AABBA空手の新旧トップページを比較します。値を小さくすると新しいサイト、大きくすると以前のサイトが多く表示されます。",
  "aabba.where": "空手 · カリフォルニア州サンラモン",
  "aabba.p": "11年間通った私のホーム道場です。ご家族になじみのあるサイトをすっきりと作り直し、パスワード付きの昇級審査ページを加えました。",
  "aabba.resultLabel": "結果",
  "aabba.result": "以前は昇級審査の筆記試験を稽古中に紙で配っていて、先生が管理するのは大変でした。今は先生が生徒それぞれに自分の級のパスワードを渡し、生徒はいつでもスマホから自分の試験を開けます。",
  "aabba.d1": "級ごとにパスワードを設定した昇級審査ページ",
  "aabba.d2": "全ページに無料体験レッスンの案内",
  "aabba.d3": "稽古写真のスライドショーと、年ごとにまとめたニュース（メダル数つき）",
  "usami.altAfter": "リニューアル後の宇佐美Rika道場のトップページ",
  "usami.altBefore": "リニューアル前の宇佐美Rika道場のトップページ",
  "usami.range": "宇佐美Rika道場の新旧トップページを比較します。値を小さくすると新しいサイト、大きくすると以前のサイトが多く表示されます。",
  "usami.name": "宇佐美Rika道場",
  "usami.where": "空手 · 鳥取県",
  "usami.p": "伝説の2012年空手世界チャンピオン、宇佐美里香さんの道場です。自主的にサイトをリデザインし、2026年6月に鳥取で稽古に参加した際、ご本人に直接提案しました。",
  "usami.d1": "新しいレイアウトとデザイン",
  "usami.d2": "英語版と日本語版",
  "usami.d3": "正確に書き直した英語の翻訳",
  "usami.story": "<b>このプロジェクトのきっかけ</b>以前のサイトを自主的にリデザインし、2026年6月に鳥取で稽古した際にご本人に提案しました。<u>リールを見る →</u>",
  "work.more": '他の業種のサイトもご覧になりますか？ <a href="https://gordonjaychan.com/web">制作実績の一覧 →</a>',

  "quotes.h2": "お客様の声",
  // Japanese translation of Sensei Abello's English testimonial (a note under it says it's a translation)
  "quotes.aabbaQuote": "Gordonさんは私のウェブサイトを見事にリニューアルしてくれました。どんなことにも期待以上に応えてくれます。何かできるか相談すると、想像以上の形で実現してくれます。更新をお願いすると、いつも数日以内に対応してくれます。知り合いのすべての経営者に、ぜひ彼のサービスを紹介したいです。",
  "quotes.aabba": "All American Black Belt Academy · カリフォルニア州サンラモン",

  "about.alt": "青帯の生徒と並んで、同じ形の動きをするGordon",
  "about.label": "自己紹介",
  "about.h2": "ウェブサイトを作る空手コーチ",
  "about.g1": "稽古の場で",
  "about.p1": "8歳で空手を始め、サンラモンのAABBA空手で11年間稽古し、林派糸東流の初段を取得しました。松濤館流も6年、ボクシングも3年経験しています。武道・格闘技はどれも大好きで、新しいことを学ぶのがいつも楽しみです！",
  "about.p2": "現在はサンタクララ大学空手部のコーチをしています。年に数回、日本と沖縄を訪れ、空手界のレジェンドである2012年世界チャンピオン宇佐美里香さんや、沖縄の伝統的な空手道場で稽古しています。",
  "about.g2": "道場のあらゆる立場から",
  "about.p3": "生徒、選手、コーチのすべてを経験してきたので、それぞれに必要なもの、そして入会を検討している保護者の方に必要なものを考えてサイトを作ります。",
  "about.p4": "2か月前に柔道を始め、また白帯に戻れたことを楽しんでいます！初めて新しい道場に入る時の気持ちがよく分かります。そんな方々も、あなたのサイトが迎える大切な人たちです。",
  "about.g3": "画面の向こう側で",
  "about.p5": "本業はソフトウェア会社の品質保証（QA）エンジニアです。お客様より先に不具合を見つけるのが仕事なので、あなたのサイトも公開前に同じように確認します。",
  "about.p6": '<a href="https://gordonjaychan.com/KataDataAnalysis/" target="_blank" rel="noopener">2024–25年WKF形シーズンのデータ分析サイト</a>も作りました。武道・格闘技の大会の数字を掘り下げるのが大好きなんです。',

  "price.label": "料金",
  "price.h2": "わかりやすい月額制",
  // the English line compares the fee to US monthly tuition; Japanese tuition is usually lower, so this says something else
  "price.p": "初期費用なし。必要なものはすべて月額料金に含まれています。",
  "price.typical": "標準料金",
  // dojos in Japan are billed in yen (the English page stays at US$95)
  "price.amount": "¥9,500<small>/ 月</small>",
  "price.i1": "デザイン・制作",
  "price.i2": "サーバー管理",
  "price.i3": "更新し放題",
  "price.i4": "修正・サポート",
  "price.note": "月額料金に、サイトの制作、サーバー管理、更新がすべて含まれます。初期費用なし。最低契約期間は6か月、その後は1か月ごとの更新です。",

  "faq.h2": "よくある質問",
  "faq.q1": "月謝管理や会員管理のソフトを変える必要はありますか？",
  "faq.a1": "いいえ、Kicksite、Spark Membership、Zen Plannerなど、今お使いのものをそのまま使えます！サイトから入会・予約・会員ページへ直接リンクするので、生徒さんやスタッフの使い方は何も変わりません。",
  "faq.qTime": "サイトの制作にはどのくらいかかりますか？",
  "faq.aTime": "通常は1週間ほどです！サイトの規模によって変わります。まず下書きをお送りしてご確認いただき、ご納得いただけるまで公開はしません。",
  "faq.q2": "スケジュールは自分で更新できますか？",
  "faq.a2": "その必要はありません！変更内容をメッセージかメールで送ってください（ホワイトボードのスケジュールを撮った写真でも大丈夫です）。あとはこちらで対応します。変更はすべて料金に含まれ、小さな変更は3日以内、大きな変更は5日以内に行います。",
  "faq.q3": "会員限定ページはどのような仕組みですか？",
  "faq.a3": 'とてもシンプルです！級、選手コース、指導者など、グループごとにパスワードを設定します。生徒はそのパスワードで、稽古内容、用語、技の動画、非公開の写真ギャラリー、大会情報、指導案などのページを開けます。グループで共有するパスワードなので、個人情報ではなく稽古の資料向けです。パスワードを変えたい時は、いつでもお知らせください！ <a href="demo">デモを試す →</a>',
  "faq.q4": "空手の道場だけが対象ですか？",
  "faq.a4": 'いいえ、武道・格闘技の道場ならどこでも対応します！屋根工事、カイロプラクティック院、建設会社など、武道とはまったく関係のない業種のサイトも作っています。 <a href="https://gordonjaychan.com/web">制作実績の一覧を見る →</a>',
  "faq.q5": "すでにサイトがあります。リニューアルできますか？",
  "faq.a5": "はい、喜んで！AABBA空手と宇佐美Rika道場でも、まさにそれを行いました。すでにドメインをお持ちの場合は、そのままご自身で契約を続けていただき、私が新しいサイトに接続するので、アドレスは変わりません。",
  "faq.qPay": "お支払い方法は？",
  "faq.aPay": "PayPalまたはWiseでお支払いいただけます。どちらが使いやすいか、ご相談のうえで決めましょう！料金は日本円で、月額9,500円です。",
  "faq.q6": "ウェブサイトの所有権は誰にありますか？",
  "faq.a6": "ドメイン名、屋号、ロゴ、そしてご提供いただいた写真・動画・事業情報はお客様のものです。ウェブサイトのデザインとコード（レイアウト、スタイル、サイトのファイルを含む）は私に帰属します。",

  "cta.h2": "次の初心者クラスを、満員にしませんか？",
  "cta.p": "道場のことと、新しいサイトのイメージを教えてください。通常1〜2日以内にお返事します。",
  "cta.btn": '道場のサイトを始める <span aria-hidden="true">→</span>',
  "cta.call": 'LINE ID：<a href="https://line.me/ti/p/~gordonjaychan1" target="_blank" rel="noopener">gordonjaychan1</a><br>お電話・SMS：<a href="tel:+19256058687">(925) 605-8687</a>（米国）',

  "form.close": "閉じる",
  "form.h2": "道場について教えてください",
  "form.sub": 'ふだんは1〜2日以内にお返事します。ロゴや写真、動画があれば、送信後にメッセージかメールでお送りください。LINE（ID：<a href="https://line.me/ti/p/~gordonjaychan1" target="_blank" rel="noopener">gordonjaychan1</a>）でも気軽にどうぞ。お電話の方は <a href="tel:+19256058687">(925) 605-8687</a>（米国）まで。',
  "form.done": "ありがとうございます！メッセージを受け付けました。1〜2日以内にお返事します。",
  "form.name": "お名前",
  "form.email": "メールアドレス",
  "form.school": "道場名",
  "form.phone": '電話番号 <span class="opt">（任意）</span>',
  "form.site": '現在のサイト <span class="opt">（任意）</span>',
  "form.message": "メッセージ",
  "form.messagePh": "所在地、現在のサイト、希望するイメージ、SNSのリンクなど",
  "form.send": "送信する",
  // used by app.js while sending
  "form.sending": "送信中…",
  "form.failed": "送信できませんでした。",
  "form.retry": "もう一度お試しいただくか、gordonjaychan1@gmail.com までメールでご連絡ください。",

  // ---------- members-only demo page (demo.html) ----------
  "demo.meta.title": "会員限定ページのデモ · Gordon Jay Chan",
  "demo.meta.desc": "道場のウェブサイトの会員限定ページを試せるデモ。級ごとの稽古内容、技の動画、非公開の写真ギャラリー、大会情報、指導者ページを、それぞれのパスワードで保護します。",
  "demo.navAria": "ページ",
  "demo.backText": "道場ウェブサイト",
  "demo.label": "会員限定ページのデモ",
  "demo.h1": "会員限定ページを試してみる",
  "demo.intro": "この道場は架空ですが、会員ページは本物と同じように動きます。グループを選んでパスワードを入力すると、そのグループの生徒だけが見られる内容が表示されます。",
  "demo.hintsAria": "デモ用パスワード",
  "demo.hints": "デモ用パスワード · タップすると入力されます",
  "demo.gBlue": "青帯",
  "demo.gTeam": "選手コース",
  "demo.gStaff": "指導者",
  "demo.school": "あなたの道場",
  "demo.dsNav": '<span>クラス</span><span>スケジュール</span><span class="on">会員ページ</span>',
  "demo.gateH": "会員専用",
  "demo.gateP": "グループを選び、先生から受け取ったパスワードを入力してください。",
  "demo.group": "グループ",
  "demo.optBlue": "青帯（5級）",
  "demo.password": "パスワード",
  "demo.open": "開く",
  "demo.lock": "ロック",
  // used by demo.js
  "demo.msgWrong": "パスワードがこのグループと一致しません。もう一度お試しください！",
  "demo.msgEmpty": "グループのパスワードを入力してください。",
  "demo.msgReady": "「開く」を押すと、このグループのページが表示されます。",

  "demo.b.kicker": "青帯 · 5級",
  "demo.b.h": "次の昇級審査",
  "demo.b.p": "審査日は2027年2月6日（土）です。必要なことはすべてここにまとめています。",
  "demo.b.curr": "稽古内容",
  "demo.b.currList": "<div><dt>基本</dt><dd>追い突き、上げ受け、外受け、前蹴り、回し蹴り</dd></div><div><dt>形</dt><dd>平安三段</dd></div><div><dt>組手</dt><dd>一本組手 1〜5</dd></div><div><dt>受審の条件</dt><dd>前回の昇級から稽古40回以上、かつ現在の級で3か月以上</dd></div>",
  "demo.b.terms": "用語",
  // in Japanese the terms are already Japanese, so this card gives the kanji, the reading, and what it means
  "demo.b.termList": "<div><dt>礼（れい）</dt><dd>お辞儀</dd></div><div><dt>始め（はじめ）</dt><dd>開始の合図</dd></div><div><dt>止め（やめ）</dt><dd>終了の合図</dd></div><div><dt>気合（きあい）</dt><dd>力を込めたかけ声</dd></div><div><dt>前屈立ち（ぜんくつだち）</dt><dd>前に重心をかける立ち方</dd></div><div><dt>後屈立ち（こうくつだち）</dt><dd>後ろに重心をかける立ち方</dd></div><div><dt>一、二、三、四、五</dt><dd>いち、に、さん、し、ご</dd></div>",
  "demo.b.video": "技の動画",
  "demo.b.cap": "<b>横蹴り蹴込み</b>一つずつ分解して解説 · 2:14",
  "demo.b.note": "実際のサイトでは、ここで道場の動画が再生されます。限定公開のYouTubeリンクを送っていただければ追加します。",

  "demo.t.h": "選手コースのページ",
  "demo.t.p": "選手とご家族の方専用です。練習は毎週木曜 19:00〜20:30。",
  "demo.t.sched": "大会スケジュール",
  "demo.t.table": "<thead><tr><th>日程</th><th>大会</th><th>会場</th><th>申込締切</th></tr></thead><tbody><tr><td>2027年1月23日</td><td>冬季招待大会</td><td>カリフォルニア州サンノゼ</td><td>1月9日</td></tr><tr><td>2027年3月13日</td><td>春季オープン大会</td><td>カリフォルニア州サクラメント</td><td>2月27日</td></tr><tr><td>2027年5月8日</td><td>地区選手権大会</td><td>カリフォルニア州フレズノ</td><td>4月17日</td></tr></tbody>",
  "demo.t.rules": "選手コースのルール",
  "demo.t.ruleList": "<li>自分の部が始まる45分前までに到着すること。</li><li>道場のワッペンが付いたチームの道着を着て、試合の合間はチームジャケットを着ること。</li><li>組手用の拳サポーター、マウスピース、すねサポーターは各自で持参すること。</li><li>コートに入る時と出る時は、必ず礼をすること。</li><li>保護者の方へ：応援は思いきりどうぞ。ただし指導はコーチにお任せください！</li>",
  "demo.t.gallery": "非公開の写真ギャラリー",
  "demo.t.galleryNote": "チームのご家族だけが見られる写真です。",
  "demo.t.alt1": "道場での横蹴りの実演",
  "demo.t.alt2": "生徒に技を説明する指導者",
  "demo.t.alt3": "白帯の生徒の技を直す指導者",
  "demo.t.alt4": "チーム練習での横蹴り",
  "demo.t.cap1": "横蹴りの練習",
  "demo.t.cap2": "形の稽古",
  "demo.t.cap3": "二人一組の稽古",
  "demo.t.cap4": "チーム練習",

  "demo.s.h": "指導者ページ",
  "demo.s.p": "1月の指導案と担当スケジュールです。",
  "demo.s.kidsH": "指導案：少年部（5〜7歳）",
  "demo.s.week": "1月11日の週",
  "demo.s.kidsPlan": "<li><span>10分</span>礼と準備運動</li><li><span>10分</span>「先生が言いました」立ち方ゲーム：前屈立ちと騎馬立ち</li><li><span>10分</span>ミットへの前蹴り</li><li><span>10分</span>形：平安初段の最初の8挙動</li><li><span>5分</span>礼と、帯のストライプの確認</li>",
  "demo.s.adultsH": "指導案：一般部",
  "demo.s.adultsPlan": "<li><span>10分</span>準備運動とストレッチ</li><li><span>15分</span>移動しながらの基本の連続技</li><li><span>20分</span>二人一組で平安三段の分解</li><li><span>10分</span>一本組手</li><li><span>5分</span>整理運動と礼</li>",
  "demo.s.sched": "担当スケジュール",
  "demo.s.table": "<thead><tr><th>曜日・時間</th><th>クラス</th><th>担当</th><th>補助</th></tr></thead><tbody><tr><td>月 17:00</td><td>少年部</td><td>キム先生</td><td>アナ先輩</td></tr><tr><td>月 18:00</td><td>ジュニア</td><td>キム先生</td><td>レオ先輩</td></tr><tr><td>水 17:00</td><td>少年部</td><td>オルティス先生</td><td>アナ先輩</td></tr><tr><td>水 19:00</td><td>一般部</td><td>オルティス先生</td><td>ラジ先輩</td></tr><tr><td>木 19:00</td><td>選手コース</td><td>キム先生</td><td>レオ先輩</td></tr><tr><td>土 10:00</td><td>全級合同</td><td>キム先生</td><td>ラジ先輩</td></tr></tbody>",

  "demo.after": "実際のサイトでは、グループごとにパスワードを設定でき、メッセージを送ればいつでも変更できます。個人アカウントではなくグループで共有するパスワードなので、個人情報ではなく稽古の資料向けです。",
  "demo.cta": 'このようなサイトを作る <span aria-hidden="true">→</span>',
  "demo.back2": "道場ウェブサイトに戻る",

  "foot.email": "メール",
  "foot.text": "SMS",
};

// [dataset key, marker attribute, attribute that gets translated]
const i18nAttrs = [
  ["i18nAlt", "data-i18n-alt", "alt"],
  ["i18nAria", "data-i18n-aria", "aria-label"],
  ["i18nPh", "data-i18n-ph", "placeholder"],
  ["i18nDone", "data-i18n-done", "data-done"],
];
const english = new Map();   // element -> its original English (contents and attributes)
const metaDesc = document.querySelector('meta[name="description"]');
const pageEn = { title: document.title, desc: metaDesc ? metaDesc.content : "" };

// For app.js: Japanese when the page is in Japanese, otherwise the English it passes in
window.t = (key, en) => (document.documentElement.lang === "ja" && JA[key] != null ? JA[key] : en);

function setLang(lang) {
  const ja = lang === "ja";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (!english.has(el)) english.set(el, { html: el.innerHTML });
    const key = el.dataset.i18n;
    el.innerHTML = ja && JA[key] != null ? JA[key] : english.get(el).html;
  });
  for (const [prop, marker, attr] of i18nAttrs) {
    document.querySelectorAll(`[${marker}]`).forEach((el) => {
      const store = english.get(el) || {};
      if (!(attr in store)) { store[attr] = el.getAttribute(attr) || ""; english.set(el, store); }
      const key = el.dataset[prop];
      el.setAttribute(attr, ja && JA[key] != null ? JA[key] : store[attr]);
    });
  }
  const page = document.body.dataset.page === "demo" ? "demo." : "";
  document.title = ja ? JA[page + "meta.title"] : pageEn.title;
  if (metaDesc) metaDesc.content = ja ? JA[page + "meta.desc"] : pageEn.desc;
  document.documentElement.lang = ja ? "ja" : "en";
  document.documentElement.setAttribute("data-lang", ja ? "ja" : "en");
  // the switch always offers the other language
  document.querySelectorAll(".lang-switch").forEach((b) => {
    b.textContent = ja ? "English" : "日本語";
    b.lang = ja ? "en" : "ja";
    b.setAttribute("aria-label", ja ? "View in English" : "日本語で表示");
  });
  const formLang = document.getElementById("form-lang");
  if (formLang) formLang.value = ja ? "Japanese (日本語)" : "English";
}

document.querySelectorAll(".lang-switch").forEach((b) => b.addEventListener("click", () => {
  const next = document.documentElement.lang === "ja" ? "en" : "ja";
  setLang(next);
  try { localStorage.setItem("dojo-lang", next); } catch {}
  // keep shared links in the same language, without adding a history entry
  try {
    const url = new URL(location.href);
    if (next === "ja") url.searchParams.set("lang", "ja"); else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  } catch {}
}));

setLang(document.documentElement.getAttribute("data-lang") === "ja" ? "ja" : "en");
