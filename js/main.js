let form = document.querySelector(".main_page_content_form");
let number = form.querySelector(".number_human");
let fields = form.querySelectorAll(".field");

// присвоить name инпутам!! и валидацию написать !! и ещё php бэк с бд !!
number.oninput = function () {
  document.querySelector(".humans").innerHTML = "";
  for (let index = 0; index < number.value; index++) {
    document.querySelector(".humans").insertAdjacentHTML(
      "beforeend",
      `<div class="hero">
        <input type="text" name = "fio ${index} field" class="FIO" placeholder="ФИО">
        <input type="text" name = "jobtitle ${index} field" class="rang" placeholder="Должность">
        <input type="text" name = "department ${index} field" class="place" placeholder="Кафедра">
        <input type="email" name = "mail ${index} field" class="mail" placeholder="Почта">
        <input type="tel" name = "telephone ${index} field" class="phone" placeholder="Номер телефона +7...">
        </div>`
    );
  }
};

form.addEventListener("submit", function () {
  event.preventDefault();

  var errors = form.querySelectorAll(".error");
  for (let er = 0; er < errors.length; er++) {
    errors[er].remove();
  }

  for (let index = 0; index < fields.length; index++) {
    if (!fields[index].value) {
      var error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.innerHTML = "Поле пустое";
      form[index].parentElement.insertBefore(error, fields[index]);
    }
  }
});
