//$(document).ready(function(){
function getAllFacility2(){

	// /alert('about getting facility');

	var url="http://paago.eventcalender.develop.cinfores.com/includes/api.php?Action=getFacility&ownerid=horlikins";

	$("#facilityDiv2").html("");

	$.getJSON(url, function(data){
		console.log(data);
		$.each(data.resp, function(i,resp){


			var newRow = '<div class="room-box clearfix">';

			newRow +='<div class="img-container col-xs-6">';
			newRow +='<img src="http://paago.eventcalender.develop.cinfores.com/uploads/'+resp.image1 + '" alt="1">';
			newRow +='<a href="#/facilities" class="btn btn-default">More Details</a>';
			newRow +='</div>';
			newRow +='<div class="details col-xs-6">';
			newRow +='<div class="title"><a href="#">'+resp.facility + ' <span></span></a></div>';
			newRow +='<div class="">';
			newRow += resp.fdesc;
			newRow +='</div>';
			newRow +='<a href="#/facilities" class="book-now-btn btn btn-default btn-sm book-btn">Book Now</a>';
			newRow +='<div class="price">';
			newRow +='<span> &#8358; '+resp.costdays+'</span> only';
			newRow +='</div></div></div>';




			$(newRow).appendTo("#facilityDiv2");

			/*"<tr>"

				+"<td>"+user.id+"</td>"

				+"<td>"+user.name+"</td>"

				+"<td>"+user.age+"</td>"

				+"<td>"+user.gender+"</td>"

				+"<td>"+user.location+"</td>"

				+"</tr>" ;

			$(newRow).appendTo("#jsondata tbody");*/

		});
	});

}

//});
