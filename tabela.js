$("button").click(function(){
	var teste = $("#tabela");
	$.get("https://api-pacientes.herokuapp.com/pacientes", function(data, status){
		var bloc =""
		if(status == "success"){
			for(let i=0; i < data.length; i++){
				bloc += "<tr><td>"+data[i].nome+"</td>"+
					"<td>"+data[i].peso+"</td>"+
					"<td>"+data[i].altura+"</td>"+
					"<td>"+data[i].gordura+"</td>"+
					"<td>"+data[i].imc+"</td></tr>";
				}
		}else{
			bloc = "sem conteudo";
		}
		teste.append(bloc);
	});
});