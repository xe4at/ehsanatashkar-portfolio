emailjs.init("w2F6Ofgte9pIyv0Lq");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading overlay
  const loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "flex";

  // Disable submit button
  const submitBtn = this.querySelector(".submit");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Get form data
  const formData = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value,
  };

  // Send email
  emailjs
    .send("service_fxknijq", "template_dssdfw4", formData)
    .then(
      function (response) {
        const successMessage = isEnglish
          ? translations["success-message"].en
          : translations["success-message"].fa;
        alert(successMessage);
        // Clear all form fields
        document.getElementById("contactForm").reset();
      },
      function (error) {
        const errorMessage = isEnglish
          ? translations["error-message"].en
          : translations["error-message"].fa;
        alert(errorMessage);
        console.error("EmailJS Error:", error);
      }
    )
    .finally(() => {
      // Hide loading overlay
      loadingOverlay.style.display = "none";

      // Re-enable submit button
      submitBtn.disabled = false;
      const sendMessage = isEnglish
        ? translations["send-message"].en
        : translations["send-message"].fa;
      submitBtn.textContent = sendMessage;
    });
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

if (menu && navlist) {
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  };

  document.querySelectorAll(".navlist a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
    });
  });

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
  };
} else {
  console.error("عناصر مورد نظر یافت نشدند!");
}

// Language Switch Functionality
const langToggle = document.getElementById("langToggle");
const htmlElement = document.documentElement;
let isEnglish = false;

