gmail_but = document.getElementById("gmail_but");
var tch_hideable = document.getElementById("tch_hideable");
var tch_hideable_2 = document.getElementById("tch_hideable_2");

function copyMail()
{
    var gmailInv = document.getElementById('gmail_inv');
    gmailInv.select();
    document.execCommand("copy");
    this.focus();
};
gmail_but.addEventListener("click", copyMail);

function hideOrShow()
{
  var hideable = document.getElementById("hideable");
  var hideable_2 = document.getElementById("hideable_2");
  if (hideable_2.style.width == "0%")
  {
    setTimeout(function(){ hideable.style.display = "flex"; }, 800);
    hideable_2.style.width = "22%";

  }
  else
  {
    hideable.style.display = "none";
    hideable_2.style.width = "0%";
  }
}
tch_hideable.addEventListener("click", hideOrShow);
tch_hideable_2.addEventListener("click", hideOrShow);
document.addEventListener("DOMContentLoaded", hideOrShow);
