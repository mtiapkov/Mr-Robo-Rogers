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
function rogSays(number) {
  const numArray = []
  for (let i = 0; i <= number; i++) {
    if([i].includes(3) || i === 13 || i >= 30 && i < 40) {
      numArray.push(" Won't you be my neighbor?")
    }
    else if ([i].includes (2) || i >= 20 && i < 30) {
      numArray.push(" Boop!")
    }
    else if ([i].includes (1) || i >= 10 && i < 20) {
      numArray.push(" Beep!")
    }
    else {
      numArray.push(" " + i);}
  }
  return result = numArray
}