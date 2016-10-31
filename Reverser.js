var reply = "";
$(document).ready(function() {
	//Ajax post http request to code2040 
	$.ajax({
		url: "http://challenge.code2040.org/api/reverse",
		type: "POST",
		data: {"token": "c8ec6d794bd7d33b7d19f33adf5f6744"},
		dataType: "json"
		
	})
	//Function that executes after connection is established
	.done(function(data){
		$.each(data, function(key, value) {
			reply = value;
			$("#reply").append(key);
			$("#reply").append(" ");
			$("#reply").append(value);
			$("#reply").append("<br>");
		}) 
		
		//function that reverses string
		var reverse = function(s) {
			var temp = "";
			for (var i = s.length - 1; i >= 0; i--)
				temp += s[i];
			return temp;
		}
		
		//New JSON data to be validated		
		var newString = {
			"token": "c8ec6d794bd7d33b7d19f33adf5f6744",
			"string": reverse(reply)
		};
		
		$.ajax({
			url:"http://challenge.code2040.org/api/reverse/validate",
			dataType:"json",
			data:newString, 
			type: "POST",
		})
		.done(function(data){
			$.each(data, function(key, value) {
				console.log(value);
				$("#reply").append(key);
				$("#reply").append(" ");
				$("#reply").append(value);
				$("#reply").append("<br>");
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
			url:"http://challenge.code2040.org/api/reverse/validate",
			dataType:"json",
			data:newString, 
			type: "POST",
		})
		.done(function(data){
			$.each(data, function(key, value) {
				console.log(value);
				$("#reply").append(key);
				$("#reply").append(" ");
				$("#reply").append(value);
				$("#reply").append("<br>");
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
		})
			
		
	})
})

