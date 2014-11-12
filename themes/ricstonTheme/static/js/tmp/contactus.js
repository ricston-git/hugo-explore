(function($, url) {
    $(function() {
        var $form = $('#miniMessage form')
        $form.submit(function(event) {
            event.preventDefault(); 
            var postData = {
                name: $('#InputName').val(),
                email: $('#InputEmail').val(),
                message: $('#InputMessage').val()
            };
            $.ajax({
                type: 'POST',
                url: '/contactus',
                contentType: 'application/json',
                data: JSON.stringify(postData),
                success: function(serverData, status) {
                    swal("Thank you for contacting us " + postData.name + "!", "We will get back to you ASAP");
                }
            });

        });

        // Alt:
        // var formData = {
		// 	'name' 				: $('input[name=name]').val(),
		// 	'email' 			: $('input[name=email]').val(),
		// 	'superheroAlias' 	: $('input[name=superheroAlias]').val()
		// };
        
    });
})(jQuery, location);
