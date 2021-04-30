export function CharacterCard({
  name: charName,
  gender,
  image,
  status,
  species,
  location: { name },
  origin,
  type,
}) {
  return `
    <article class="character">
      <div class="container-img">
        <img src="${image}" alt="">
        <p class="${status.toLowerCase()}">Name: ${charName}</p>
      </div>
      <div class="container-info">
        <p>Specie: ${gender} ${species}</p>
        <p>Origin: ${origin.name}</p>
        <p>Type: ${type || "none"}</p>
      </div>
    </article>
  `;
}
