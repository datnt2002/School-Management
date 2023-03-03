export function getAPI(apiUrl) {
  fetch(apiUrl, {})
    .then((response) => response.json())

    .catch((err) => console.log(err));
}
