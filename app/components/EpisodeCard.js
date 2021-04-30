export function EpisodeCard({ air_date, episode, name, characters }) {
  return `
  <article class="episode-card">
    <span>${episode}</span>
    <div class="episode-info">
      <p class="title">${name} </p>
      <p>Emisión: ${new Date(air_date).toLocaleDateString()}</p>
      <p>N° Personajes: ${characters.length}</p>
    </div>
  </article>
  `;
}
