

$(document).ready(function(){



	$('#services .btn-group li').each( function(){
		$(this).on('click', function(){
			change_panels( $(this).index() );
		});
	});
});

function change_panels(new_index){
	var arrow_positions = [ 20, 110, 205 ];
	var new_top = arrow_positions[new_index] + 'px';

	$('.arrow-left').animate({marginTop:new_top}, 500);
	$('.nav-tabs li:nth-child('+(new_index+1)+')').tab('show');
	$('.btn-group li').removeClass('active');
	$('.btn-group li:nth-child('+(new_index+1)+')').addClass('active');
}

