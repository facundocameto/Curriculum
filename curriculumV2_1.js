gmail_but = document.getElementById("gmail_but");

function copyMail()
{
    var gmailInv = document.getElementById('gmail_inv');
    gmailInv.select();
    document.execCommand("copy");
    this.focus();
};
gmail_but.addEventListener("click", copyMail);
