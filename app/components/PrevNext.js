export function PrevNext({ next, prev }) {
  let disabled, disabledNext;
  prev === null ? (disabled = "disabled") : (disabled = "");
  next === null ? (disabledNext = "disabled") : (disabledNext = "");

  return `
    <div class="links">
        <a class="link prev ${disabled}" data-link="${prev}" >prev</a><a class="link next ${disabledNext}" data-link="${next}">next</a>

    </div>
  `;
}
