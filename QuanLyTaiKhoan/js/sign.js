var Correct_iputname = "Admin";
var Correct_passWord = "Ad@123";
let inusn = document.getElementById("usn");
let inpas = document.getElementById("pass");
let link = document.getElementById("indexx");

var form_account = document.getElementById("form_account");



if (form_account.AttachEvent) {
  form_account.attachEvent("submit", onform_account);
} else {
  form_account.addEventListener("submit", onform_account);
}

function onform_account(e) {
  var userName = inusn.value;
  var passWord = inpas.value;
    if (userName == Correct_iputname && passWord == Correct_passWord) {
        console.log("Success!");
        link = new page('../index.html')
      }
          else{
        alert("Wrong Pass or UserName");
      }
      
}


// if(pass_Word === " "){
//     alert("Input PassWord Please !!");
// }
// if(user_Name === " ") {
//     alert("Input UserName Please !!");
//     }