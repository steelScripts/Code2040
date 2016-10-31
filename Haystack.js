var index = 0;
var needle = "";
var arr;
$(document).ready(function() {
	//Ajax post http request to code2040 
	$.ajax({
		url: "http://challenge.code2040.org/api/haystack",
		type: "POST",
		data: {"token": "c8ec6d794bd7d33b7d19f33adf5f6744"},
		dataType: "json"
		
	})
	//Function that executes after connection is established
	.done(function(data){		
		var temp = 0;
		arr = data;
		$("#reply").append(arr);
		/*Loops through the data to assign the data tied to keys
		to local varibles*/
		$.each(arr, function(key, value) {			
			if(key == "needle") {
				needle = value.needle;
			}
			arr = value.haystack;
			//counts each entry in the array up util the index of the need is found
			for(value.haystack in arr) {
				if(needle != value) {
					$("#reply").append(value.string);
					$("#reply").append("<br>");
					temp++
				}
				else 
					index = temp;
			}
		})
		
		//New JSON data to be validated
		needle = {
			"token": "c8ec6d794bd7d33b7d19f33adf5f6744",
			"needle": index
		};
		
		$.ajax({
			url:"http://challenge.code2040.org/api/haystack/validate",
			dataType:"json",
			data:needle, 
			type: "POST",
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
			$("#reply").append(reply);
			$("#reply").append("<br>");		
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
		/*
		var temp = 0;
		jqxhr.response.each(Haystack, function(key, value) {			
			if(value != "needle") {
				temp++;
				$("#reply").append(value);
				$("#reply").append("<br>");
			}
			else 
				index = temp;
		})
		*/
		
		
		$.ajax({
			url:"http://challenge.code2040.org/api/haystack/validate",
			dataType:"json",
			data:needle, 
			type: "POST",
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

