//Business Logic
function resultBeepBoop(inputNo) { //function resultBeepBoop is called
  var resultDivByThree = [];

  for (var i = 0; i <= inputNo; i ++) { // for variable index equals to 0; index is less oe equals to inputNo; index plus plus
    if (i.toString().includes("0") || i === 0) { //if index to string includes 0 push beep to resultDivByThree.
      resultDivByThree.push("Beep! ");
    } else if (i.toString().includes("1") || i === 1) { //else if index to string includes 1 or index is equal to 1, push Boop to resultDivByThree
      resultDivByThree.push("Boop! ");
    } else if (i % 3 === 0) { //else if index is modulo (or divisble by 3) equals to 0 push "I'm sorry, Dave. I'm affraid I can't do that" to resultDivByThree
      resultDivByThree.push("I'm sorry, Dave. I'm affraid I can't do that. ");
    } else { //else push index to resultDivByThree
      resultDivByThree.push(i);
    }
  }
  return resultDivByThree; //resultDivByThree is returned
}


//Business User Interface Logic
$(document).ready(function(){  //*start HERE:
  $("#inputBeepBoop").submit(function(event){ // user enters a number and it gets submitted in the document
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val()); // the inputeNumber is changed to a interger
    var result = resultBeepBoop(inputNumber); //the inputNumber become a new variable called resultBeepBoop

    $(".resultBB").text(result);

  });
});
