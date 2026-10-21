// =====================================================================
//  ブルーブラン 様（株式会社ブラス）｜ウェディング広告撮影（会場フル撮影）
//  モデル候補資料（2026年10月版）
//  ※候補を追加するときは FEMALES／MALES に1件足し、photos.js に同じ id で写真を入れる
//    （videos：動画実績URL、achievements／achievementSections：出演実績テキスト）
// =====================================================================

const PLACEHOLDER = '情報待ち';
const NA = '—';
const PENDING = '確認中';   // プロフィール未着の項目（詳細画面では枠だけ表示、カードには出さない）

// 出演可能日：全員 12/7〜9 の3日間対応可（ヒーロー部に共通表示）
const AVAILABILITY = {};

// 新婦役（スカイ／ヒナ／エリカ／ゆりな／マイカ）
const FEMALES = [
  {
    "id": "sky",
    "name": "スカイ",
    "age": 26,
    "height": 160,
    "size": "B 78cm / W 58cm / H 86cm",
    "shoe": "23.5cm",
    "clothesSize": "ドレス 5〜7号／指輪 8号",
    "exp": 6,
    "location": "東京都↔大阪府（大阪府出身）",
    "extra": [
      [
        "体重",
        "44kg"
      ]
    ],
    "videos": [
      "https://youtube.com/shorts/9WUzupRon0I"
    ],
    "achievementTitle": "モデル活動実績",
    "achievementSections": [
      {
        "title": "ブライダルモデル活動実績",
        "items": [
          "JRクレメントホテル高松",
          "ONELIFE 横浜",
          "スタジオゼロ（宇治・長堀橋・岡山・奈良・堺）",
          "スタジオアーク",
          "フォレストテラス熊本",
          "レイジーシンデレラ",
          "欅",
          "THE SORAKUEN",
          "スタジオアンルージュ",
          "ワタベウェディング",
          "カサデアンジェラ馬車道",
          "FANTADRESS",
          "ハルウェディング",
          "ベルクラシック姫路",
          "東京ステーションホテル",
          "STELLA BRIDAL 等"
        ]
      },
      {
        "title": "その他モデル活動実績",
        "items": [
          "今ちゃんの実は…TV出演／ええじゃないか TV出演／ブルーメの丘 PV出演",
          "あべのハルカス WEB広告／ザ プリンスパークタワーホテル 広告／ホテルリリーフなんば大国町 広告",
          "REFA 登壇モデル／ENAMOR 登壇モデル",
          "ミルボン スタイリング剤パンフ広告／サンコール スタイリング剤パンフ広告",
          "PREPPY 雑誌掲載／SAVVY 雑誌掲載／リアルオーダーヘアブック 雑誌掲載多数",
          "ホットペッパービューティー 雑誌掲載多数",
          "メルセデスベンツ広告／眼鏡市場広告／SANGO株式会社 企業PV",
          "ソフィーナ／ナリス／ジョンセンムル／松風／VO5／MEDULLA 等"
        ]
      }
    ]
  },
  {
    "id": "hina",
    "name": "ヒナ",
    "age": 26,
    "height": "確認中",
    "size": "確認中",
    "shoe": "確認中",
    "clothesSize": "確認中",
    "location": "確認中",
    "extra": [
      [
        "モデル歴",
        "確認中"
      ]
    ],
    "videos": [
      "https://www.instagram.com/reel/DHvM8hOAtrs/"
    ]
  },
  {
    "id": "nakamura",
    "name": "エリカ",
    "age": 26,
    "height": 163.5,
    "size": "B 79cm / W 60cm / H 86cm",
    "shoe": "24.0cm",
    "clothesSize": "7号",
    "hairColor": "ロング・ダークブラウン",
    "exp": "—",
    "location": "東京都",
    "extra": [
      [
        "爪・ピアス",
        "素爪・ピアスなし"
      ]
    ],
    "videos": [
      "https://youtube.com/shorts/DDm8oxg6PaY"
    ],
    "achievementTitle": "出演実績",
    "achievementSections": [
      {
        "title": "ブライダル",
        "items": [
          "NOUVELLE",
          "CLAIRE BRIDAL STUDIO",
          "FLARE 横浜元町本店",
          "アンジェリカ・ノートルダム（大阪）",
          "アールベルアンジェ奈良（奈良）",
          "ララ・マリー（山口）",
          "STUDIO ARC（神奈川）"
        ]
      },
      {
        "title": "広告",
        "items": [
          "Microsoft Surface「サがつく、Surface」映像広告",
          "SHIMBOL モニターレコーダー 紹介映像",
          "静岡県 南伊豆町 観光PR映像",
          "吉野家 TikTok用映像広告",
          "オンディーヌ 振袖広告",
          "味の素「0.1のチャレンジ」Web用映像広告",
          "ヒルトン東京ベイ 屋外プール プロモーション映像",
          "nifty colors 傘・日傘・レインコート 広告",
          "SOLSHADE 日傘・折りたたみ傘 広告",
          "bon bonheur 鞄・リュックサック イメージ広告",
          "リクルートスタッフィング イメージ広告"
        ]
      },
      {
        "title": "アパレル",
        "items": [
          "Joint Space Webサイトコーディネート",
          "MARK STYLER スタイルコーディネート",
          "Leyline イメージモデル"
        ]
      },
      {
        "title": "ショー・イベント",
        "items": [
          "TRUNK HOTEL ブライダルショー",
          "ホテル雅叙園 模擬結婚式（花嫁役）",
          "ANA クラウンプラザホテル富山 模擬結婚式（花嫁役）",
          "CP+2026",
          "ホテルサンライフガーデン（神奈川）",
          "エルシオンKISARAZU（千葉）",
          "ザ・チェルシーコートおゆみ野ガーデン（千葉）",
          "ザ テンダーハウスウエディング",
          "ワタベウェディング"
        ]
      },
      {
        "title": "雑誌",
        "items": [
          "小学館『CanCam』",
          "主婦の友社『Ray』",
          "ハースト婦人画報社『25ans』",
          "ネコ・パブリッシング『大人の愛されヘアカタログ』",
          "晋遊舎『リアルオーダーヘアブック』"
        ]
      },
      {
        "title": "MV出演",
        "items": [
          "Blue Purple「Night」"
        ]
      }
    ]
  },
  {
    "id": "yurina",
    "name": "ゆりな",
    "age": 24,
    "height": 168,
    "size": "—",
    "shoe": null,
    "exp": "—",
    "location": "東京都（兵庫県神戸市出身）",
    "extra": [
      [
        "体重",
        "45kg"
      ]
    ],
    "videos": [
      "https://youtu.be/anvPe6D9MTY"
    ],
    "achievementTitle": "実績",
    "achievements": [
      "wabiwasou",
      "platinum dress style",
      "studio arc",
      "faccie ウェディング",
      "FORTE BRIDAL"
    ]
  },
  {
    "id": "maika",
    "name": "マイカ",
    "age": 29,
    "height": 156,
    "size": "B 77cm / W 55cm / H 80cm",
    "shoe": "22.5cm",
    "hairColor": "ナチュラルブラウン",
    "exp": "—",
    "location": "東京都（千葉県出身）",
    "extra": [
      [
        "体重",
        "40kg"
      ],
      [
        "運転免許",
        "あり"
      ],
      [
        "備考",
        "現在ショートボブ（つけ毛でのヘアアレンジ可）"
      ]
    ],
    "videos": [
      "https://youtube.com/shorts/f3myIYxLkAc",
      "https://youtube.com/shorts/QnyfSmSqNGI"
    ],
    "achievementTitle": "主な出演作",
    "achievementSections": [
      {
        "title": "ドラマ",
        "items": [
          "CX 月9「5→9 私に恋したお坊さん」／レギュラー生徒役",
          "NTV系 深夜ドラマ「ザンビ」",
          "EX「ハケン占い師アタル」",
          "TX「牙狼-GARO- 魔戒烈伝」／ヒバナ役"
        ]
      },
      {
        "title": "映画",
        "items": [
          "「トモダチゲーム」／花宮満役",
          "「海にうかぶ月」／平田美希役",
          "「志乃ちゃんは自分の名前が言えない」",
          "「友だちのパパがすき」／友人役"
        ]
      },
      {
        "title": "バラエティ",
        "items": [
          "CX「痛快TVスカッとジャパン」4度出演",
          "「直撃！シンソウ坂上」〜日航123便からのメッセージ・33年目の真相〜／田淵満役"
        ]
      },
      {
        "title": "舞台",
        "items": [
          "「-Knights- アーサー王と円卓の騎士」／ニムエ役　2年連続"
        ]
      },
      {
        "title": "CM",
        "items": [
          "ソフトバンク",
          "HONDA（web）",
          "GungHo"
        ]
      },
      {
        "title": "MV",
        "items": [
          "ASIAN KUNG-FU GENERATION「オペラグラス」／バレリーナ"
        ]
      },
      {
        "title": "ブライダルモデル",
        "items": [
          "THE TOAI"
        ]
      },
      {
        "title": "SNS広告",
        "items": [
          "ハップアール",
          "EPSON",
          "サモエドカフェ moffu",
          "舞子スノーリゾート",
          "アパマンショップ 信濃土地",
          "珈琲倶楽部",
          "KG高等学園",
          "東京ドームホテル",
          "アゲルキャリア",
          "鍛高譚／合同酒精",
          "牛たん とろろ 麦めし ねぎし",
          "蒲田矯正歯科"
        ]
      },
      {
        "title": "SNSショートドラマ",
        "items": [
          "僕らの恋はかくれんぼ。",
          "金融女子が沼すぎる!?",
          "株式会社 World Change Analysis"
        ]
      }
    ]
  }
];

