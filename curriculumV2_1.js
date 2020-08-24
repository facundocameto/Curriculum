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
  if (hideable.style.display == "none")
  {
    hideable.style.display = "flex";
    hideable_2.style.display = "inline-grid";

  }
  else
  {
    hideable.style.display = "none";
    hideable_2.style.display = "none";
  }
}
tch_hideable.addEventListener("click", hideOrShow);
tch_hideable_2.addEventListener("click", hideOrShow);
document.addEventListener("DOMContentLoaded", hideOrShow);
