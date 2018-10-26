function divByThree (inputNo) {
  if (inputNo % 3) {
    var divThree = ("I'm sorry, Dave. I'm afraid I can't do that.");
    return divThree;
  }
debugger;
  // else if (inputNo <= 3999 && inputNo >= 1000) {
  //   var inputArray = inputNo.split('');
  //   for (var i = 0; i < arrayNumerals.length; i++) {
  //     if (parseInt(inputArray[3]) === i ) {
  //       var resultArrayPos4 = arrayNumerals[i];
  //       }
}






$(document).ready(function(){
  $("#inputBeepBoop").submit(function(event){
    event.preventDefault();


    var inputNumber = $("#inputNumber").val();
    var result = divByThree(inputNumber);

    $(".resultBB").empty();
    $(".resultBB").append(result);



  });
});
