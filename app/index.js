import { App } from "./App.js";
import { loadCharacter } from "./helpers/loadCharacters.js";
const d = document;
d.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
d.addEventListener("click", (e) => {
  if (e.target.matches(".link")) {
    const $loader = d.querySelector(".loader");
    $loader.style.display = "block";
    if (e.target.dataset.link === "null") return;
    loadCharacter(e.target.dataset.link);
    return;
  }
  if (e.target.matches(".switch") || e.target.matches(".switch *")) {
    d.body.classList.toggle("dark");
    d.body.classList.toggle("light");
    const theme = d.body.classList;
    localStorage.setItem("temaR&M", theme[0]);
    return;
  }
  e.path.forEach((el) => {
    // console.warn(el.id);
    if (el.id === "link-url") {
      // console.log(el.dataset.url);
      localStorage.setItem(
        "personaje",
        JSON.stringify({
          url: el.dataset.url,
          name: el.dataset.name,
        })
      );
    }
  });
});
const defaultTheme = localStorage.getItem("temaR&M");
// console.log(defaultTheme);
if (!defaultTheme) d.body.classList.add("light");
else d.body.classList.add(defaultTheme);