// 新郎役（りょうま／ケビン／リョウスケ）
const MALES = [
  {
    "id": "ryoma",
    "name": "りょうま",
    "age": 30,
    "height": 176,
    "size": "B 84cm / W 81cm / H 95cm",
    "shoe": "27.0cm",
    "clothesSize": "Y5",
    "exp": "—",
    "location": "横浜市",
    "extra": [
      [
        "体重",
        "63kg"
      ],
      [
        "利き手",
        "右"
      ]
    ],
    "videos": [
      "https://youtu.be/ZIatl18JlfY",
      "https://youtube.com/shorts/3U0tXYeB5jQ"
    ],
    "achievementTitle": "実績",
    "achievementSections": [
      {
        "title": "サイズ詳細",
        "items": [
          "頭まわり56cm／首まわり38cm／着丈49cm／肩幅40cm／袖丈59cm",
          "バスト84cm／ウエスト81cm／ヒップ95cm",
          "ひじ丈28cm／手首16cm／股上24cm／股下82cm",
          "手のひら 右17.5cm・左18cm／腕回り 右25cm・左25cm",
          "太腿51cm／ひざ丈53cm／ゆき丈80cm",
          "靴27cm／服 Y5／Tシャツ M／ジーンズ 31インチ",
          "指輪 右：薬指14号・小指7号／左：薬指13号・小指9号"
        ]
      },
      {
        "title": "実績【ブライダル・ゼクシィ】（新郎役）",
        "items": [
          "ホテル ザ・テラス ザ・ガーデン水戸（茨城）",
          "マリーゴールドプルミエ（鳥栖）",
          "ウェディングコートエミリア（山口）",
          "リバティ ウエディングアプロッシュ（大分）",
          "マリエール神水苑（熊本）",
          "マリーゴールドプルミエ（佐賀）",
          "アーセンティア迎賓館（大阪）",
          "A&T wedding",
          "レンブラントホテル",
          "新百合ヶ丘ホテルモリノ",
          "チッタ ウェディング川崎（神奈川）",
          "ブラスブルー目白",
          "ラ クラリエール三鷹の森",
          "ロイヤルパインズホテル浦和",
          "recipe 名古屋",
          "他多数"
        ]
      },
      {
        "title": "実績【広告・PV】",
        "items": [
          "オリエンタルホテル福岡",
          "リッチモンドホテル宮崎",
          "おふろの王様 広告",
          "穴吹ハウジングサービス",
          "タイクレ",
          "モンハンNOW",
          "他多数"
        ]
      },
      {
        "title": "実績【TVCM】",
        "items": [
          "アルプス技研",
          "Lenovo",
          "good不動産",
          "霧島酒造株式会社",
          "ガンダムシリーズアパレル「strict-g」",
          "イトシマレモネード",
          "奉行クラウド"
        ]
      },
      {
        "title": "実績【ファッションモデル】",
        "items": [
          "PRADA／mac-house／converse／harvesty／strict-g／my day",
          "薬王堂 コラボTシャツ／ZOZOタウン 他多数",
          "スチールモデル多数"
        ]
      }
    ]
  },
  {
    "id": "kevin",
    "name": "ケビン"
  },
  {
    "id": "ryosuke",
    "name": "リョウスケ"
  }
];

