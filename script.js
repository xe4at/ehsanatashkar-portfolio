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
        alert("پیام شما با موفقیت ارسال شد!");
        // Clear all form fields
        document.getElementById("contactForm").reset();
      },
      function (error) {
        alert("متاسفانه مشکلی پیش آمده. لطفا دوباره تلاش کنید.");
        console.error("EmailJS Error:", error);
      }
    )
    .finally(() => {
      // Hide loading overlay
      loadingOverlay.style.display = "none";

      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
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
