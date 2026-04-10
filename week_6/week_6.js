const workshops = [ 
  { name: "React Avanzado: Hooks y Context", category: "Programación", value: 12 },
  { name: "Figma UI/UX: Prototipado Rápido", category: "Diseño", value: 8 },
  { name: "SEO y SEM para E-commerce", category: "Marketing", value: 6 },
  { name: "Node.js: Backend con Express", category: "Programación", value: 10 },
  { name: "Finanzas para Emprendedores Digitales", category: "Negocios", value: 5 },
  { name: "Copywriting y Redacción Persuasiva", category: "Marketing", value: 7 }
]; 

const categories = ["Programación", "Diseño", "Marketing", "Negocios"]; 

const valueLabel = "duración (horas)";

console.log("=== LISTADO COMPLETO DE TALLERES ==="); 

let lineNumber = 0; 

for (const workshop of workshops) { 
  lineNumber++; 
  console.log(`${lineNumber}. ${workshop.name} — ${workshop.category} — ${valueLabel}: ${workshop.value}`); 
} 

console.log(""); 

console.log("=== CONTEO POR CATEGORÍA ==="); 

for (const category of categories) { 
  let count = 0; 

  for (const workshop of workshops) { 
    if (workshop.category === category) {
      count++; 
    }
  } 

  console.log(`${category}: ${count} taller(es)`); 
} 

console.log(""); 

console.log("=== ESTADÍSTICAS ==="); 

let totalHours = 0; 

for (const workshop of workshops) { 
  totalHours += workshop.value; 
} 

const averageHours = workshops.length > 0 ? totalHours / workshops.length : 0; 

console.log(`Total ${valueLabel}: ${totalHours} horas`); 
console.log(`Promedio ${valueLabel}: ${averageHours.toFixed(1)} horas`); 

console.log(""); 

console.log("=== MÁXIMO Y MÍNIMO ==="); 

let maxWorkshop = workshops[0] ?? null; 
let minWorkshop = workshops[0] ?? null; 

if (workshops.length > 0) { 
  for (const workshop of workshops) { 
    if (workshop.value > maxWorkshop.value) {
      maxWorkshop = workshop;
    }
    if (workshop.value < minWorkshop.value) {
      minWorkshop = workshop;
    }
  } 

  console.log(`Taller más largo: ${maxWorkshop?.name} (${maxWorkshop?.value} horas)`); 
  console.log(`Taller más corto: ${minWorkshop?.name} (${minWorkshop?.value} horas)`); 
} 

console.log(""); 

console.log("=== REPORTE DETALLADO ==="); 

for (let i = 0; i < workshops.length; i++) { 
  const workshop = workshops[i]; 

  const comparison = workshop.value >= averageHours ? "sobre el promedio" : "bajo el promedio"; 

  console.log(`${i + 1}. ${workshop.name} — ${comparison}`); 
} 

console.log(""); 
console.log("=== FIN DEL REPORTE ==="); 
