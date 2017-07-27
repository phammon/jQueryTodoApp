//check off specific todos by clicking a li
//second argument li accounts for li's that may or may not be on the page at the time of page loading

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//click on X to delete ToDo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();//this refers to parent li, not the span
	});
	event.stopPropagation();// stops parent elements from firing events, we only want the individual element to fire an event
	
});

//add to list using input
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){ //13 is code for enter key
		//grabbing todo text from input
		var todoText = $(this).val();
		//emptys the text that the user inputted
		$(this).val("");
		//create new li from todo text
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
	}
});
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});