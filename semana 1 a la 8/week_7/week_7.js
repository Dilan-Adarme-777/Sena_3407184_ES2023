"use strict";

const DOMAIN_NAME = "E-Learning Workshop Hub"; 
const VALUE_LABEL = "Costo de Inscripción"; 
const TAX_RATE = 0.19;
const CURRENCY = "USD";

const workshops = [ 
  { id: 1, name: "Introducción a React", category: "Programación", price: 49.99, instructor: "Ana García", isActive: true, spots: 15 },
  { id: 2, name: "Diseño UI/UX con Figma", category: "Diseño", price: 35.00, instructor: "Carlos Ruiz", isActive: true, spots: 0 },
  { id: 3, name: "Marketing Digital 101", category: "Negocios", price: 25.50, instructor: "Sofía López", isActive: false, spots: 10 },
  { id: 4, name: "Node.js Avanzado", category: "Programación", price: 59.99, instructor: "Marcos Pérez", isActive: true, spots: 8 },
  { id: 5, name: "Gestión de Proyectos Ágiles", category: "Negocios", price: 45.00, instructor: "Laura Torres", isActive: true, spots: 5 }
]; 

const formatWorkshop = (workshop) => 
  `🎓 Workshop: ${workshop.name} [${workshop.category}] — Instructor: ${workshop.instructor} — $${workshop.price}`;

const calculateTotalWithTax = (price, tax = TAX_RATE) => { 
  const total = price * (1 + tax);
  return Number(total.toFixed(2));
}; 

const isAvailable = (workshop) => { 
  return workshop.isActive === true && workshop.spots > 0; 
}; 

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => { 
  return `${label}: ${currency} ${value}`; 
}; 

console.log(`\n${"═".repeat(55)}`); 
console.log(`   REPORTE — ${DOMAIN_NAME}`); 
console.log(`${"═".repeat(55)}`); 

if (workshops.length === 0) { 
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1."); 
} else { 
  console.log("\n📋 Catálogo de Talleres:"); 
  let lineNumber = 1; 
  for (const workshop of workshops) { 
    console.log(`  ${lineNumber}. ${formatWorkshop(workshop)}`); 
    lineNumber++; 
  } 

  let availableCount = 0; 
  console.log("\n🔍 Estado de Disponibilidad:");
  for (const workshop of workshops) { 
    const status = isAvailable(workshop) ? "✅ DISPONIBLE" : "❌ NO DISPONIBLE";
    console.log(`   - ${workshop.name}: ${status}`);
    if (isAvailable(workshop)) { 
      availableCount++; 
    } 
  } 
  console.log(`\n📊 Resumen: ${availableCount} de ${workshops.length} talleres listos para inscripción.`); 

  let subtotal = 0; 
  let totalConImpuestos = 0;
  
  for (const workshop of workshops) { 
    if (isAvailable(workshop)) {
      subtotal += workshop.price; 
      totalConImpuestos += calculateTotalWithTax(workshop.price);
    }
  } 

  console.log(`\n💰 Proyección de ingresos (solo disponibles):`);
  console.log(`   Subtotal: ${CURRENCY} ${subtotal.toFixed(2)}`);
  console.log(`   ${formatWithDefault(totalConImpuestos.toFixed(2), "Total con IVA (" + (TAX_RATE * 100) + "%)")}`); 
} 

console.log(`\n${"═".repeat(55)}\n`); 
