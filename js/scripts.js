function resultOutputBB (inputNo) {
  var resultDivByThree = [ ];
  for (var i =0; i < inputNumber.length; i ++) {
    if (inputNo % 3 === 0) {
      return resultDivByThree.push ("I'm sorry, Dave. I'm afraid I can't do that.");
    }

  }
  console.log(resultOutputBB);
}
  // else if (inputNo <= 3999 && inputNo >= 1000) {
  //   var inputArray = inputNo.split('');
  //   for (var i = 0; i < arrayNumerals.length; i++) {
  //     if (parseInt(inputArray[3]) === i ) {
  //       var resultArrayPos4 = arrayNumerals[i];
  //       }







$(document).ready(function(){
  $("#inputBeepBoop").submit(function(event){
    event.preventDefault();


    var inputNumber = $("#inputNumber").val();
    var result = resultOutputBB(inputNumber);

    $(".resultBB").empty();
    $(".resultBB").append(result);



  });
});
