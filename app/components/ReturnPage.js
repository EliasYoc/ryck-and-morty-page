export function ReturnPage(hash) {
  const $a = document.createElement("a");
  $a.href = hash;
  $a.classList.add("return");
  $a.innerHTML = "&#10094;";
  return $a;
}
