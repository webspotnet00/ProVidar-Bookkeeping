/* ProVidar Bookkeeping — site behaviour */
(function () {
  "use strict";

  /* ----- Mobile navigation ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Footer year ----- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ----- Contact form -----
     This is a static site: the form sends the visitor to their own email
     client via mailto, so no server or third-party service is needed.
     To use a form service instead, see FORM_ENDPOINT below.
  */
  var FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
  var CONTACT_EMAIL = "providarbookkeeping@gmail.com";

  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      note.className = "form-note";

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var business = form.business.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        note.classList.add("err");
        note.textContent = "Please fill in your name, email and message.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.classList.add("err");
        note.textContent = "Please check the email address you entered.";
        return;
      }

      if (FORM_ENDPOINT) {
        note.textContent = "Sending...";
        fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        })
          .then(function (r) {
            if (!r.ok) throw new Error("Request failed");
            note.classList.add("ok");
            note.textContent = "Thank you — we'll reply within one business day.";
            form.reset();
          })
          .catch(function () {
            note.classList.add("err");
            note.textContent = "Something went wrong. Please email " + CONTACT_EMAIL + " instead.";
          });
        return;
      }

      var subject = "Consultation request — " + name + (business ? " (" + business + ")" : "");
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        (business ? "Business: " + business + "\n" : "") +
        "\n" + message;

      window.location.href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      note.classList.add("ok");
      note.textContent = "Your email app should open with the message ready to send.";
    });
  }
})();
