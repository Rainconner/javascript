var selectedOprator = null;
var selectedAdvanceOprator = null;
var firstInput = null;
var secondInput = null;
var isSimpleOprator = true;
function c(val) {
  document.getElementById("display").value = val;
}

function insertDigit(value) {
  document.getElementById("display").value += value;
  if (selectedOprator != null) {
    secondInput += value.toString();
    return;
  }
  firstInput += value.toString();
}

function p() {
  c(eval(document.getElementById("display").value) / 100);
}
function performOpration() {
  console.log(selectedOprator);

  switch (selectedOprator) {
    case "+":
      alert(firstInput + "+++" + secondInput);
      break;

    default:
      break;
  }
}

function selectSimpleOprator(oprator) {
  selectOprator = oprator;
  isSimpleOprator = true;
}

function selectAdvanceOprator(oprator) {
  selectedAdvanceOprator = oprator;
  isSimpleOprator = false;
}
var e = function() {
  c(eval(document.getElementById("display").value));
  try {
  } catch (e) {
    c("Error");
  }

  function isFirstInputEmpty() {
    if (firstInput == null || firstInput == undefined || firstInput == "")
      return true;
    return false;
  }
  function isSecondInputEmpty() {
    if (firstInput == null || firstInput == undefined || firstInput == "")
      return true;
    return false;
  }
};
