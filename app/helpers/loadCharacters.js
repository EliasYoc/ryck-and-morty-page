import { PrevNext } from "../components/PrevNext.js";
import { CartoonCard } from "../components/CartoonCard.js";
import { ajax } from "./ajax.js";

export async function loadCharacter(url) {
  const d = document,
    $main = d.getElementById("main"),
    $loader = d.querySelector(".loader");

  await ajax({
    url: url,
    cbSuccess: (json) => {
      let html = "";
      json.results.forEach((el) => {
        html += CartoonCard(el);
      });
      // console.log(json.info);
      $main.innerHTML = PrevNext(json.info);

      $main.innerHTML += html;
      $loader.style.display = "none";
    },
  });
}