// ============ プロフィール項目 ============
function known(v) { return v !== undefined && v !== null && v !== '' && v !== PLACEHOLDER && v !== NA; }
function extraVal(m, label) { const e = (m.extra || []).find(([l]) => l === label); return e ? e[1] : undefined; }
function specFields(m) {
  const base = [
    { l: '身長',         v: typeof m.height === 'number' ? m.height + 'cm' : m.height },
    { l: '年齢',         v: typeof m.age === 'number' ? m.age + '歳' : m.age },
    { l: 'サイズ',       v: m.size },
    { l: 'シューズ',     v: m.shoe },
    { l: '在住地',       v: m.location },
    { l: 'ヘアカラー',   v: m.hairColor },
    { l: '瞳カラー',     v: m.eyeColor },
    { l: 'お洋服サイズ', v: m.clothesSize },
    { l: '体重',         v: extraVal(m, '体重') },
  ];
  const extras = (m.extra || []).filter(([l]) => l !== '体重').map(([l, v]) => ({ l, v }));
  return [...base, ...extras];
}
const COMMON_SPECS = specFields({}).map(f => f.l)
  .filter(l => [...FEMALES, ...MALES].filter(m => known(m.height) && m.height !== PENDING).every(m => known((specFields(m).find(f => f.l === l) || {}).v)));

