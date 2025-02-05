document.addEventListener("DOMContentLoaded", function () {
  fetch("/common/common.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
      addBackButtonFunctionality();
    });

  function addBackButtonFunctionality() {
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function () {
      history.back();
    });
  }
});