const translations = {
  // Page Title
  "page-title": {
    en: "Personal Website",
    fa: "وبسایت شخصی",
  },

  // Home Section
  greeting: {
    en: "Hello",
    fa: "سلام",
  },
  im: {
    en: "I'm",
    fa: "من",
  },
  "full-name": {
    en: "Ehsan Atashkar",
    fa: "احسان آتشکار",
  },
  "home-title": {
    en: "Web Developer",
    fa: "توسعه‌دهنده وب",
  },
  "home-desc": {
    en: "Web Developer with 2+ years experience that keeps customers coming back for services with the best effort.",
    fa: "توسعه‌دهنده وب با بیش از ۲ سال تجربه که با تلاش فراوان، مشتریان را به استفاده مجدد از خدمات ترغیب می‌کند.",
  },
  "hello-btn": {
    en: "Say Hello",
    fa: "سلام بگو",
  },
  "watch-btn": {
    en: "Watch My Work",
    fa: "مشاهده کارهای من",
  },

  // About Section
  "about-title": {
    en: "About Me",
    fa: "درباره من",
  },
  "about-subtitle": {
    en: "Web Developer & Designer",
    fa: "توسعه‌دهنده و طراح وب",
  },
  "about-desc": {
    en: "I am a web developer with over 2 years of hands-on experience in creating modern web applications. My expertise spans across various frontend and backend technologies, with a strong foundation in JavaScript and its ecosystem.",
    fa: "من یک توسعه‌دهنده وب با بیش از ۲ سال تجربه عملی در ایجاد برنامه‌های وب مدرن هستم. تخصص من در فناوری‌های مختلف فرانت‌اند و بک‌اند، با پایه قوی در جاوااسکریپت و اکوسیستم آن توانایی ایجاد برنامه‌های وب پیچیده و پاسخگوی سریع را دارم.",
  },
  "more-btn": {
    en: "More About",
    fa: "اطلاعات بیشتر",
  },

  // Services Section
  "services-title": {
    en: "My Services",
    fa: "خدمات من",
  },
  "services-subtitle": {
    en: "What I Am Expert In",
    fa: "در چه زمینه‌هایی تخصص دارم",
  },
  "frontend-title": {
    en: "Frontend Development",
    fa: "توسعه فرانت‌اند",
  },
  "frontend-desc": {
    en: "Specializing in modern frontend development using React and Next.js. Building fast, interactive, and user-friendly web applications with clean code and optimized performance.",
    fa: "متخصص در توسعه فرانت‌اند مدرن با استفاده از React و Next.js. ساخت برنامه‌های وب سریع، تعاملی و کاربرپسند با شیوه‌های کدنویسی تمیز و عملکرد بهینه.",
  },
  "responsive-title": {
    en: "Responsive Design",
    fa: "طراحی واکنش‌گرا",
  },
  "responsive-desc": {
    en: "Creating modern and responsive websites that look great on all devices. Skilled in CSS frameworks, modern design principles, and creating engaging interfaces with smooth animations.",
    fa: "ایجاد وب‌سایت‌های مدرن و واکنش‌گرا که در تمام دستگاه‌ها عالی به نظر می‌رسند. مهارت در فریم‌ورک‌های CSS، اصول طراحی مدرن و ایجاد رابط‌های کاربری جذاب با انیمیشن‌های روان.",
  },
  "uiux-title": {
    en: "UI/UX Design",
    fa: "طراحی UI/UX",
  },
  "uiux-desc": {
    en: "Creating intuitive and attractive user interfaces with modern design trends. Focus on user experience, interactive prototypes, and clean design systems that enhance user engagement and satisfaction.",
    fa: "ایجاد رابط‌های کاربری شهودی و جذاب با روندهای طراحی مدرن. تمرکز بر تجربه کاربری، نمونه‌های اولیه تعاملی و سیستم‌های طراحی تمیز که تعامل و رضایت کاربر را افزایش می‌دهند.",
  },
  "read-more": {
    en: "Read More",
    fa: "بیشتر بخوانید",
  },

  // Portfolio Section
  "portfolio-title": {
    en: "Latest Projects",
    fa: "آخرین پروژه‌ها",
  },
  "portfolio-subtitle": {
    en: "Portfolio",
    fa: "نمونه کارها",
  },
  "crypto-title": {
    en: "Crypto Application",
    fa: "اپلیکیشن ارز دیجیتال",
  },
  "crypto-desc": {
    en: "A modern cryptocurrency tracking application built with React. Features real-time price updates, detailed coin information, and interactive charts for market analysis.",
    fa: "یک اپلیکیشن مدرن برای پیگیری ارزهای دیجیتال که با React ساخته شده است. دارای قابلیت‌های به‌روزرسانی قیمت در لحظه، اطلاعات دقیق ارزها و نمودارهای تعاملی برای تحلیل بازار.",
  },
  "library-title": {
    en: "Library Management App",
    fa: "اپلیکیشن مدیریت کتابخانه",
  },
  "library-desc": {
    en: "A comprehensive library management system built with React. Includes book cataloging, search functionality, and a modern user interface for easy book tracking.",
    fa: "یک سیستم جامع مدیریت کتابخانه که با React ساخته شده است. شامل قابلیت‌های فهرست‌بندی کتاب‌ها، جستجو و رابط کاربری مدرن برای پیگیری آسان کتاب‌ها.",
  },
  "more-projects-title": {
    en: "More Projects",
    fa: "پروژه‌های بیشتر",
  },
  "more-projects-desc": {
    en: "These are just samples of my projects. I've also developed larger projects including a Divar-like platform. Visit my GitHub profile to see more advanced projects or contact me via email.",
    fa: "این‌ها تنها نمونه‌هایی از پروژه‌های من هستند. من پروژه‌های بزرگتری از جمله یک پلتفرم مشابه دیوار نیز توسعه داده‌ام. برای دیدن پروژه‌های پیشرفته‌تر، به پروفایل گیت‌هاب من سر بزنید یا از طریق ایمیل با من در تماس باشید.",
  },

  // Contact Section
  "contact-title": {
    en: "Contact Me!",
    fa: "تماس با من!",
  },
  "contact-subtitle": {
    en: "If You Have Any Project In Your Mind",
    fa: "اگر پروژه‌ای در ذهن دارید",
  },
  "contact-desc": {
    en: "I'm a web developer and designer - creating modern and responsive web applications with clean code and beautiful user interfaces.",
    fa: "من یک توسعه‌دهنده و طراح وب هستم - ایجاد برنامه‌های وب مدرن و واکنش‌گرا با کد تمیز و رابط‌های کاربری زیبا.",
  },
  "name-placeholder": {
    en: "Your Name",
    fa: "نام شما",
  },
  "email-placeholder": {
    en: "Your Email Address",
    fa: "آدرس ایمیل شما",
  },
  "phone-placeholder": {
    en: "Your Phone Number",
    fa: "شماره موبایل شما",
  },
  "message-placeholder": {
    en: "How Can I Help You?",
    fa: "چطور می‌توانم کمک کنم؟",
  },
  "send-message": {
    en: "Send Message",
    fa: "ارسال پیام",
  },
  sending: {
    en: "Sending...",
    fa: "در حال ارسال...",
  },
  "loading-text": {
    en: "Sending message...",
    fa: "در حال ارسال پیام...",
  },
  "success-message": {
    en: "Your message has been sent successfully!",
    fa: "پیام شما با موفقیت ارسال شد!",
  },
  "error-message": {
    en: "Sorry, there was a problem. Please try again.",
    fa: "متاسفانه مشکلی پیش آمده. لطفا دوباره تلاش کنید.",
  },

  // Footer
  copyright: {
    en: "© 2024 All rights reserved by Ehsan Atashkar",
    fa: "تمامی حقوق محفوظ است © ۱۴۰۴ توسط احسان آتشکار",
  },

  // Alt Text for Images
  "profile-alt": {
    en: "Profile Picture",
    fa: "عکس پروفایل",
  },
  "crypto-alt": {
    en: "Cryptocurrency Application Screenshot",
    fa: "تصویر اپلیکیشن ارز دیجیتال",
  },
  "library-alt": {
    en: "Library Management Application Screenshot",
    fa: "تصویر اپلیکیشن مدیریت کتابخانه",
  },
  "more-projects-alt": {
    en: "More Projects Preview",
    fa: "پیش‌نمایش پروژه‌های بیشتر",
  },

  // Contact Information
  phone: {
    en: "+98-939-142-9334",
    fa: "۰۹۳۹-۱۴۲-۹۳۳۴",
  },
  email: {
    en: "ehsanwebdev84@gmail.com",
    fa: "ehsanwebdev84@gmail.com",
  },
};

