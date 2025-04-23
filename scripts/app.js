// Generar lista de navegación dinámica
const navItems = [
    { text: "Experiencia Laboral", href: "components/experiencia.html" },
    { text: "Contacto Personal y Familiar", href: "components/contacto.html" }
];

const navList = document.getElementById("dynamic-nav");

navItems.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.href;
    listItem.appendChild(link);
    navList.appendChild(listItem);
});