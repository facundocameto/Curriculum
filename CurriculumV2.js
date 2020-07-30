contactt = document.getElementById("contactt");
numero = document.getElementById("numero");
gmail_but = document.getElementById("gmail_but");
//mostrar num//
function contact()
{
  if (numero.innerHTML === "099451301")
  {numero.innerHTML = "";}
  else {
    numero.innerHTML = "099451301";
  }
};
contactt.addEventListener("click", contact);
