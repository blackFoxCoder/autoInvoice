var list =0;
$(document).ready(function(){
	//addRow
	$("#addRow").click(function(){
		list++;
		var pend = '<tr><td>'+list+'</td><td><input type="text"></td><td><input id="qty" type="text"></td><td><input id="amt" type="text"></td><td><input id="tot" type="text"></td></tr>'
		$("#table").append(pend);
	});
	//delRow
	$("#delRow").click(function(){
		list--;
		if (list>-1) {
			$("#table tr").last().remove();
		} else {
			alert('All invoices have been removed. To continue shopping, please, add an invoice using the add item button');
			list=0;
		};
		
	});

	//calculate
	$("table#table tbody").on("keyup","#amt",function(){
		var a = $(this).closest("tr").find("#amt").val();
		var b = $(this).closest("tr").find("#qty").val();
		var c = a*b;
		$(this).closest("tr").find("#tot").val(c);
	});
	$("table#table tbody").on("keyup","#qty",function(){
		var a = $(this).closest("tr").find("#amt").val();
		var b = $(this).closest("tr").find("#qty").val();
		var c = a*b;
		$(this).closest("tr").find("#tot").val(c);
	});
})