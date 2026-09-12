
(function(){
  'use strict';

  const KNOWLEDGE = {
    orgName: 'Pasdaran-e-Insaniat',
    tagline: 'Helping the Needy, One Step at a Time',
    founder: 'Samiullah Irshad',
    fund: 'PKR 5,500',
    members: 'around 15 active members and volunteers',
    whatsapp: '03446787186',
    donationNumber: '03354290692',
    donationOptions: 'Rs. 100, Rs. 300, and Rs. 500',
    projects: [
      'Thirst Relief — public water coolers and water bowls for birds and animals',
      'Heatwave Relief — cold water and ORS for poor laborers working outdoors',
      'Awareness & Community Building — positive messages, Durood-e-Pak reminders and community outreach'
    ],
    inclusion: 'Humanitarian support is intended for people in genuine need regardless of faith or background.',
    hadithUrdu: 'رسول اللہ ﷺ نے فرمایا: “صدقہ مال کو کم نہیں کرتا۔”',
    hadithRef: 'Sahih Muslim 2588'
  };

  const intents = [
    {
      id:'greeting',
      patterns:['hello','hi','hey','assalam','salam','salaam','aoa','اسلام','السلام','ہیلو','kese ho','kaise ho'],
      en:`Assalam-o-Alaikum. I’m the Pasdaran-e-Insaniat assistant. I can help with donations, projects, transparency, volunteering, the Status Wall, founder information and contact details.`,
      ru:`Wa Alaikum Assalam. Main Pasdaran-e-Insaniat ka website assistant hoon. Aap donations, projects, transparency, volunteering, Status Wall, founder ya contact ke bare mein pooch sakte hain.`,
      ur:`وعلیکم السلام۔ میں پاسدارانِ انسانیت کا ویب سائٹ اسسٹنٹ ہوں۔ آپ عطیات، منصوبوں، شفافیت، رضاکارانہ کام، اسٹیٹس وال، بانی یا رابطے کے بارے میں پوچھ سکتے ہیں۔`
    },
    {
      id:'founder',
      patterns:['founder','owner','banaya','banane wala','kis ne banaya','samiullah','irshad','بانی','فاؤنڈر'],
      en:`Pasdaran-e-Insaniat was founded by ${KNOWLEDGE.founder}. He works with a small volunteer team to organize practical humanitarian support and transparent community giving.`,
      ru:`Pasdaran-e-Insaniat ke founder ${KNOWLEDGE.founder} hain. Woh volunteer team ke saath practical welfare work aur transparent community giving ko organize karte hain.`,
      ur:`پاسدارانِ انسانیت کے بانی ${KNOWLEDGE.founder} ہیں۔ وہ رضاکار ٹیم کے ساتھ عملی فلاحی کام اور شفاف کمیونٹی تعاون کو منظم کرتے ہیں۔`
    },
    {
      id:'fund',
      patterns:['fund','budget','balance','paisa','paisay','money','amount collected','kitna fund','kitnay paisay','5500','5,500','فنڈ','بجٹ','رقم'],
      en:`The current public community fund shown on the website is ${KNOWLEDGE.fund}. The organization aims to keep reported figures clear and update them as the real balance changes.`,
      ru:`Website par current public community fund ${KNOWLEDGE.fund} show ho raha hai. Organization ka goal hai ke fund figures clear rahen aur real balance change hone par update kiye jayen.`,
      ur:`ویب سائٹ پر موجودہ عوامی کمیونٹی فنڈ ${KNOWLEDGE.fund} دکھایا گیا ہے۔ مقصد یہ ہے کہ فنڈ کی معلومات واضح رہیں اور حقیقی بیلنس بدلنے پر اپ ڈیٹ کی جائیں۔`
    },
    {
      id:'donate',
      patterns:['donate','donation','give money','contribute','atyat','atiya','atia','sadqa','sadaqa','charity','100','300','500','عطیہ','عطیات','صدقہ','چیریٹی'],
      en:`You can support Pasdaran-e-Insaniat with ${KNOWLEDGE.donationOptions}. The donation number is ${KNOWLEDGE.donationNumber} for Easypaisa and JazzCash. Please verify recipient details in your wallet before confirming any transfer.`,
      ru:`Aap ${KNOWLEDGE.donationOptions} mein se apni capacity ke mutabiq donate kar sakte hain. Easypaisa aur JazzCash donation number ${KNOWLEDGE.donationNumber} hai. Transfer confirm karne se pehle wallet mein recipient details verify zaroor karein.`,
      ur:`آپ اپنی استطاعت کے مطابق ${KNOWLEDGE.donationOptions} میں سے عطیہ دے سکتے ہیں۔ ایزی پیسہ اور جاز کیش نمبر ${KNOWLEDGE.donationNumber} ہے۔ رقم بھیجنے سے پہلے وصول کنندہ کی تفصیل ضرور چیک کریں۔`
    },
    {
      id:'easypaisa',
      patterns:['easypaisa','easy paisa','ایزی پیسہ'],
      en:`Easypaisa donations can be sent to ${KNOWLEDGE.donationNumber}. The website does not collect your wallet PIN, password or card details. Please verify recipient details before confirming the transfer.`,
      ru:`Easypaisa donation number ${KNOWLEDGE.donationNumber} hai. Website aap ka PIN, password ya card details collect nahi karti. Transfer se pehle recipient details verify karein.`,
      ur:`ایزی پیسہ عطیات کے لیے نمبر ${KNOWLEDGE.donationNumber} ہے۔ ویب سائٹ آپ کا پن، پاس ورڈ یا کارڈ کی معلومات جمع نہیں کرتی۔ رقم بھیجنے سے پہلے وصول کنندہ کی تفصیل چیک کریں۔`
    },
    {
      id:'jazzcash',
      patterns:['jazzcash','jazz cash','جاز کیش'],
      en:`JazzCash donations can be sent to ${KNOWLEDGE.donationNumber}. The website uses no paid payment gateway; any transfer fee, if applicable, is determined by JazzCash itself.`,
      ru:`JazzCash donation number ${KNOWLEDGE.donationNumber} hai. Website koi paid payment gateway use nahi karti; agar koi transfer fee ho to woh JazzCash ki apni policy hoti hai.`,
      ur:`جاز کیش عطیات کے لیے نمبر ${KNOWLEDGE.donationNumber} ہے۔ ویب سائٹ کوئی ادا شدہ پیمنٹ گیٹ وے استعمال نہیں کرتی؛ ممکنہ ٹرانسفر فیس جاز کیش کی اپنی پالیسی کے مطابق ہوگی۔`
    },
    {
      id:'projects',
      patterns:['project','projects','work','kaam','kya karte','kia krty','relief','water','ors','cooler','heatwave','awareness','birds','animals','منصوبہ','کام','پانی','گرمی'],
      en:`Our current work includes: 1) ${KNOWLEDGE.projects[0]}; 2) ${KNOWLEDGE.projects[1]}; and 3) ${KNOWLEDGE.projects[2]}.`,
      ru:`Hamare current projects mein 1) public water coolers aur birds/animals ke liye water bowls, 2) heatwave mein laborers ko cold water aur ORS, aur 3) positive awareness aur community-building activities shamil hain.`,
      ur:`ہمارے موجودہ منصوبوں میں 1) عوامی واٹر کولرز اور پرندوں/جانوروں کے لیے پانی کے برتن، 2) شدید گرمی میں مزدوروں کے لیے ٹھنڈا پانی اور او آر ایس، اور 3) مثبت آگاہی اور کمیونٹی سرگرمیاں شامل ہیں۔`
    },
    {
      id:'volunteer',
      patterns:['volunteer','join','member','membership','team','shamil','join karna','volunteering','رضاکار','شامل','ٹیم'],
      en:`You can volunteer with Pasdaran-e-Insaniat by contacting the team on WhatsApp at ${KNOWLEDGE.whatsapp}. Volunteers can help with relief distribution, outreach, documentation and transparency support.`,
      ru:`Aap Pasdaran-e-Insaniat mein volunteer banne ke liye WhatsApp ${KNOWLEDGE.whatsapp} par contact karein. Volunteers distribution, outreach, documentation aur transparency mein help kar sakte hain.`,
      ur:`آپ پاسدارانِ انسانیت میں رضاکار بننے کے لیے واٹس ایپ ${KNOWLEDGE.whatsapp} پر رابطہ کریں۔ رضاکار تقسیم، آگاہی، دستاویزات اور شفافیت کے کام میں مدد کر سکتے ہیں۔`
    },
    {
      id:'status',
      patterns:['status','status wall','post status','story','upload status','charity status','اسٹیٹس','سٹوری','پوسٹ'],
      en:`The Community Status Wall lets supporters submit a genuine charity update. To keep it free and moderated, your status text is sent to the admin through WhatsApp for review. You can then attach a photo or video in WhatsApp. Approved statuses can be published on the website.`,
      ru:`Community Status Wall par user apna genuine charity status submit kar sakta hai. Free aur safe moderation ke liye status WhatsApp par admin ko review ke liye jata hai; photo/video bhi WhatsApp mein attach ki ja sakti hai. Approval ke baad status website par publish kiya ja sakta hai.`,
      ur:`کمیونٹی اسٹیٹس وال پر صارف اپنا حقیقی چیریٹی اسٹیٹس جمع کر سکتا ہے۔ مفت اور محفوظ نگرانی کے لیے اسٹیٹس واٹس ایپ کے ذریعے ایڈمن کو جائزے کے لیے بھیجا جاتا ہے، اور تصویر یا ویڈیو بھی وہاں منسلک کی جا سکتی ہے۔ منظوری کے بعد اسٹیٹس ویب سائٹ پر شائع کیا جا سکتا ہے۔`
    },
    {
      id:'transparency',
      patterns:['transparent','transparency','proof','record','hisab','hisaab','report','receipts','accountability','شفاف','شفافیت','حساب','رپورٹ'],
      en:`Transparency is a core principle of Pasdaran-e-Insaniat. The website publicly shows the current fund figure, donation methods and project focus. As activity grows, monthly opening balance, donations received, project spending and closing balance can also be published.`,
      ru:`Transparency hamari core value hai. Website current fund, donation methods aur project focus openly show karti hai. Future mein monthly opening balance, received donations, project expenses aur closing balance bhi publish kiye ja sakte hain.`,
      ur:`شفافیت ہماری بنیادی قدر ہے۔ ویب سائٹ موجودہ فنڈ، عطیہ کے طریقے اور منصوبوں کی معلومات واضح طور پر دکھاتی ہے۔ مستقبل میں ماہانہ ابتدائی بیلنس، موصول عطیات، اخراجات اور اختتامی بیلنس بھی شائع کیے جا سکتے ہیں۔`
    },
    {
      id:'inclusion',
      patterns:['muslim','non muslim','non-muslim','religion','faith','hindu','christian','sikh','everyone','anyone','مسلم','غیر مسلم','مذہب','عیسائی','ہندو'],
      en:`${KNOWLEDGE.inclusion} Our welfare approach is based on human need and dignity, not a person's religion.`,
      ru:`Hamari humanitarian support genuine need walay logon ke liye hai — Muslim ya non-Muslim dono. Madad ka bunyadi معیار insani zarurat aur dignity hai, religion nahi.`,
      ur:`ہماری انسانی امداد حقیقی ضرورت مند افراد کے لیے ہے، خواہ وہ مسلمان ہوں یا غیر مسلم۔ مدد کی بنیاد انسانی ضرورت اور وقار ہے، مذہب نہیں۔`
    },
    {
      id:'contact',
      patterns:['contact','phone','number','whatsapp','call','rabta','message','رابطہ','واٹس ایپ','نمبر'],
      en:`For organization questions, volunteering or status submissions, contact the team on WhatsApp at ${KNOWLEDGE.whatsapp}. Donation wallet number: ${KNOWLEDGE.donationNumber}.`,
      ru:`Organization, volunteering ya status submission ke liye WhatsApp ${KNOWLEDGE.whatsapp} par contact karein. Donation wallet number ${KNOWLEDGE.donationNumber} hai.`,
      ur:`تنظیم، رضاکارانہ کام یا اسٹیٹس جمع کرانے کے لیے واٹس ایپ ${KNOWLEDGE.whatsapp} پر رابطہ کریں۔ عطیہ والٹ نمبر ${KNOWLEDGE.donationNumber} ہے۔`
    },
    {
      id:'hadith',
      patterns:['hadith','hadees','hadeeth','charity hadith','sadqa hadith','حدیث','صدقہ'],
      en:`The website includes the reminder: ${KNOWLEDGE.hadithUrdu} — ${KNOWLEDGE.hadithRef}. Meaning: “Charity does not decrease wealth.”`,
      ru:`Website par ye hadees reminder diya gaya hai: ${KNOWLEDGE.hadithUrdu} — ${KNOWLEDGE.hadithRef}. Meaning: Charity does not decrease wealth.`,
      ur:`ویب سائٹ پر یہ حدیث بطور یاد دہانی شامل ہے: ${KNOWLEDGE.hadithUrdu} — ${KNOWLEDGE.hadithRef}۔ مفہوم: صدقہ مال کو کم نہیں کرتا۔`
    },
    {
      id:'fees',
      patterns:['fee','fees','charge','charges','paid','free','cost','paisa lagega','charges lagy','فیس','چارج','مفت'],
      en:`The website itself does not use a paid payment gateway and does not charge a website processing fee. If Easypaisa or JazzCash applies a transfer fee, that is determined by the wallet provider under its own rules.`,
      ru:`Website khud koi paid payment gateway use nahi karti aur website processing fee nahi leti. Agar Easypaisa ya JazzCash transfer fee lagaye to woh wallet provider ki apni policy hoti hai.`,
      ur:`ویب سائٹ خود کوئی ادا شدہ پیمنٹ گیٹ وے استعمال نہیں کرتی اور ویب سائٹ پروسیسنگ فیس نہیں لیتی۔ اگر ایزی پیسہ یا جاز کیش کوئی ٹرانسفر فیس لگائے تو وہ متعلقہ والٹ کی اپنی پالیسی ہوگی۔`
    },
    {
      id:'about',
      patterns:['what is','about','organization','ngo','welfare','pasdaran','insaniat','mission','purpose','kya hai','kia ha','organization kya','تنظیم','مشن','پاسداران'],
      en:`Pasdaran-e-Insaniat — “Guardians of Humanity” — is a grassroots welfare initiative focused on practical relief, transparent community giving and volunteer service. Its tagline is “${KNOWLEDGE.tagline}.”`,
      ru:`Pasdaran-e-Insaniat — “Guardians of Humanity” — aik grassroots welfare initiative hai jo practical relief, transparent community giving aur volunteer service par focus karti hai. Tagline hai: “${KNOWLEDGE.tagline}.”`,
      ur:`پاسدارانِ انسانیت — “Guardians of Humanity” — ایک عوامی فلاحی اقدام ہے جو عملی امداد، شفاف کمیونٹی تعاون اور رضاکارانہ خدمت پر توجہ دیتا ہے۔ اس کا نعرہ ہے: “${KNOWLEDGE.tagline}.”`
    }
  ];

  function normalize(s){
    return (s||'')
      .toLowerCase()
      .replace(/[’'`]/g,'')
      .replace(/[^\p{L}\p{N}\s-]/gu,' ')
      .replace(/\s+/g,' ')
      .trim();
  }

  function detectLang(text){
    const t = text || '';
    if (/[\u0600-\u06FF]/.test(t)) return 'ur';
    const n = normalize(t);
    const roman = ['kia','kya','kaise','kaisay','mujay','mujhe','ap','aap','hai','ha','hain','karna','krna','btao','batao','paisa','paisay','donation','shamil','rabta','kahan','kon','kis','kay','ke','ki'];
    let score = roman.reduce((s,w)=>s+(n.split(' ').includes(w)?1:0),0);
    return score>=2 ? 'ru' : 'en';
  }

  function scoreIntent(text, intent){
    const n = normalize(text);
    let score = 0;
    intent.patterns.forEach(p=>{
      const pn = normalize(p);
      if(!pn) return;
      if(n === pn) score += 5;
      else if(n.includes(pn)) score += pn.includes(' ') ? 4 : 2;
      else {
        const parts = pn.split(' ');
        const matched = parts.filter(x=>n.includes(x)).length;
        if(parts.length>1 && matched===parts.length) score += 3;
      }
    });
    return score;
  }

  function getReply(text){
    const lang = detectLang(text);
    const ranked = intents.map(i=>({i,score:scoreIntent(text,i)})).sort((a,b)=>b.score-a.score);
    if(ranked[0].score>0){
      const i=ranked[0].i;
      return {text:i[lang]||i.en, lang, confident:ranked[0].score>=2};
    }
    const fallback = {
      en:`I can help with Pasdaran-e-Insaniat, donations, projects, fund transparency, volunteering, the Status Wall, founder information and contact details. I’m not confident about that question yet. You can ask it another way or contact the team on WhatsApp at ${KNOWLEDGE.whatsapp}.`,
      ru:`Main Pasdaran-e-Insaniat, donations, projects, fund transparency, volunteering, Status Wall, founder aur contact ke bare mein help kar sakta hoon. Is sawal ka reliable jawab mere paas abhi nahi hai. Aap isay doosray lafzon mein pooch sakte hain ya WhatsApp ${KNOWLEDGE.whatsapp} par team se rabta karein.`,
      ur:`میں پاسدارانِ انسانیت، عطیات، منصوبوں، فنڈ شفافیت، رضاکارانہ کام، اسٹیٹس وال، بانی اور رابطے کے بارے میں مدد کر سکتا ہوں۔ اس سوال کا قابلِ اعتماد جواب میرے پاس ابھی نہیں ہے۔ آپ سوال دوسرے الفاظ میں پوچھ سکتے ہیں یا واٹس ایپ ${KNOWLEDGE.whatsapp} پر ٹیم سے رابطہ کریں۔`
    };
    return {text:fallback[lang], lang, confident:false};
  }

  const style = document.createElement('style');
  style.textContent = `
  #pi-chat-launcher{
    position:fixed;right:22px;bottom:22px;z-index:9997;width:62px;height:62px;border:0;border-radius:50%;
    background:linear-gradient(145deg,#0b2f26,#155542);color:#fff;box-shadow:0 18px 45px rgba(8,35,28,.28);
    display:grid;place-items:center;cursor:pointer;transition:.2s ease;font-family:inherit
  }
  #pi-chat-launcher:hover{transform:translateY(-2px) scale(1.02)}
  #pi-chat-launcher svg{width:28px;height:28px}
  #pi-chat-launcher .dot{position:absolute;right:5px;top:4px;width:12px;height:12px;border-radius:50%;background:#c7a15a;border:2px solid #fff}
  #pi-chat-panel{
    position:fixed;right:22px;bottom:96px;z-index:9998;width:min(420px,calc(100vw - 28px));height:min(650px,calc(100vh - 125px));
    background:#fffdfa;border:1px solid #dfe5df;border-radius:24px;box-shadow:0 28px 80px rgba(8,35,28,.24);
    overflow:hidden;display:none;grid-template-rows:auto auto 1fr auto auto;font-family:Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif
  }
  #pi-chat-panel.open{display:grid;animation:piChatIn .18s ease-out}
  @keyframes piChatIn{from{opacity:0;transform:translateY(10px) scale(.985)}to{opacity:1;transform:none}}
  .pi-chat-head{background:linear-gradient(125deg,#071d17,#0b2f26 62%,#154839);color:#fff;padding:16px 17px;display:flex;align-items:center;gap:12px}
  .pi-chat-mark{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#c7a15a;color:#17231e;font-weight:950;border:1px solid rgba(255,255,255,.35)}
  .pi-chat-title{min-width:0;flex:1}.pi-chat-title strong{display:block;font-size:15px}.pi-chat-title small{display:block;color:#bdd0c7;font-size:11px;margin-top:1px}
  .pi-chat-close{width:36px;height:36px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.04);color:#fff;cursor:pointer;font-size:20px}
  .pi-chat-note{padding:9px 15px;background:#f4f0e4;color:#5b5c52;border-bottom:1px solid #e7e1d2;font-size:10.5px;line-height:1.45}
  .pi-chat-body{overflow:auto;padding:16px;background:linear-gradient(#fffdfa,#fbfaf5)}
  .pi-msg{display:flex;margin:0 0 12px}.pi-msg.user{justify-content:flex-end}
  .pi-bubble{max-width:86%;padding:11px 13px;border-radius:16px;font-size:13.5px;line-height:1.52;white-space:pre-line}
  .pi-msg.bot .pi-bubble{background:#edf3ef;color:#19352c;border-bottom-left-radius:5px;border:1px solid #dfe8e3}
  .pi-msg.user .pi-bubble{background:#0b2f26;color:#fff;border-bottom-right-radius:5px}
  .pi-meta{font-size:9px;opacity:.6;margin-top:5px}
  .pi-typing{display:inline-flex;gap:4px;align-items:center;padding:10px 13px;border-radius:15px;background:#edf3ef;border:1px solid #dfe8e3}
  .pi-typing i{width:6px;height:6px;border-radius:50%;background:#668076;animation:piDot 1s infinite alternate}.pi-typing i:nth-child(2){animation-delay:.16s}.pi-typing i:nth-child(3){animation-delay:.32s}
  @keyframes piDot{from{opacity:.35;transform:translateY(0)}to{opacity:1;transform:translateY(-3px)}}
  .pi-quick{display:flex;gap:7px;overflow-x:auto;padding:9px 12px;border-top:1px solid #e8ece9;background:#fff;scrollbar-width:thin}
  .pi-chip{white-space:nowrap;border:1px solid #cbd7d1;background:#fff;color:#0b2f26;border-radius:999px;padding:7px 10px;font-size:10.5px;font-weight:800;cursor:pointer}
  .pi-chat-input{display:grid;grid-template-columns:1fr auto;gap:8px;padding:11px;background:#fff;border-top:1px solid #e6ebe8}
  .pi-chat-input textarea{min-height:44px;max-height:110px;resize:none;border:1px solid #cad5cf;border-radius:13px;padding:11px 12px;font:inherit;font-size:13px;outline:none}
  .pi-chat-input textarea:focus{border-color:#4f7567;box-shadow:0 0 0 3px rgba(23,99,78,.08)}
  .pi-send{width:46px;height:46px;border:0;border-radius:13px;background:#c7a15a;color:#17231e;font-size:18px;font-weight:900;cursor:pointer}
  .pi-whatsapp{display:inline-flex;margin-top:9px;gap:6px;align-items:center;color:#17634e;font-weight:850;font-size:11.5px}
  @media(max-width:600px){
    #pi-chat-launcher{right:14px;bottom:14px;width:58px;height:58px}
    #pi-chat-panel{left:10px;right:10px;bottom:82px;width:auto;height:min(690px,calc(100vh - 95px));border-radius:20px}
  }`;
  document.head.appendChild(style);

  const panel = document.createElement('section');
  panel.id='pi-chat-panel';
  panel.setAttribute('aria-label','Pasdaran-e-Insaniat assistant');
  panel.innerHTML=`
    <div class="pi-chat-head">
      <div class="pi-chat-mark">PI</div>
      <div class="pi-chat-title"><strong>Pasdaran Assistant</strong><small>English • Urdu • Roman Urdu</small></div>
      <button class="pi-chat-close" aria-label="Close chatbot">×</button>
    </div>
    <div class="pi-chat-note">Free knowledge-based assistant. It does not use a paid AI API or collect payment credentials. For sensitive or uncertain matters, contact the organization directly.</div>
    <div class="pi-chat-body" id="piChatBody"></div>
    <div class="pi-quick">
      <button class="pi-chip" data-q="How can I donate?">Donate</button>
      <button class="pi-chip" data-q="What projects do you run?">Projects</button>
      <button class="pi-chip" data-q="Current fund kitna hai?">Fund</button>
      <button class="pi-chip" data-q="Main volunteer kaise ban sakta hoon?">Volunteer</button>
      <button class="pi-chip" data-q="Status wall kya hai?">Status Wall</button>
      <button class="pi-chip" data-q="Do you help non-Muslims too?">Who We Help</button>
    </div>
    <form class="pi-chat-input" id="piChatForm">
      <textarea id="piChatInput" rows="1" aria-label="Ask about Pasdaran-e-Insaniat" placeholder="Ask about Pasdaran-e-Insaniat..."></textarea>
      <button class="pi-send" type="submit" aria-label="Send message">➤</button>
    </form>`;

  const launcher=document.createElement('button');
  launcher.id='pi-chat-launcher';
  launcher.setAttribute('aria-label','Open Pasdaran Assistant');
  launcher.innerHTML=`<span class="dot"></span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5.8C5 4.81 5.81 4 6.8 4h10.4c.99 0 1.8.81 1.8 1.8v7.4c0 .99-.81 1.8-1.8 1.8H11l-4.1 3.2c-.59.46-1.4.04-1.4-.71V15.5A1.8 1.8 0 0 1 5 14.2V5.8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 8.5h7M8.5 11.5h4.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  document.body.appendChild(panel);
  document.body.appendChild(launcher);

  const body=panel.querySelector('#piChatBody');
  const form=panel.querySelector('#piChatForm');
  const input=panel.querySelector('#piChatInput');
  const close=panel.querySelector('.pi-chat-close');

  function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
  function time(){return new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
  function addMsg(text,who='bot',save=true){
    const wrap=document.createElement('div');wrap.className='pi-msg '+who;
    wrap.innerHTML=`<div class="pi-bubble">${esc(text)}<div class="pi-meta">${time()}</div>${who==='bot' && text.includes('WhatsApp')?`<a class="pi-whatsapp" href="https://wa.me/923446787186" target="_blank" rel="noopener">Continue on WhatsApp →</a>`:''}</div>`;
    body.appendChild(wrap);body.scrollTop=body.scrollHeight;
    if(save) saveHistory();
  }
  function typing(show=true){
    let t=body.querySelector('.pi-typing-wrap');
    if(show && !t){t=document.createElement('div');t.className='pi-msg bot pi-typing-wrap';t.innerHTML='<div class="pi-typing"><i></i><i></i><i></i></div>';body.appendChild(t);body.scrollTop=body.scrollHeight}
    if(!show && t)t.remove();
  }
  function saveHistory(){
    try{
      const items=[...body.querySelectorAll('.pi-msg:not(.pi-typing-wrap)')].slice(-20).map(x=>({
        who:x.classList.contains('user')?'user':'bot',
        text:x.querySelector('.pi-bubble').childNodes[0]?.textContent||''
      }));
      localStorage.setItem('pi_chat_history',JSON.stringify(items));
    }catch(e){}
  }
  function loadHistory(){
    try{
      const data=JSON.parse(localStorage.getItem('pi_chat_history')||'[]');
      if(Array.isArray(data)&&data.length){data.forEach(x=>addMsg(x.text,x.who,false));return true}
    }catch(e){}
    return false;
  }
  function ask(q){
    const text=(q||'').trim();if(!text)return;
    addMsg(text,'user');input.value='';typing(true);
    setTimeout(()=>{
      typing(false);
      const r=getReply(text);
      addMsg(r.text,'bot');
    },550+Math.random()*450);
  }

  launcher.addEventListener('click',()=>{
    panel.classList.toggle('open');
    if(panel.classList.contains('open')){
      if(!body.dataset.started){
        body.dataset.started='1';
        if(!loadHistory()) addMsg('Assalam-o-Alaikum. I’m the Pasdaran-e-Insaniat assistant. Ask me anything about the organization in English, Urdu, or Roman Urdu.','bot');
      }
      setTimeout(()=>input.focus(),120);
    }
  });
  close.addEventListener('click',()=>panel.classList.remove('open'));
  form.addEventListener('submit',e=>{e.preventDefault();ask(input.value)});
  input.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ask(input.value)}
  });
  input.addEventListener('input',()=>{
    input.style.height='auto';input.style.height=Math.min(input.scrollHeight,110)+'px';
  });
  panel.querySelectorAll('.pi-chip').forEach(c=>c.addEventListener('click',()=>ask(c.dataset.q)));
})();
