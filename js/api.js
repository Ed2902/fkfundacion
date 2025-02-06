/* // Lista de códigos de países de Latinoamérica
const latinAmericanCountries = [
    "AR", "BO", "BR", "CL", "CO", "CR", "CU", "DO", "EC", "SV",
    "GT", "HN", "MX", "NI", "PA", "PY", "PE", "PR", "UY", "VE"
];

// Función para obtener información de la IP usando ipinfo.io
async function checkIPAndRedirect() {
    const token = '829dcf184aa253';  // Tu token de ipinfo.io
    const url = `https://ipinfo.io?token=${token}`; // Solicita la IP pública del usuario

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();  // Convierte la respuesta a JSON
        const countryCode = data.country;    // Obtiene el código de país

        console.log(`IP detectada: ${data.ip}, País: ${countryCode}`);
        
        // Verificar si el país está en la lista de países de Latinoamérica
        if (latinAmericanCountries.includes(countryCode)) {
            // Si la IP es de Latinoamérica, redirige a otra página
            window.location.href = "/homeharves.html";  // Cambia "/acceso-restringido" a la URL deseada
        } else {
            // Si no es de Latinoamérica, continúa mostrando la página normalmente
            console.log("Usuario permitido, no es de Latinoamérica.");
        }
    } catch (error) {
        console.error('Error al obtener la información de la IP:', error);
    }
}

checkIPAndRedirect();
 */