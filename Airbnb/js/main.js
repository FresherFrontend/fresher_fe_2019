$(function(){
    var date = new Date();
       date.setDate(date.getDate());
       $("checkin").datepicker({
             format: "mm/dd/yyyy",
             orientation: "top right",
             todayHightinght: true,
             startDate: date
          });
})