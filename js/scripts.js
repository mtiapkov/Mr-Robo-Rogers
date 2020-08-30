// User Interface Logic
$(document).ready(function(){
  $("form#rogers").submit(function(){
    event.preventDefault();
    const number = $("#numberInput").val()
    const name = $("#nameInput").val()
    const output = rogSays(number, name)
    $("#output").text(output);
  });
});

//Business Logic
function rogSays(number, name) {
  const numArray = []
  for (let i = 0; i <= number; i++) {
    let emptyString = i + "";
    if (emptyString.includes(3)) {
      numArray.push(" Won't you be my neighbor, " + name)
    } else if (emptyString.includes (2)) {
      numArray.push(" Boop!")
    } else if (emptyString.includes (1)) {
      numArray.push(" Beep!")
    } else {
      numArray.push(" " + i);
    };
  };
  return output = numArray
};