emailjs.init("w2F6Ofgte9pIyv0Lq");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      message: this.message.value,
    };

    emailjs
      .send("service_fxknijq", "template_dssdfw4", formData)
      .then(function () {
        alert("پیام شما با موفقیت ارسال شد!");

        document.getElementById("contactForm").reset();
      })
      .catch(function (error) {
        alert("متاسفانه مشکلی پیش آمده. لطفا دوباره تلاش کنید.");
        console.error("EmailJS Error:", error);
      })
      .finally(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
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
