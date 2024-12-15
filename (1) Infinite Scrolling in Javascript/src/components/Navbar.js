export function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.className = "navbar";
  navbar.innerHTML = `
    <div class="nav-brand">Home</div>
  `;
  return navbar;
}
