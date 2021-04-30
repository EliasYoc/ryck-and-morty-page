export function CartoonCard(props) {
  const { image, name, status, url } = props;
  const statusEsp =
    status === "Alive" ? "Vivo" : status === "Dead" ? "Muerto" : "Desconocido";

  return `
  <a href="#/${name
    .toLowerCase()
    .replace(
      / /g,
      ""
    )}" class="rotate" id ="link-url" data-name="${name
    .toLowerCase()
    .replace(/ /g, "")}" data-url="${url}">
    <article class="cartoon-card" >
      <div class="container-image">
          <img loading="lazy" src="${image}" alt="${name}">
      </div>
      <div class="container-info">
          <p class="name">${name}</p>
          <div class="information">
          <p><span class="${status.toLowerCase()}"></span> ${statusEsp}</p>
          </div>
      </div>
      <div class="container-about">
      
      </div>
    </article>
  </a>
 
  `;
}
