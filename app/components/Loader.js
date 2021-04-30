export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "app/assets/three-dots.svg";
  $loader.alt = "Cargando...";
  $loader.loading = "lazy";
  $loader.classList = "loader";
  return $loader;
}
