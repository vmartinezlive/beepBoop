function resultDivByThree(inputNo) {
  var resultDivByThree = [];
  for (var i = 0; i <= inputNo; i ++) {
    if (i % 3 === 0) {
      resultDivByThree.push("I'm sorry, Dave. I'm afraid I can't do that. ");
    }
  }
  return resultDivByThree;
}
function resultContainsZero(inputNo) {
  for (var i = 0; i < arrayNumTens.length; i++) {
     if inputNo === zero {
       resultContainsZero.push("Bee, ");
     }
   }



  var zero = "0";
  var one = "1";
  var resultConcat = [];


  $(document).ready(function(){
    $("#inputBeepBoop").submit(function(event){
      event.preventDefault();

      var inputNumber = parseInt($("#inputNumber").val());
      var result = resultContainsZero(inputNumber);

      // $(".resultBB").empty();
      $(".resultBB").text(result);


    });
  });
