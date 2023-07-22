num1 = "";
b;
lis = [];
console.log("hello");
function calc() {
  num1 = document.getElementById("dis").value;
  let box = document.getElementById("dis");
  console.log(num1);
  lis = num1.split(" ");
  console.log(lis);
  b = Number(lis[0]);
  c = Number(lis[2]);
  if (lis[1] == "+") {
    add = b + c;

    box.value = add;
  } else if (lis[1] == "-") {
    result = b - c;

    box.value = result;
  } else if (lis[1] == "X") {
    result = b * c;

    box.value = result;
  } else if (lis[1] == "/") {
    result = b / c;

    box.value = result;
  } else window.alert("invalid operation");
}
function clear2() {
  let box = document.getElementById("dis");
  box.value = "";
}
