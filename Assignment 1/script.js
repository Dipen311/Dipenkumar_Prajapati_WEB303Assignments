/*
	WEB 303 Assignment 1 - jQuery
	Dipenkumar Prajapati 
*/

$(document ).ready(function() {
	
	let salary = $('#yearly-salary');
	let percent = $('#percent');
	$('#yearly-salary').keyup(function(){
		
		calculate();

	});
	$('#percent').keyup(function(){
		calculate();

	});

	function calculate(){
		let cal = $('#yearly-salary').val() * $('#percent').val()  /100;
		let print = cal.toFixed(2);
		$('#amount').text('$'+print);
	
	}
});