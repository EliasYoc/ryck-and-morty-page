export function Header() {
  const $header = document.createElement("header");
  $header.id = "header";
  $header.innerHTML = `<h2> <a href="#/">Rick & Morty</a> </h2> <div class="switch"><div class="toggle"></div></div>`;

  return $header;
}
