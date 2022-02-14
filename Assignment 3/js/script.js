
//Method 1
/*$(document).ready(function(){
	let getJsonObject= $.getJSON("team.json", function(data) {
		//console.log("Data from getJson", data);
		
		let item = '';
		$.each(data.members, function(key, val){
			item += '<h2>'+ val.name + '</h2>';
			item += '<h5>' + val.position + '</h5>';
			item += '<p>' + val.bio + '</p>';	
		});
		$('div#team').html(item);
	});
});*/

//Method 2

$(document).ready(function () {
	$.ajax({
		url: 'team.json',
		type: 'GET',
		dataType:'json',
		async:false,

		beforeSend:function(){
			$('div#team').append('<p>Loading......</p>');
		},

		timeout:5000,
		error: function(err, exception){
			if(err.status === 5000){
				alert("Error");
			}
		},

		success:(function(data){
			$('div#team').html('');
			$.each(data.members, function(key, val){

				$('div#team').append(`<h2>${val.name}</h2>
									   <h5>${val.position}</h5>
									   <p>${val.bio}</p>`);
				$('.load').hide();
			});
		})
	})
	
});


