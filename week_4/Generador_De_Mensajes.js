//GENERADOR DE MENSAJES DE DOMINIO

// la declaracion de datos con string
const nombreEntidadRaw = "    tAllEreS y wOrksHops de prOgRamAciÓn    ";
const categoriaRaw = "   categoria          E-Learning   ";
const descripcionLarga = "Este es un taller intensivo de JavaScript diseñado para llevarte de nivel principiante a experto en solo 4 semanas.";
const codigoIdentificador = "WS-JS-2024-01";

// lso 5 usos de "STRING"

// Método 1: trim()
const nombreEntidadTrimmed = nombreEntidadRaw.trim();
const categoriaTrimmed = categoriaRaw.trim();

// Método 2: toUpperCase() / toLowerCase()
const nombreEntidadFormateado = nombreEntidadTrimmed.toUpperCase();
const categoriaLowerCase = categoriaTrimmed.toLowerCase();

// Método 3: slice() o split()
const resumenDescripcion = descripcionLarga.slice(0, 50); // Primeros 50 caracteres

// Método 4: replace() o replaceAll()
const categoriaLimpia = categoriaTrimmed.replace(/\s+/g, ' '); 

// Método 5: repeat() o includes() / startsWith() / endsWith()
const separador = "=".repeat(45);

//VALIDACIONES
const esCodigoValido = codigoIdentificador.startsWith("WS-");
const contieneJS = descripcionLarga.toLowerCase().includes("javascript");

// CONSTRUCCIÓN DE SALIDA CON TEMPLATE LITERALS

// Ficha multilínea
const fichaTaller = `
${separador}
   ${nombreEntidadFormateado} — FICHA DE TALLER
${separador}
Taller:      ${nombreEntidadTrimmed}
Categoría:   ${categoriaLimpia}
Código:      ${codigoIdentificador}
Descripción: ${resumenDescripcion}...
Disponible:  Sí
${separador}

--- Validaciones ---
¿El código empieza con WS-? : ${esCodigoValido}
¿La descripción contiene 'JavaScript'? : ${contieneJS}
`;

// Notificación
const mensajeNotificacion = `📢 Nuevo taller disponible: ${nombreEntidadTrimmed} (${codigoIdentificador})`;

// Mensaje de consola
console.log(fichaTaller);
console.log(mensajeNotificacion);
console.log(`${separador}`);
