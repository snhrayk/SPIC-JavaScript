const school = document.querySelector("#school");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
  text.innerText = school.value;
});
