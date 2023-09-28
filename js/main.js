let form = document.querySelector(".main_page_content_form");
console.log(form);
let number = form.querySelector(".number_human");
let fields = form.querySelectorAll(".field");

// number.addEventListener("input", function () {});

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
