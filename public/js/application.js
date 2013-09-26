$(document).ready(function(){
	$( "#get_color" ).click(function() {
  		$.post( "/color", function( data ) {
 			var obj = $.parseJSON(data);
  			$('#color_me li:nth-child('+obj.cell+')').css('background-color',obj.color);


  			// $( ".result" ).html( data );
		});
	});
});