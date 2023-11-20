const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let qr = document.querySelector(".qr").value;
  let qrCodeContainer = document.querySelector(".qr-code");
  qrCodeContainer.innerHTML = "";
  let qrs = new QRious({
    element: qrCodeContainer,
    value: qr,
    size: 300,
  });
});
