function Ans1(){
  alert("Sorry,the answer is incorrect.Tip:it happened in new century.")
  var x = document.getElementById('demo1');
  x.style.color="red";
}

function Ans2(){
  alert("Congratulations!The answer is correct!")
  var y = document.getElementById('demo2');
  y.style.color="green";
}

function Ans3(){
  alert("Sorry,the answer is incorrect.Tip:it happened little later.")
  var z = document.getElementById('demo3');
  z.style.color="red";
}

function Ans4(){
  alert("Sorry,the answer is incorrect.Tip:it happened in new century.")
  var a = document.getElementById('demo4');
  a.style.color="red";
}

function WriteAnswer(){
  var writeanswer = prompt ("Please wirte your answer here.");
  if (writeanswer==="士郎正宗" ){
    alert("yes," + writeanswer + " is the author of the work.");
  }
  else {
  alert("Sorry,Please click the link behand to find the answer.");
  }
}

  function button1(){
    alert("Sorry,the answer is incorrect.Try again.");
  }
  function button2(){
      alert("Congratulations！Eren is the hero of the story!");
    }
