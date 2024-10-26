let container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    data.slice(0, 10).forEach(photo => {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      img.src = photo.url;
      let title = document.createElement("p");
      title.textContent = photo.title;
      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
    });
  })
  /* .catch((err) => {
    console.log(err);
    let p = document.createElement("p");
    container.appendChild(p);
    p.textContent = "Errore!!!";
  }); */