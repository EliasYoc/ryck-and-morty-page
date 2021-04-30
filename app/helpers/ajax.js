export async function ajax(props) {
  try {
    const { url, cbSuccess } = props;
    const res = await fetch(`${url}`);
    const json = await res.json();
    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
      };
    cbSuccess(json);
  } catch (err) {
    console.log(err);
    const $main = document.getElementById("main");
    $main.style.gridColumn = "1/4";
    $main.innerHTML = `<h3 class="error">Error ${err.status || "404"}: ${
      err.statusText || "Error al accesar a la API"
    } </h3>`;
    document.querySelector(".loader").style.display = "none";
  }
}
