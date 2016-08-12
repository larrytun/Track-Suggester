$(document).ready(function() {
  $("trackapp").submit(function(event) {
   var q1Input = parseInt($("select#question1").val());
   var q2Input = parseInt($("select#q2").val());
   var q3Input = parseInt($("select#q3").val());
   var q4Input = parseInt($("select#q4").val());
   var q5Input = parseInt($("select#q5").val());
   event.preventDefault()

   var total = (q1Input + q2Input + q3Input + q4Input + q5Input);

   if(total < 9) {
     $("#css").show();
     $("#net").hide();
     $("android").hide();
   }
   else if(total >= 9 && total <= 12) {
     $("#net").show();
     $("#css").hide();
     $("android").hide();
   }
   else if(total >= 13) {
     $("#android").show();
     $("#css").hide();
     $("net").hide();
   }
  });
});
