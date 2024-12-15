import "./style.css";
import "./src/styles/navbar.css";
import "./src/styles/products.css";
import { createNavbar } from "./src/components/Navbar";
import { createProductCard } from "./src/components/ProductCard";
import { fetchProducts } from "./src/api/products";

// Initialize app
const app = document.querySelector("#app");
app.innerHTML = "";

// Add navbar
app.appendChild(createNavbar());

// Create products container
const productsContainer = document.createElement("div");
productsContainer.className = "products-container";
app.appendChild(productsContainer);

// State management
let currentPage = 0;
const productsPerPage = 10;
let loading = false;
let hasMore = true;

// Load initial products
loadProducts();

// Infinite scroll handler
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && hasMore) {
    loadProducts();
  }
});

async function loadProducts() {
  if (loading) return;

  loading = true;
  const skip = currentPage * productsPerPage;

  const data = await fetchProducts(skip, productsPerPage);

  data.products.forEach((product) => {
    productsContainer.appendChild(createProductCard(product));
  });

  hasMore = skip + productsPerPage < data.total;
  currentPage++;
  loading = false;
}

console.log("document:", document);
