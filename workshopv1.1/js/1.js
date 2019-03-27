$(function(){
 // $('#datepicker1,#datepicker2').datepicker();
 	var date = new Date();
	    date.setDate(date.getDate());
	    $("#datepicker1,#datepicker2").datepicker({
	          format: "mm/dd/yyyy",
	          orientation: "top right",
	          todayHightinght: true,
	          startDate: date
	       });
})  
 