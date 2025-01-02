<?php
// Verificar si todos los campos requeridos están completos
if(empty($_POST['name']) || empty($_POST['company']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['materials']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

// Limpiar los datos del formulario
$name = strip_tags(htmlspecialchars($_POST['name']));
$company = strip_tags(htmlspecialchars($_POST['company']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$materials = strip_tags(htmlspecialchars($_POST['materials'])); // Esto ya es una lista concatenada
$observations = !empty($_POST['observations']) ? strip_tags(htmlspecialchars($_POST['observations'])) : 'No observations'; // Verificar si hay observaciones

// Destinatario del correo
$to = "tech@fastwaysas.com"; // Cambia este correo al tuyo

// Asunto del correo
$subject = "Quote Request from $name";

// Cuerpo del mensaje
$body = "You have received a new quote request from your website.\n\n".
        "Here are the details:\n\n".
        "Name: $name\n".
        "Company: $company\n".
        "Email: $email\n".
        "Phone: $phone\n".
        "Selected Materials: $materials\n".
        "Observations: $observations";

// Cabeceras del correo
$header = "From: $email\r\n";
$header .= "Reply-To: $email";	

// Enviar el correo
if(!mail($to, $subject, $body, $header)) {
  http_response_code(500); // Si hay un error al enviar
  exit();
}
?>
