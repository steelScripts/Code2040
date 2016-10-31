var index = 0;
var prefix = "";
var arr;
$(document).ready(function() {
	//Ajax post http request to code2040 
	$.ajax({
		url: "http://challenge.code2040.org/api/prefix",
		type: "POST",
		data: {"token": "c8ec6d794bd7d33b7d19f33adf5f6744"},
		dataType: "json"
		
	})
	//Function that executes after connection is established
	.done(function(data){		
		var temp = "",
			tempArr = [],
			finalArr = [];
		/*Loops through the data to assign the data tied to keys
		to local varibles*/
		arr = data;
		$("#reply").append(arr);
		$.each(arr, function(key, value) {			
			if(key == "prefix") {
				prefix = value;
				$("#prefix").append(prefix);
			}
			
			if(key == "array") {
				tempArr = value;
				
			}
		})	
		
		/*Loops through the array recieved by the server to
		check each entry for the prefix string*/
		for(var i = 0; i < tempArr.length; i++) {
			if(tempArr[i].indexOf(prefix) >= 0) {
				$("#reply").append("Prefix found at: ");
				$("#reply").append(i);
			}
			else{
				finalArr.push(tempArr[i]);
				$("#reply").append(finalArr[i]);
				$("#reply").append("<br>");
			}
		}
		
		//New JSON data to be validated		
		prefix = {
			"token": "c8ec6d794bd7d33b7d19f33adf5f6744",
			"array": finalArr
		};
		
		$.ajax({
			url:"http://challenge.code2040.org/api/prefix/validate",
			dataType:"json",
			data:prefix, 
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
			url:"http://challenge.code2040.org/api/prefix/validate",
			dataType:"json",
			data:prefix, 
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

