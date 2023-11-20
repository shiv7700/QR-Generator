const form = document.querySelector("form");
const reset = document.querySelector(".clear");
const print = document.querySelector(".print");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let qr = document.querySelector(".qr");
  let qrCodeContainer = document.querySelector(".qr-code");
  let empty = document.querySelector(".empty");
  let data = document.querySelector(".data");
  qrCodeContainer.style.display = "inline-block";
  if (qr.value === "") {
    empty.innerHTML = `input box is empty :)`;
  } else {
    data.innerHTML = "QR Code :-";
    let qrs = new QRious({
      element: qrCodeContainer,
      value: qr.value,
      size: 300,
    });
  }
  qr.value = "";
});

reset.addEventListener("click", function () {
  let data = document.querySelector(".data");
  data.innerHTML = "";
  let qrCodeContainer = document.querySelector(".qr-code");
  // qrCodeContainer.remove();
  qrCodeContainer.style.display = "none";
});

print.addEventListener("click", () => {
  window.print();
});
