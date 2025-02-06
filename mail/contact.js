$(function () {

    $("#quoteForm input, #quoteForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Errores de validación manejados aquí (opcional)
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Previene el envío normal

            // Recoger datos del formulario
            var name = $("input#name").val();
            var company = $("input#company").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var observations = $("textarea#observationsTextarea").val();

            // Recoger valores de los checkboxes
            var materials = [];
            $("input[type=checkbox]:checked").each(function () {
                materials.push($(this).val());
            });

            // Deshabilitar el botón de envío
            var $this = $("#sendQuoteButton");
            $this.prop("disabled", true);

            // Enviar datos mediante AJAX
            $.ajax({
                url: "quote.php", // Archivo en el servidor que manejará la solicitud
                type: "POST",
                data: {
                    name: name,
                    company: company,
                    email: email,
                    phone: phone,
                    materials: materials.join(", "), // Convertir el array a string
                    observations: observations
                },
                cache: false,
                success: function () {
                    // Mostrar mensaje de éxito
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-success').append("<strong>Your quote request has been sent. </strong>");
                    $('#success > .alert-success').append('</div>');

                    // Limpiar formulario
                    $('#quoteForm').trigger("reset");
                },
                error: function () {
                    // Mostrar mensaje de error
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');

                    // Limpiar formulario
                    $('#quoteForm').trigger("reset");
                },
                complete: function () {
                    // Habilitar botón de nuevo después de 1 segundo
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    // Limpiar el mensaje de éxito/error al enfocar el campo de nombre
    $('#name').focus(function () {
        $('#success').html('');
    });
});