// 番号ラベル（新婦役01／新郎役01）
const numPrefix = () => currentTab === 'female' ? '新婦役' : '新郎役';

let currentTab = 'female';
let lbList = FEMALES;
let lbIdx = 0;
let lbShot = 0;

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function getPhotos(m) {
  const genderKey = currentTab === 'female' ? 'female' : 'male';
  return (typeof PHOTO_DATA !== 'undefined' && PHOTO_DATA[genderKey] && PHOTO_DATA[genderKey][m.id]) || [];
}
function photoSrc(photo) { return 'data:image/jpeg;base64,' + photo.b64; }

function ytId(url) {
  const m = String(url).match(/(?:shorts\/|youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}
function heightDisp(h) { return typeof h === 'number' ? h + 'cm' : h; }
function ageDisp(a)    { return typeof a === 'number' ? a + '歳' : a; }
function expDisp(e)    { return typeof e === 'number' ? e + '年' : (e != null ? e : '—'); }

// ============ Grid render ============
function buildCard(m, i, gender) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = m.id;

  const numLabel = (gender === 'female' ? '新婦役' : '新郎役') + String(i + 1).padStart(2, '0');
  const savedTab = currentTab;
  currentTab = gender;
  const photos = getPhotos(m);
  currentTab = savedTab;
  const firstPhoto = photos[0];
  const photoCountLabel = photos.length ? photos.length + '枚' : '写真情報待ち';

  card.innerHTML = `
    <div class="card-photo">
      ${firstPhoto
        ? `<img class="card-img" src="${photoSrc(firstPhoto)}" alt="${m.name}" loading="lazy">`
        : '<div class="card-img-empty"></div>'}
      <span class="card-no">${numLabel}</span>
      <span class="card-photocount">${photoCountLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-name">
        <span class="nm">${m.name}</span>
        ${known(m.age) ? `<span class="age">${ageDisp(m.age)}</span>` : ''}
      </div>
      ${known(m.location) && m.location !== PENDING ? `<div class="card-loc">${m.location}</div>` : ''}
      ${known(m.height) && m.height !== PENDING ? `<div class="card-stat">
        <span><span class="l">身長</span>${heightDisp(m.height)}</span>
      </div>` : ''}
      ${m.cardNote ? `<div class="card-note">${m.cardNote}</div>` : ''}
    </div>
  `;
  card.addEventListener('click', () => {
    currentTab = gender;
    lbList = gender === 'female' ? FEMALES : MALES;
    openLightbox(i);
  });
  return card;
}

function renderAllGrids() {
  const gf = $('#gridFemale');
  const gm = $('#gridMale');
  if (gf) { gf.innerHTML = ''; FEMALES.forEach((m, i) => gf.appendChild(buildCard(m, i, 'female'))); }
  if (gm) { gm.innerHTML = ''; MALES.forEach((m, i)   => gm.appendChild(buildCard(m, i, 'male'))); }
}

// ============ Lightbox ============
const lb = $('#lb');

function openLightbox(idx) {
  lbList = currentTab === 'female' ? FEMALES : MALES;
  lbIdx = idx;
  lbShot = 0;
  renderLightbox();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const m = lbList[lbIdx];
  const numLabel = numPrefix() + String(lbIdx + 1).padStart(2, '0');
  const photos = getPhotos(m);
  const photo = photos[lbShot];

  const main = $('#lbMain');
  main.innerHTML = '';
  if (photo) {
    const img = document.createElement('img');
    img.src = photoSrc(photo);
    img.alt = m.name;
    img.className = lbShot === 0 ? 'lb-img-cover' : 'lb-img-natural';
    main.appendChild(img);
  } else {
    main.innerHTML = '<div style="color:rgba(255,255,255,.4);font-size:13px;letter-spacing:.1em;">写真情報待ち</div>';
  }

  const strip = $('#lbStrip');
  strip.innerHTML = '';
  photos.forEach((p, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === lbShot ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src = photoSrc(p);
    tImg.alt = String(i + 1).padStart(2, '0');
    thumb.appendChild(tImg);
    const no = document.createElement('span');
    no.className = 'lb-thumb-no';
    no.textContent = String(i + 1).padStart(2, '0');
    thumb.appendChild(no);
    thumb.addEventListener('click', () => { lbShot = i; renderLightbox(); });
    strip.appendChild(thumb);
  });

  $('#lbId').innerHTML = photos.length
    ? `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;<strong>${String(lbShot + 1).padStart(2, '0')}</strong> / ${photos.length}枚`
    : `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;写真情報待ち`;

  $('#lbName').innerHTML = typeof m.age === 'number'
    ? `${m.name} <span class="age">${m.age}歳</span>` : `${m.name}`;
  $('#lbLoc').textContent = known(m.location) && m.location !== PENDING ? m.location : '';
  $('#lbLoc').style.display = $('#lbLoc').textContent ? '' : 'none';

  // プロフィール項目：全員わかっている項目を上に同じ順で、個別にわかっている項目をその下に並べる（不明な項目は表示しない）
  const specsBox = document.querySelector('.specs');
  specsBox.innerHTML = '';
  const fields = specFields(m).filter(f => known(f.v));
  const rows = [...COMMON_SPECS.map(l => fields.find(f => f.l === l)).filter(Boolean), ...fields.filter(f => !COMMON_SPECS.includes(f.l))];
  rows.forEach(f => {
    const d = document.createElement('div');
    d.className = 'spec';
    d.innerHTML = `<div class="spec-l">${f.l}</div><div class="spec-v">${f.v}</div>`;
    specsBox.appendChild(d);
  });

  // イメージ動画（specsの直後に表示）
  document.querySelectorAll('.lb-videos').forEach(e => e.remove());
  if (m.videos && m.videos.length) {
    const box = document.createElement('div');
    box.className = 'lb-videos';
    box.style.cssText = 'margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);';
    box.innerHTML =
      '<div style="font-family:var(--mono);font-size:10px;letter-spacing:.16em;color:var(--accent);margin-bottom:12px;text-transform:uppercase;font-weight:600;">MOVIE ／ イメージ動画</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;">' +
      m.videos.map(u => {
        const ig = String(u).match(/instagram\.com\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
        if (ig) {
          return `<div style="position:relative;width:240px;max-width:100%;height:430px;border-radius:8px;overflow:hidden;background:#fff;">
          <iframe src="https://www.instagram.com/reel/${ig[1]}/embed" title="イメージ動画" loading="lazy" scrolling="no"
            allowtransparency="true" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>`;
        }
        const id = ytId(u);
        return `<div style="position:relative;width:200px;max-width:100%;aspect-ratio:9/16;border-radius:8px;overflow:hidden;background:#000;">
          <iframe src="https://www.youtube.com/embed/${id}" title="イメージ動画" loading="lazy"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>`;
      }).join('') +
      '</div>';
    const specsEl = document.querySelector('.specs');
    specsEl.parentNode.insertBefore(box, specsEl.nextSibling);
  }

  const avail = AVAILABILITY[m.id] || [];
  const schedSection = $('#lbSchedule');
  if (avail.length) {
    schedSection.style.display = '';
    $('#lbScheduleCards').innerHTML = avail.map(d => {
      const cls   = d.status === 'ok' ? 'avail-ok' : d.status === 'ng' ? 'avail-ng' : 'avail-pending';
      const badge = d.status === 'ok' ? '○' : d.status === 'ng' ? '✕' : '－';
      const label = d.status === 'ok' ? '対応可' : d.status === 'ng' ? '対応不可' : '未定';
      return `<div class="avail-card ${cls}"><span class="avail-date">${d.date}</span><span class="avail-badge">${badge}</span><span class="avail-label">${label}</span></div>`;
    }).join('');
  } else { schedSection.style.display = 'none'; }

  const achSection = $('#lbAchievements');
  if (m.achievementSections && m.achievementSections.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '活動実績';
    $('#lbAchList').innerHTML = m.achievementSections.map(sec => `
      <li class="ach-section-title">${sec.title}</li>
      ${sec.items.map(a => `<li>${a}</li>`).join('')}`).join('');
  } else if (m.achievements && m.achievements.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '実績';
    const noteHtml = m.achievementNote ? `<li class="ach-note">${m.achievementNote}</li>` : '';
    $('#lbAchList').innerHTML = noteHtml + m.achievements.map(a => `<li>${a}</li>`).join('');
  } else { achSection.style.display = 'none'; }

  // 競合などの注意事項（枠で強調）
  document.querySelectorAll('.lb-warning-box').forEach(e => e.remove());
  if (m.warning) {
    const box = document.createElement('div');
    box.className = 'lb-warning-box';
    box.style.cssText = 'margin-top:22px;padding:16px 18px;border:1.5px solid var(--accent);border-radius:8px;background:rgba(196,69,45,.14);';
    box.innerHTML =
      `<div style="display:flex;align-items:center;gap:8px;font-weight:700;color:#ff9b86;font-size:13px;letter-spacing:.03em;margin-bottom:10px;">
         <span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:var(--accent);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">!</span>
         ${m.warning.title}
       </div>` +
      m.warning.body.map(t => `<p style="margin:0 0 8px;font-size:12px;line-height:1.75;color:rgba(255,255,255,.88);">${t}</p>`).join('');
    const btns = document.querySelector('.lb-actions-bottom');
    btns.parentNode.insertBefore(box, btns);
  }

  // 全モデル（女性→男性）の最初と最後ではボタン自体を表示しない
  $('#lbPrev').style.visibility = hasModel(-1) ? '' : 'hidden';
  $('#lbNext').style.visibility = hasModel(1) ? '' : 'hidden';
}

// モデル移動：女性の最後→男性の最初、男性の最初→女性の最後へそのまま移動
function stepModel(delta) {
  let idx = lbIdx + delta;
  if (idx < 0) {
    if (currentTab !== 'male' || !FEMALES.length) return null;
    return { tab: 'female', list: FEMALES, idx: FEMALES.length - 1 };
  }
  if (idx >= lbList.length) {
    if (currentTab !== 'female' || !MALES.length) return null;
    return { tab: 'male', list: MALES, idx: 0 };
  }
  return { tab: currentTab, list: lbList, idx };
}
function hasModel(delta) { return !!stepModel(delta); }
function moveModel(delta) {
  const s = stepModel(delta);
  if (!s) return;
  currentTab = s.tab; lbList = s.list; lbIdx = s.idx; lbShot = 0;
  renderLightbox();
}
$('#lbPrev').addEventListener('click', () => moveModel(-1));
$('#lbNext').addEventListener('click', () => moveModel(1));
$('#lbClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  moveModel(-1);
  if (e.key === 'ArrowRight') moveModel(1);
  if (e.key === 'ArrowUp')   { e.preventDefault(); if (lbShot > 0) { lbShot--; renderLightbox(); } }
  if (e.key === 'ArrowDown') { e.preventDefault(); const ph = getPhotos(lbList[lbIdx]); if (lbShot < ph.length - 1) { lbShot++; renderLightbox(); } }
});

renderAllGrids();
$('#countFemale').textContent = FEMALES.length + ' 名';
$('#countMale').textContent = MALES.length + ' 名';
$('#countAll').textContent = '全 ' + (FEMALES.length + MALES.length) + ' 名';
