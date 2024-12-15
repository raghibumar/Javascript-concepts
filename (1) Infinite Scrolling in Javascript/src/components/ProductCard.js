// export function createProductCard(product) {
//   const card = document.createElement("div");
//   card.className = "product-card";
//   card.innerHTML = `
//     <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
//     <div class="product-info">
//       <h3>${product.title}</h3>
//       <p class="price">$${product.price}</p>
//       <p class="description">${product.description}</p>
//       <div class="rating">Rating: ${product.rating}⭐</div>
//     </div>
//   `;
//   return card;
// }

export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-container");

  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = product.thumbnail;
  image.alt = product.title;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-container");

  const title = document.createElement("h3");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = `$${product.price}`;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = product.description;

  const rating = document.createElement("div");
  rating.classList.add("rating");
  rating.textContent = `Rating: ${product.rating}⭐`;

  imageDiv.appendChild(image);
  infoDiv.appendChild(title);
  infoDiv.appendChild(price);
  infoDiv.appendChild(description);
  infoDiv.appendChild(rating);

  card.appendChild(imageDiv);
  card.appendChild(infoDiv);

  return card;
}
