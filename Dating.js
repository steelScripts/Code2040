var dating;
var finalDate;
$(document).ready(function() {
	//Ajax post http request to code2040 
	$.ajax({
		url: "http://challenge.code2040.org/api/dating",
		type: "POST",
		data: {"token": "c8ec6d794bd7d33b7d19f33adf5f6744"},
		dataType: "json"
		
	})
	//Function that executes after connection is established
	.done(function(data){		
		var temp = data,
			date,
			interval; 
		/*Loops through the data to assign the data tied to keys
		to local varibles*/
		$.each(temp, function(key, value) {
			if(key == "datestamp")
				date = new Date(value); 
				$("#startDate").append(date.toISOString());
				$("#startDate").append("<br>");
			if(key == "interval")
				interval = value;
		})
		
		//Displays all the significant data to the html page
		$("#startDate").append(date.toISOString());
		$("#seconds").append(date.getTime() / 1000);
		$("#seconds").append("<br>");
		$("#seconds").append("<br>");
		$("#startDate").append("<br>");
		$("#startDate").append("<br>");
		$("#interval").append(interval);
		$("#interval").append("<br>");
		$("#interval").append("<br>");
		
		
		var seconds = date.getTime();	//Converts the date recieved into miliseconds	
		seconds += (interval * 1000);	//Adds the interval (in miliseconds) to the date	
		finalDate = new Date(seconds);	//A new date obj made from the updated miliseconds
		
		//Formats the date to an ISO 8601 format
		var string = finalDate.toISOString();		
		string = string.slice(0, 19) + string.slice(23); //removes trailing zeros
		
		$("#finalDate").append(string);
		$("#finalDate").append("<br>");
		$("#finalDate").append("<br>");
		
		$("#finalSeconds").append(finalDate.getTime() / 1000);
		$("#finalSeconds").append("<br>");
		$("#finalSeconds").append("<br>");   
		
		var timeBetween = (finalDate.getTime() - date.getTime()) / 1000;
		
		
		$("#timeBetween").append(timeBetween);
		$("#timeBetween").append("<br>");
		$("#timeBetween").append("<br>");
		
		//New JSON data to be validated
		dating = {
			"token": "c8ec6d794bd7d33b7d19f33adf5f6744",
			"datestamp": string
		};
		
		//New Ajax request to send updated data
		$.ajax({
			url:"http://challenge.code2040.org/api/dating/validate",
			dataType:"json",
			data:dating, 
			type: "POST"
		})
		.done(function(data){
			reply = jqxhr.responseText;
			$("#reply").append("<br>");
			$("#reply").append(reply);
			$("#reply").append("<br>");		
			$("#reply").append(textStatus);
		})
		
		.fail(function(jqxhr, textStatus, errorThrown)  {
			if(jqxhr.status == 404) {
				$("#reply").append("page not found!");
			}
			reply = jqxhr.responseText;
			$("#reply").append(textStatus);
			$("#reply").append("<br>");	
			$("#reply").append("<br>");
			$("#reply").append(reply);
			$("#reply").append("<br>");
			$("#reply").append("<br>");		
			$("#validated").append("Error: ");
			$("#validated").append(errorThrown);
		})
	})
	.fail(function(jqxhr, textStatus, errorThrown)  {
		if(jqxhr.status == 404) {
			$("#reply").append("page not found!");
		}
		reply = jqxhr.responseText;
		$("#reply").append(reply);
		$("#reply").append("<br>");		
		$("#reply").append(textStatus);
		$("#validated").append(errorThrown);
		
		
		
		$.ajax({
			url:"http://challenge.code2040.org/api/dating/validate",
			dataType:"json",
			data:dating, 
			type: "POST"
		})
		.done(function(data){
			reply = jqxhr.responseText;
			$("#reply").append(reply);
			$("#reply").append("<br>");		
			$("#reply").append(textStatus);
		})
		
		.fail(function(jqxhr, textStatus, errorThrown)  {
			if(jqxhr.status == 404) {
				$("#reply").append("page not found!");
			}
			reply = jqxhr.responseText;
			$("#reply").append(reply);
			$("#reply").append("<br>");		
			$("#reply").append(textStatus);
			$("#validated").append(errorThrown);
		})
	})
})

