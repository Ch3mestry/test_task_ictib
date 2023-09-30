let form = document.querySelector(".main_page_content_form");
let number = form.querySelector(".number_human");
let fields = form.querySelectorAll(".field");
let parentNumber = form.querySelector(".count_human");

let generateError = function (text) {
  var error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[1-9\s]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

number.oninput = function () {
  document.querySelector(".humans").innerHTML = "";
  if (number.value > 0) {
    for (let index = 0; index < number.value; index++) {
      document.querySelector(".humans").insertAdjacentHTML(
        "beforeend",
        `<div class="hero">
        <input type="text" name = "fio ${index}" class="FIO field" placeholder="ФИО">
        <input type="text" name = "jobtitle ${index}" class="rang field" placeholder="Должность">
        <input type="text" name = "department ${index}" class="place field" placeholder="Кафедра">
        <input type="email" name = "mail ${index}" class="mail field" placeholder="Почта">
        <input type="tel" onkeypress="validate(event)" maxlength='16' name = "telephone ${index}" class="phone field" placeholder="Номер телефона +7...">
        </div>`
      );
    }
  }
};

form.addEventListener("button", function () {
  event.preventDefault();

  var errors = form.querySelectorAll(".error");
  for (let er = 0; er < errors.length; er++) {
    errors[er].remove();
  }

  if (!number.value) {
    var error = generateError("Введите число от 1 до 9");
    parentNumber.insertAdjacentElement("afterbegin", error);
  }

  for (let index = 0; index < fields.length; index++) {
    if (!fields[index].value) {
      var error = generateError("Заполните поле ответа");
      form[index].parentElement.insertBefore(error, fields[index]);
    }
  }
});
