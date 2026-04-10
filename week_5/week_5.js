const workshopName = "Taller de Desarrollo Frontend con React"; 
const workshopStatus = "open"; 
const workshopCapacity = 25; 
const workshopCategory = "programming"; 
const workshopInstructor = { 
  name: "Marta Gómez", 
  details: { 
    experience: "10 años", 
    rating: 4.8 
  } 
}; 

const alternativeName = null;
const optionalInfo = null;

let classification; 
if (workshopCapacity >= 30) { 
  classification = "Gran Escala (Masivo)"; 
} else if (workshopCapacity >= 15) { 
  classification = "Escala Media (Grupal)"; 
} else { 
  classification = "Escala Pequeña (Personalizado)"; 
} 

const statusLabel = workshopStatus === "open" ? "Disponible para inscripción" : "Inscripciones cerradas"; 

let categoryLabel;
switch (workshopCategory) { 
  case "programming": 
    categoryLabel = "Desarrollo y Tecnología"; 
    break; 
  case "design": 
    categoryLabel = "Diseño y Creatividad"; 
    break; 
  case "business": 
    categoryLabel = "Negocios y Emprendimiento"; 
    break; 
  default: 
    categoryLabel = "Categoría General"; 
} 

const displayName = alternativeName ?? workshopName; 
const instructorBio = optionalInfo?.bio ?? "Biografía no disponible"; 

const instructorRating = workshopInstructor?.details?.rating ?? "Sin calificación"; 

console.log("=".repeat(45)); 
console.log("      FICHA DEL TALLER - E-LEARNING"); 
console.log("=".repeat(45)); 
console.log(`Nombre del Taller:  ${displayName}`); 
console.log(`Instructor(a):      ${workshopInstructor.name}`); 
console.log(`Calificación:       ${instructorRating}`); 
console.log(`Estado actual:      ${statusLabel}`); 
console.log(`Capacidad:          ${workshopCapacity} personas`); 
console.log(`Clasificación:      ${classification}`); 
console.log(`Categoría:          ${categoryLabel}`); 
console.log(`Detalle adicional:  ${instructorBio}`); 
console.log("=".repeat(45)); 
