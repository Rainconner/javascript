var selectedOprator = null;
var selectedAdvanceOprator = null;
var firstInput = "";
var secondInput = "";
var isSimpleOprator = true;
function c(val) {
  document.getElementById("display").value = val;
}

function insertDigit(value) {
  addDigitInInput(value);
  displayOutput();
}
function addDigitInInput(value) {
  if (selectedOprator != null) {
    secondInput += value.toString();
    return;
  }
  firstInput += value.toString();
}
function displayOutput() {
  if (isSimpleOprator) {
    document.getElementById("display").value =
      firstInput + " " + selectedOprator + " " + secondInput;
    return;
  }
  document.getElementById("display").value = firstInput;
}

function p() {
  c(eval(document.getElementById("display").value) / 100);
}
function performOpration() {
  switch (selectedOprator) {
    case "+":
      performAddition();
      break;

    default:
      break;
  }
}
function performAddition() {
  parseInt.apply(firstInput);
  alert(firstInput);
  alert(firstInput + secondInput);
}
function selectSimpleOprator(oprator) {
  selectedOprator = oprator;
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
  function isOpratorEmpty(oprator) {
    if (oprator == null || oprator == undefined || oprator == "") return true;
    return false;
  }
};
