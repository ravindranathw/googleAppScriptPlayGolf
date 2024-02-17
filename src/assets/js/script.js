//wireup signup form submit button to handleSignup function
function handleSignup(e) {
  //disable sbumit button
  e.preventDefault();
  
  $("#submit").prop("disabled", true);
  
  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const phone = $("#phone").val();
  const insuranceCompany = $("#insuranceCompany").val();

  const data = {
    firstName,
    lastName,
    email,
    phone,
    insuranceCompany,
  };

 var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(data);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
    mode: 'no-cors'
};

fetch("YourAppscriptDeploymentURLThatYOuCopiedFromStep12", requestOptions)
  .then(response => response.text())
  .then(result => {     
    alert("Signup success.");    
    console.log(result);
    //reset form
    $("#signupForm").trigger("reset");
  })
  .catch(error => {
    alert("Signup failed due to server error. Please try again later.");
    console.log('error', error)})  
    .finally(() => {
    //enable submit button
    $("#submit").prop("disabled", false);
  });
}


$(document).ready(function () {
  //wireup signup form submit button to handleSignup function
  $("#signupForm").submit(handleSignup);
});
