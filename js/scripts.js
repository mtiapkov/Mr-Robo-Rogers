// User Interface Logic
$(document).ready(function(){
  $("form#rodgers").submit(function(){
    event.preventDefault();
    const number = $("#number").val()
    const output = rogSays(number)
    $("output").text(output);
  })
})

//Business Logic
function rogSays (number) {
  const numArray =[]
  for (i = 0; i <= number; i++) {
    if(i.includes(3)) {
      numArray.push("won't you be my neighbor?")
    }
    else if (i === 2) {
      numArray.push("Boop!")
    }
    else if (i === 1) {
      numArray.push("Beep!")
    }
    else {
      numArray.push(" " + i);}
  }
  return result = numArray
}