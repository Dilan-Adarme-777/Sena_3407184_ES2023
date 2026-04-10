const DOMAIN_NAME = "Plataforma E-Learning de Talleres";
const VALUE_LABEL = "talleres";

const items = [
  { id: 1, name: "Introducción a React", price: 49.99, active: true, instructor: "Juan Pérez", duration: "10h" },
  { id: 2, name: "Node.js Avanzado", price: 75.50, active: true, duration: "15h" },
  { id: 3, name: "Diseño UX/UI", price: 60.00, active: false, instructor: "Maria Garcia", duration: "12h" },
  { id: 4, name: "Python para Data Science", price: 89.99, active: true, instructor: "Carlos Ruiz", duration: "20h" },
  { id: 5, name: "Marketing Digital", price: 35.00, active: true, duration: "8h" },
  { id: 6, name: "Ciberseguridad Básica", price: 55.25, active: false, instructor: "Ana Lopez", duration: "10h" }
];

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const allValues = items.map(item => item[numericKey]);
  const total = allValues.reduce((acc, curr) => acc + curr, 0);
  const promedio = total / allValues.length;
  const maximo = Math.max(...allValues);
  const minimo = Math.min(...allValues);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log(`- Total   : $${total.toFixed(2)}`);
  console.log(`- Promedio: $${promedio.toFixed(2)}`);
  console.log(`- Máximo  : $${maximo.toFixed(2)}`);
  console.log(`- Mínimo  : $${minimo.toFixed(2)}`);
};

const showWithOptionals = (item) => {
  console.log(`\n→ Taller: ${item.name} (ID: ${item.id})`);
  console.log(`  Precio: $${item.price} | Estado: ${item.active ? 'Activo' : 'Inactivo'}`);
  
  if (Object.hasOwn(item, "instructor")) {
    console.log(`  👨‍🏫 Instructor: ${item.instructor}`);
  } else {
    console.log(`  ⚠️ Instructor: No asignado aún.`);
  }
};

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`- ${key}: ${item[key]}`);
    }
  }
};

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

const getAvailable = () => {
  return items.filter(item => item.active);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({ 
    ...item, 
    priceWithTax: Number((item.price * 1.15).toFixed(2)) 
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total de ${VALUE_LABEL}: ${items.length}`);
  
  const activeCount = getAvailable().length;
  console.log(`Talleres activos: ${activeCount}`);

  calculateStats("price");

  console.log("\n📋 Listado de talleres (ordenados por precio):");
  const sortedItems = sortByNumericProp(true);
  sortedItems.forEach(item => {
    console.log(`- [${item.id}] ${item.name.padEnd(25)} | $${item.price.toFixed(2)} (${item.active ? 'ACTIVO' : 'INACTIVO'})`);
  });

  const prices = items.map(i => i.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  
  const mostExpensive = items.find(i => i.price === maxPrice);
  const cheapest = items.find(i => i.price === minPrice);

  console.log(`\n💎 Taller más costoso: ${mostExpensive.name} ($${mostExpensive.price})`);
  console.log(`🏷️ Taller más económico: ${cheapest.name} ($${cheapest.price})`);

  console.log("=".repeat(50));
};

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("price");

console.log("\n--- Verificación de propiedades opcionales ---");
items.forEach(showWithOptionals);

printAllProperties(items[0]);

console.log("\n🔄 Actualizando taller (Actualización inmutable):");
const workshopOriginal = items[1];
const workshopUpdated = updateItem(workshopOriginal, { price: 80.00, active: false });
console.log("Original  :", workshopOriginal);
console.log("Actualizado:", workshopUpdated);

console.log("\n✅ Talleres actualmente activos:");
getAvailable().forEach(i => console.log(`- ${i.name}`));

const found4 = findById(4);
const found99 = findById(99);
console.log(`\n🔍 Búsqueda ID 4: ${found4 ? found4.name : 'No encontrado'}`);
console.log(`🔍 Búsqueda ID 99: ${found99 ? found99.name : 'No encontrado'}`);

console.log("\n💰 Cálculo de precios con IVA (15%):");
const itemsWithTax = addCalculatedProp();
itemsWithTax.forEach(i => console.log(`- ${i.name}: $${i.price} -> con IVA: $${i.priceWithTax}`));

console.log("\n📉 Orden descendente por precio:");
sortByNumericProp(false).forEach(i => console.log(`- $${i.price.toFixed(2)}: ${i.name}`));

buildReport();
