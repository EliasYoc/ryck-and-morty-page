import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./Router.js";

export async function App(props) {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  try {
    const res = await fetch("https://rickandmortyapi.com/api");
    // console.log(res);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const data = await res.json();
    // console.log(data);
    console.log(data);
    Router(data);
  } catch (err) {
    const $root = document.getElementById("root");
    $root.innerHTML = `<h3 class="error">Error ${err.status || "404"}: ${
      err.statusText || "Ocurrió un Error al conectar"
    } </h3>`;
  }
}