langToggle.addEventListener("click", () => {
  isEnglish = !isEnglish;
  langToggle.textContent = isEnglish ? "FA" : "EN";
  htmlElement.setAttribute("dir", isEnglish ? "ltr" : "rtl");
  htmlElement.setAttribute("lang", isEnglish ? "en" : "fa");
  document.title = translations["page-title"][isEnglish ? "en" : "fa"];

  // Update navigation items
  document.querySelectorAll(".navlist a").forEach((link) => {
    link.textContent = link.getAttribute(isEnglish ? "data-en" : "data-fa");
  });

  // Update other text content
  Object.keys(translations).forEach((key) => {
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach((element) => {
      if (
        element.tagName.toLowerCase() === "input" ||
        element.tagName.toLowerCase() === "textarea"
      ) {
        element.placeholder = translations[key][isEnglish ? "en" : "fa"];
      } else if (element.tagName.toLowerCase() === "img") {
        element.alt = translations[key][isEnglish ? "en" : "fa"];
      } else {
        element.textContent = translations[key][isEnglish ? "en" : "fa"];
      }
    });
  });

  // Update loading text
  const loadingText = document.querySelector(".loading-spinner p");
  if (loadingText) {
    loadingText.textContent =
      translations["loading-text"][isEnglish ? "en" : "fa"];
  }

  // Update submit button text
  const submitBtn = document.querySelector(".submit");
  if (submitBtn) {
    submitBtn.textContent =
      translations["send-message"][isEnglish ? "en" : "fa"];
  }
});
