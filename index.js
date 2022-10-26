console.clear();
// copy is started

var copyB = document.getElementById("copyBtn");
var inputV = document.getElementById("inputV");
var copyM = document.getElementById("copyM");

copyB.addEventListener("click", () => {
  navigator.clipboard.writeText(inputV.value);
  copyM.innerText = "text is copied";
  setTimeout(() => {
    copyM.innerText = "";
  }, 2000);
});

// copy is ended

// cut start from here

var cutB = document.getElementById("cutBtn");
var inputVc = document.getElementById("inputVc");
var cutM = document.getElementById("cutM");

cutB.addEventListener("click", () => {
  navigator.clipboard.writeText(inputVc.value);
  inputVc.value = "";
  cutM.innerText = "text is cut";
  setTimeout(() => {
    cutM.innerText = "";
  }, 2000);
});

// cut end from here

// paste start from here

var pasteB = document.getElementById("pasteBtn");
var inputVp = document.getElementById("inputVp");
var pasteM = document.getElementById("pasteM");

pasteB.addEventListener("click", () => {
  navigator.clipboard.readText(inputVp.value).then(function (text) {
    inputVp.value = text;
  });
  inputVc.value = "";
  pasteM.innerText = "text is pasted";
  setTimeout(() => {
    pasteM.innerText = "";
  }, 2000);
});

// paste end from here
