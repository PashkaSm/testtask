$(document).ready(function(){
	$(".user").hide();
	var count_user;
	$(".button_count").on("click",function(){
		 count_user = $(".input_count").val();
		if (count_user == 0 || isNaN(count_user)){
			alert("Дані введено не правильно");
		}
		else{
			$(".form_count_worker").remove();
			$(".user").show();
			var clone = $(".clone_input").clone();
			for (var i = 0; i < count_user; i++) {
				$('<input>').attr({type: 'text',id: 'foo',name: 'name[]',placeholder: "Ім'я",}).appendTo('.item');
				$('<input>').attr({type: 'email',id: 'goo',name: 'email[]',placeholder: "Email",}).appendTo('.item');
			}
		}
	});
	$('#go').on("click", function(){
		var name = $("input[name='name[]']").map(function(){return $(this).val();}).get();
		var email = $("input[name='email[]']").map(function(){return $(this).val();}).get();
		var name_repeat = 0;
		var email_repeat = 0;
		for (var i = 0; i < count_user; i++) {
			for (var j = 0; j < count_user; j++) {
				if (i != j) {
					if (name[i] == name[j]) {
						name_repeat = 1;
					}
				}
			}
		}
		for (var i = 0; i < count_user; i++) {
			for (var j = 0; j < count_user; j++) {
				if (i != j) {
					if (email[i] == email[j]) {
						email_repeat = 1;
					}
				}
			}
		}
		if (name_repeat != 1 && email_repeat != 1){
			$.ajax({
				url:"action.php",
				method:"POST",
				data:{name:name, email:email,count:count_user},
				success:function(data)
				{
					alert(data);
				}
			});
		}else{
			alert("Імя або emai повторюються");
		}
		
	});

});