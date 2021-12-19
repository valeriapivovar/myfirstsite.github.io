(function () {
    const $like = document.querySelector("#like");
    $like.addEventListener("click", () => ($like.style.color = "red"));

    const $date = document.querySelector("#date");
    const currentDate = new Date();
    $date.innerHTML = currentDate.getFullYear();
})();
