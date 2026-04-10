const DOMAIN_NAME = "E-Learning Workshop Hub";
const VALUE_LABEL = "talleres";

const items = [
  { id: 1, name: "Introducción a React", category: "Programación", price: 49.99, active: true },
  { id: 2, name: "Diseño UI/UX con Figma", category: "Diseño", price: 35.00, active: true },
  { id: 3, name: "Marketing Digital 101", category: "Negocios", price: 25.50, active: false },
  { id: 4, name: "Node.js Avanzado", category: "Programación", price: 59.99, active: true },
  { id: 5, name: "Gestión de Proyectos Ágiles", category: "Negocios", price: 45.00, active: true }
];

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removedItem = items.pop();
  if (removedItem) {
    console.log(`Eliminado el último elemento: ${removedItem.name}`);
  }
  return removedItem;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removedItems = items.splice(index, 1);
  if (removedItems.length > 0) {
    console.log(`Eliminado el elemento en índice ${index}: ${removedItems[0].name}`);
  }
};

const getActiveItems = () => {
  return items.filter(item => item.active);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  const status = item.active ? "✅ Activo" : "❌ Inactivo";
  return `[ID: ${item.id}] ${item.name} | Categoría: ${item.category} | Precio: $${item.price} | Estado: ${status}`;
};

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

addItem({ id: 6, name: "Python para Data Science", category: "Data Science", price: 55.00, active: true });
addPriorityItem({ id: 0, name: "Masterclass de IA", category: "Tecnología", price: 99.99, active: true });
removeByIndex(3);
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

const searchName = "Diseño UI/UX con Figma";
const foundItem = findByName(searchName);
if (foundItem) {
  console.log(`Taller encontrado: ${formatItem(foundItem)}`);
} else {
  console.log(`No se encontró el taller: ${searchName}`);
}

const activeItems = getActiveItems();
console.log(`Total de talleres activos: ${activeItems.length}`);

const snapshot = [...items, { id: 99, name: "Workshop de Soft Skills", category: "Crecimiento", price: 20.00, active: true }];
console.log(`Snapshot incluye un taller extra: ${snapshot[snapshot.length - 1].name}`);
console.log(`Inventario original sigue teniendo ${items.length} talleres.`);

console.log("\n--- Transformación con map ---\n");

const workshopNames = items.map(item => item.name);
console.log("Nombres de los talleres:");
console.log(workshopNames.join(", "));

const discountedPrices = items.map(item => ({
  name: item.name,
  originalPrice: item.price,
  discountPrice: Number((item.price * 0.8).toFixed(2))
}));
console.log("Precios con 20% de descuento:");
discountedPrices.forEach(item => {
  console.log(`  - ${item.name}: $${item.originalPrice} -> $${item.discountPrice}`);
});

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
