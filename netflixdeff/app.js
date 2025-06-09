function hexToRgb(hex) {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function mixWithBlack(color, ratio) {
  const rgb = hexToRgb(color);
  const r = Math.round(rgb.r * (1 - ratio));
  const g = Math.round(rgb.g * (1 - ratio));
  const b = Math.round(rgb.b * (1 - ratio));
  return `rgb(${r}, ${g}, ${b})`;
}

// Lista de imágenes con su color base
const portadas = [
  { imagen: "img1.jpg", color: "#00FF00" },
  { imagen: "img2.jpg", color: "#0F2B3B" },
  { imagen: "img3.jpg", color: "#1A1A1A" }
];

const seleccionada = portadas[Math.floor(Math.random() * portadas.length)];
const portada = document.getElementById("portada");
portada.src = seleccionada.imagen;

document.body.style.backgroundColor = seleccionada.color;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const percentage = Math.min(scrollY / maxScroll, 1);

  const colorOscuro = mixWithBlack(seleccionada.color, percentage);
  document.body.style.backgroundColor = colorOscuro;
});
