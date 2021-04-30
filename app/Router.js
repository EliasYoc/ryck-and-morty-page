import { ajax } from "./helpers/ajax.js";
import { CartoonCard } from "./components/CartoonCard.js";
import { Aside } from "./components/Aside.js";
import { CharacterCard } from "./components/CharacterCard.js";
import { ReturnPage } from "./components/ReturnPage.js";
import { EpisodeCard } from "./components/EpisodeCard.js";

export async function Router(props) {
  const { characters, locations, episodes } = props;
  const personaje = JSON.parse(localStorage.getItem("personaje"));
  // console.log(personaje);
  const d = document,
    $main = d.getElementById("main"),
    $header = d.getElementById("header"),
    $root = d.getElementById("root"),
    $loader = d.querySelector(".loader");
  const { hash } = location;
  if (!hash || hash === "#/") {
    $main.insertAdjacentElement("afterend", Aside());
    const $aside = d.getElementById("aside");
    $aside.innerHTML = "<h3>Episodios</h3>";
    await ajax({
      url: characters,
      cbSuccess: (json) => {
        let html = "";
        json.results.forEach((el) => {
          html += CartoonCard(el);
        });
        $main.innerHTML = html;
        $loader.style.display = "none";
      },
    });
    await ajax({
      url: episodes,
      cbSuccess: (json) => {
        // console.log(new Date(json.results[0].air_date).toLocaleDateString());
        let html = "";
        json.results.forEach((el) => {
          html += EpisodeCard(el);
        });
        const $aside = d.getElementById("aside");

        $aside.innerHTML += html;
      },
    });
  } else if (hash === `#/${personaje.name}`) {
    $loader.style.gridColumn = "1/4";

    $header.insertAdjacentElement("afterbegin", ReturnPage("#/"));

    $main.style.gridColumn = "1/7";
    await ajax({
      url: personaje.url,
      cbSuccess: (json) => {
        $main.style.display = "flex";
        $main.style.justifyContent = "center";
        $main.innerHTML = CharacterCard(json);
        $loader.style.display = "none";
      },
    });
  } else {
    $root.innerHTML = `<h3 class="error">Error: Ops! No existe esta ruta </h3>`;
    // document.querySelector(".loader").style.display = "none";
  }
}
