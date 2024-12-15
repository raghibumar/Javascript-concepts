export async function fetchProducts(skip = 0, limit = 10) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 };
  }
}
