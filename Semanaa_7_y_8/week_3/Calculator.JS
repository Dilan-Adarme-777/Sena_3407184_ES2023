// PROYECTO SEMANA 03: CALCULADORA DE DOMINIO
// DOMINIO: PLATAFORMA DE TALLERES Y WORKSHOPS E-LEARNING

// Aca uso las variables iniciales, usando el numeric separators para mejorar la legibilidad. (Define los valores base del negocio)
let precioTallerBase = 45_000;
let cantidadParticipantes = 120;
let capacidadMaxima = 150;
let cuponDescuentoEspecial = 5_000;
let esPremium = true;
let categoriaTaller = "Programación";

// Aca comenzamos a usar las "OPERACIONES ARITMÉTICAS": (+, -, *, /, %) (Calcula totales y promedios financieros)
let ingresoBruto = precioTallerBase * cantidadParticipantes;
let ingresoNeto = ingresoBruto - (cantidadParticipantes * cuponDescuentoEspecial);
let promedioIngreso = ingresoNeto / cantidadParticipantes;
let aforoDisponible = capacidadMaxima - cantidadParticipantes; 
let participantesSobrantes = cantidadParticipantes % 10;

// OPERADORES DE ASIGNACIÓN COMPUESTA (+=, -=, *=, /=) (Actualiza variables de forma abreviada y eficiente)
cantidadParticipantes += 5;
ingresoBruto = precioTallerBase * cantidadParticipantes;
aforoDisponible -= 5; 

// COMPARACIÓN ESTRICTA (===, !==, >=, <=, >, <) (Evalúa condiciones de negocio con precisión total)
let estaLleno = cantidadParticipantes === capacidadMaxima;
let esDeDiseno = categoriaTaller === "Diseño";
let hayCupoParaDiez = aforoDisponible >= 10; 

// Operadores logicos (&&, ||, !) (Combina múltiples criterios para decisiones complejas)
let aplicaDescuentoMasivo = esPremium && cantidadParticipantes > 100;
let mostrarAlertaCupos = estaLleno || aforoDisponible < 10; 
let noEsGratis = !(precioTallerBase === 0);

// Resultados de la consola (resultado) (Muestra la información procesada al usuario final)
console.log("--- RESULTADOS DE LA PLATAFORMA E-LEARNING ---");
console.log("Ingreso Bruto Total: $" + ingresoBruto + " CLP");
console.log("Ingreso Neto (con cupones): $" + ingresoNeto + " CLP");
console.log("Promedio de Ingreso por Alumno: $" + promedioIngreso.toFixed(2));
console.log("Participantes actuales: " + cantidadParticipantes);
console.log("Aforo restante: " + aforoDisponible);
console.log("Alumnos que no completan un grupo de 10: " + participantesSobrantes);

console.log("\n--- VALIDACIONES DE NEGOCIO ---");
console.log("¿El taller está lleno?: " + estaLleno);
console.log("¿Se aplica descuento masivo (Premium y >100 alumnos)?: " + aplicaDescuentoMasivo);
console.log("¿Mostrar alerta de pocos cupos?: " + mostrarAlertaCupos);
console.log("¿Es un taller con costo?: " + noEsGratis);
console.log("¿Categoría es Diseño?: " + esDeDiseno);
console.log("¿Hay espacio para un nuevo grupo de 10?: " + hayCupoParaDiez);
