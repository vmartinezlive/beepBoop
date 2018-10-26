function resultBeepBoop(inputNo) {
  if (inputNo = " ") {
    var noInput = ("You have to entry a number!");
    return noInput;
  }
  var resultDivByThree = [];
  for (var i = 0; i <= inputNo; i ++) {
    if (i % 3 === 0) {
      resultDivByThree.push("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (i.toString().includes("0") || i === 0) {
      resultDivByThree.push("Beep! ");
    } else if (i.toString().includes("1") || i === 1) {
      resultDivByThree.push("Boop! ");
    }
    return resultDivByThree;
  }

}




$(document).ready(function(){
  $("#inputBeepBoop").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val());
    var result = resultBeepBoop(inputNumber);
    console.log(result);
    // $(".resultBB").empty();
    $(".resultBB").text(result);


  });
});
