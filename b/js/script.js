$(document).ready(function(){

		var html = $("#test").html();
		
		var data = [
		{
		title: "ФИО",
		privateData: "Иванов Иван Иванович"
		},

		{
			title: "Образование",
			privateData: "КНУ им. Шевченко"
		},
		{
			title: "Контактный телефон",
			privateData: "095-999-99-99"
		},
		{
			title: "Электронная почта",
			privateData: "User@gmail.com"
		},
		{
			title: "Linkedn",
			privateData: "Linkedn.com"
		}
		

		];
		var content = tmpl(html, {data: data})
		$('body').append(content);
});


