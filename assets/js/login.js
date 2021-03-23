function getInputValue(){
  // Selecting the input element and get its value 
  var inputPrenom = document.getElementById("identifiant").value;
  var inputMDP = document.getElementById("MDP").value;

  var inputComplete = `${inputPrenom}_${inputMDP}`

  // Displaying the value
  if (inputPrenom === "" || inputMDP === "" || inputPrenom === "" && inputMDP === "") {
    alert("L'identifiant ou le mot de passe sont invalides.");
  }
  else {
    if (inputComplete === `DDPStaff_Staff`) {
      alert("Bonjour à toi le staff.");
      window.location.replace("../index.html");
    }
    else if (inputComplete !== `DDPStaff_Staff`) {
      alert(`Bonjour à toi ${inputPrenom}`);
      window.location.replace("../index.html");
    }
  }
}
