// User Interface Logic
$(document).ready(function(){
  $("form#rodgers").submit(function(){
    event.preventDefault();
    const number = $("#number").val()
    const output = rogSays(number)
    $("#output").text(output);
  })
})

//Business Logic
function rogSays(number) {
  const numArray = []
  for (let i = 0; i <= number; i++) {
    if([i].includes(3) || i === 13 || i >= 30 && i < 40 || i === 43|| i === 53) {
      numArray.push(" Won't you be my neighbor?")
    }
    else if ([i].includes (2) || i >= 20 && i < 30 || i === 42 || i === 52) {
      numArray.push(" Boop!")
    }
    else if ([i].includes (1) || i >= 10 && i < 20 || i === 41 || i == 51) {
      numArray.push(" Beep!")
    }
    else {
      numArray.push(" " + i);
    }
  }
  return output = numArray
}