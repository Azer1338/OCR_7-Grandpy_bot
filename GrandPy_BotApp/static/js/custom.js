// Reaching console log
console.log("Custom JQuery loaded");

// Event on click button
$('button').click(function () {
	// Catch the id
	var userRequest = document.getElementById("User_destination");
	
	console.log("User click on button");
	
	$.ajax({
		// Route destination in views.py
        url: '/result/',
        // Data to communicate
        data: {query : userRequest.value},
        // In case of succes - launch function
        success: function(data) {
            console.log(data);
            
			/*
			var usRequest = document.getElementById("GrandPyAnswer");
			usRequest.innerHTML = data;
			*/
			},
        error : function(resultat, statut, erreur){
			console.log("AJAX (Get) function turn crazy");
			}
        });
	
	});
