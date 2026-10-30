// ---- Contact settings: change these in ONE place ----
var WHATSAPP_NUMBER = "2348123186010"; // international format, no + or spaces

// mobile menu
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// quote form -> opens WhatsApp with the details filled in
(function () {
  var form = document.getElementById("quote-form");
  if (!form) return;
  var params = new URLSearchParams(location.search);
  var pre = params.get("service");
  if (pre) { var sel = form.elements["service"]; for (var i = 0; i < sel.options.length; i++) { if (sel.options[i].value === pre) sel.selectedIndex = i; } }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var lines = [
      "Hello Kingsize Global Logistics, I would like a quote.",
      "",
      "Name: " + f["name"].value,
      "Phone: " + f["phone"].value,
      "Service: " + f["service"].value,
      "Pick-up: " + f["from"].value,
      "Destination: " + f["to"].value,
      "Preferred date: " + (f["date"].value || "Not decided"),
      "Details: " + (f["details"].value || "None")
    ];
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });
})();
