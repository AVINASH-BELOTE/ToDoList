function submitForm() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
  const message = document.getElementById("message");
 const mobileRegex = /^[6-9]\d{9}$/; 
 
 document.getElementById("outputLabel").textContent = "Hello, " + name;
 mobileError.textContent ="";
  if (!mobileRegex.test(mobile)) {
    message.style.color = "red";
      mobileError.textContent ="Enter a valid 10-digit mobile number.";
    return;
  }
else{
     
  if (!name || !mobile || !email || !address || !city || !pincode) {
    message.style.color = "red";
    message.textContent = "Please fill all the fields.";
    return;
  }
  else
  message.style.color = "royalblue";
  message.textContent = `Thank you, ${name}! Your details have been submitted.`;
}
  // Optionally clear form
  // document.querySelectorAll("input").forEach(i => i.value = "");
}
