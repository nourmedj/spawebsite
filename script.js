// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================
// Elements
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

// Hamburger click: open/close menu
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  hamburger.classList.toggle("active"); // optional, for animation
});

// Mobile menu close button
function toggleMobileNav() {
  mobileNav.classList.remove("open");
  hamburger.classList.remove("active"); // reset hamburger animation
}



// ===============================
// LANGUAGE SWITCH (EN ⇄ AR)
// ===============================

const langToggle = document.getElementById("langToggle");
let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book Appointment",
    explore: "Explore Services",
    headline: "Where Serenity Meets Beauty",
    subheadline: "Experience luxury, calm, and rejuvenation in a soft, artistic atmosphere crafted with feminine warmth.",

    about_title: "About SageGlow Spa",
    about_txt1: "SageGlow Spa is a sanctuary crafted for women seeking calm, balance, and gentle beauty.",
    about_txt2: "Every detail—from our palette inspired by Dry Sage and Papaya Whip to our warm lighting—creates a feminine, artistic atmosphere.",
    about_txt3: "Our certified specialists bring years of experience in skincare, massage, and holistic therapy.",
    about_txt4: "Whether you seek relaxation, glowing skin, or luxurious self-care, SageGlow welcomes you.",
    about_cta: "Explore Our Treatments",

    servicesTitle: "Our Signature Treatments",
    servicesIntro: "Each treatment is designed to restore balance, enhance natural beauty, and bring peace to your day.",
    massageTitle: "Massage Therapy",
    massageDesc: "Release tension and relax deeply with tailored techniques.",
    facialTitle: "Facial & Skincare",
    facialDesc: "Glow naturally with hydrating and nourishing treatments.",
    nailsTitle: "Manicure & Pedicure",
    nailsDesc: "Elegant nail care with a soft, luxurious touch.",
    bodyTitle: "Body Treatments",
    bodyDesc: "Detoxify, cleanse, and renew your energy.",

    galleryTitle: "A Glimpse Into Tranquility",

    testTitle: "What Our Clients Say",
    testimonials_title: "Client Experiences",
    testimonials_txt1: "“Best facial ever. My skin felt renewed and glowing.”",
    testimonials_txt2: "“Professional staff and the massage relieved my back pain.”",
    testimonials_txt3: "“Beautiful atmosphere and exceptional service.”",

    pricing_title: "Our Pricing",
    price_plan1: "Glow Facial",
    price_plan2: "Relax Massage",
    price_plan3: "Luxury Package",

    faq_title: "Frequently Asked Questions",
    faq_q1: "How do I book an appointment?",
    faq_a1: "You can book through our website, WhatsApp, or by phone.",
    faq_q2: "Do you accept walk-ins?",
    faq_a2: "Yes, but booking in advance is recommended.",
    faq_q3: "Can treatments be customized?",
    faq_a3: "Yes — every session is tailored to your needs.",

    contactTitle: "Ready to Feel Renewed?",
    labelName: "Name",
    labelPhone: "Phone",
    labelService: "Service",
    labelDate: "Preferred Date",
    labelMsg: "Message",
    visit: "Visit Us",
    hours: "Hours",
    crafted: "Crafted with calm, care, and beauty.",
    test1: "“Every visit feels like a reset for my mind. The environment is beautiful.”",
    test2: "“Amazing staff, gentle service, and my skin has never looked better.”",
test3: "“Calming, professional, and luxurious. I always come back.”",

workTitle: "Working Hours",
mon_fri: "Monday – Friday : 09:00 – 18:00 ",
sat: "Saturday : 10:00 – 15:00 ",
sun: "Sunday : closed ",
addressTitle: "Address",
addressText: "123 Spa Street, Casablanca",
phoneText: "+213 555 123 456",

  },

  ar: {
  home: "الرئيسية",
  about: "من نحن",
  services: "الخدمات",
  gallery: "المعرض",
  contact: "اتصال",
  book: "احجزي موعداً",
  explore: "اكتشفي الخدمات",
  headline: "مكان تلتقي فيه السكينة بالجمال",
  subheadline:
    "استمتعي بالرفاهية والهدوء في أجواء فنية ناعمة مليئة بالدفء الأنثوي.",

  about_title: "عن مركز SageGlow",
  about_txt1: "SageGlow Spa هو ملاذ خاص للنساء الباحثات عن الهدوء والتوازن والجمال الطبيعي.",
  about_txt2: "كل التفاصيل من الألوان الدافئة إلى الإضاءة الناعمة تخلق جواً أنيقاً ومريحاً.",
  about_txt3: "يقدم فريقنا المعتمد خبرة طويلة في العناية بالبشرة والتدليك والعلاج الشامل.",
  about_txt4: "سواء كنتِ تبحثين عن استرخاء عميق أو بشرة متوهجة، فنحن هنا من أجلك.",
  about_cta: "اكتشفي العلاجات",

  servicesTitle: "علاجاتنا المميزة",
  servicesIntro: "كل علاج مصمم ليمنحك توازناً وجمالاً طبيعياً وراحة تامة.",
  massageTitle: "علاج التدليك",
  massageDesc: "أطلقي التوتر وتمتعي بالاسترخاء مع تقنيات مخصصة.",
  facialTitle: "العناية بالبشرة",
  facialDesc: "تفتيح وترطيب يمنح بشرتك إشراقاً طبيعياً.",
  nailsTitle: "الأظافر",
  nailsDesc: "عناية راقية للأظافر بلمسة فاخرة.",
  bodyTitle: "علاجات الجسم",
  bodyDesc: "تنقية وتجديد للطاقة.",

  galleryTitle: "لمحة من السكينة",

  testTitle: "آراء عملائنا",

  // EXTENDED testimonials cards
  testimonials_title: "تجارب العملاء",
  testimonials_txt1: "“أفضل عناية للوجه! بشرتي أصبحت متجددة ومشرقة.”",
  testimonials_txt2: "“طاقم محترف، والتدليك أزال آلام الظهر تماماً.”",
  testimonials_txt3: "“مكان جميل وخدمة استثنائية.”",

  // NEW translations for missing items:
  test1: "“كل زيارة تمنحني راحة نفسية. المكان جميل للغاية.”",
  test2: "“طاقم رائع وخدمة لطيفة، وبشرتي أصبحت أجمل.”",
  test3: "“هادئ، محترف، وفاخر. دائماً أعود إليه.”",

  pricing_title: "أسعارنا",
  price_plan1: "جلسة إشراق البشرة",
  price_plan2: "تدليك الاسترخاء",
  price_plan3: "الباقة الفاخرة",

  faq_title: "الأسئلة الشائعة",
  faq_q1: "كيف أحجز موعداً؟",
  faq_a1: "يمكنك الحجز عبر الموقع أو الواتساب أو الهاتف.",
  faq_q2: "هل تستقبلون الزبائن بدون موعد؟",
  faq_a2: "نعم، ولكن يُفضّل الحجز مسبقاً.",
  faq_q3: "هل يمكن تخصيص العلاجات؟",
  faq_a3: "نعم — كل جلسة تُصمم حسب احتياجاتك.",

  contactTitle: "جاهزة لتجديد نشاطك؟",
  labelName: "الاسم",
  labelPhone: "رقم الهاتف",
  labelService: "الخدمة",
  labelDate: "التاريخ",
  labelMsg: "الرسالة",

  crafted: "صُنع بهدوء وعناية وجمال.",

  // Contact info
  workTitle: "ساعات العمل",
  mon_fri: "الإثنين – الجمعة: 09:00 – 18:00 ",
  sat: "السبت : 10:00 – 15:00 ",
  sun: "الأحد: مغلق",
  addressTitle: "العنوان",
  addressText: "123 شارع السبا، الدار البيضاء",
  phoneText: "+213 555 123 456"
}

  }


// Apply translations
function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Direction
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Button text
  langToggle.textContent = lang === "ar" ? "EN" : "ع";

  localStorage.setItem("lang", lang);
}

applyLang(currentLang);

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLang(currentLang);
});


// ===============================
// WHATSAPP BUTTONS
// ===============================

const waButton = document.getElementById("waButton");
const waMobile = document.getElementById("waMobile");
const waQuick = document.getElementById("waQuick");

const waNumber = "213541210706"; // put your number here

function openWhatsApp() {
  window.open(`https://wa.me/${waNumber}`, "_blank");
}

if (waButton) waButton.onclick = openWhatsApp;
if (waMobile) waMobile.onclick = openWhatsApp;
if (waQuick) waQuick.onclick = openWhatsApp;


// ===============================
// BOOKING FORM → SEND TO WHATSAPP
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(bookingForm);
    const msg = `
New Booking Request:
Name: ${data.get("name")}
Phone: ${data.get("phone")}
Service: ${data.get("service")}
Date: ${data.get("date")}
Message: ${data.get("message")}
`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  });
}
