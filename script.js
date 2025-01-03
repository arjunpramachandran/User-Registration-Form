const formValidation = () => {
    let isValid = true

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phoneNumber = document.getElementById('phone').value
    const phoneRegex = /^[0-9]{10,14}$/;
    const age = document.getElementById("age").value
    const address = document.getElementById("Address").value
    const male = document.getElementById('male')
    const female = document.getElementById('female')
    const other = document.getElementById('other')
    const agree = document.getElementById("agree").checked;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    if (name.trim() === "" || email.trim() === "" || phoneNumber.trim() === "") {
        document.getElementById('requiredError').innerText = "*Required Field Canot Be Empty"
        document.getElementById("requiredError").classList.add('error')
        isValid = false
    }
    else{
        document.getElementById('requiredError').innerText = "*Required Field"
        document.getElementById("requiredError").classList.remove('error')
    }
    if (name.length > 50 || name.length < 3) {
        document.getElementById('nameError').innerText = "Name Shuld be More Than 3 leters and Less Than 50 leters"
        document.getElementById('name').classList.add('is-invalid')
        isValid = false
    }
    else {
        document.getElementById('nameError').innerText = ""
        document.getElementById('name').classList.remove('is-invalid')
    }

    if (!email.match(emailRegex)) {
        document.getElementById('emailError').innerText = "Enter Valid Email Address"
        document.getElementById('email').classList.add('is-invalid')
        isValid = false

    }
    else {
        document.getElementById('emailError').innerText = ""
        document.getElementById('email').classList.remove('is-invalid')
    }
    if (!phoneRegex.test(phoneNumber)){
        document.getElementById('phoneError').innerText = "Enter Valid Phone Number"
        document.getElementById('phone').classList.add('is-invalid')
        isValid = false
    }
    else {
        document.getElementById('phoneError').innerText = ""
        document.getElementById('phone').classList.remove('is-invalid')
    }
    if (age < 12 || age > 100) {
        document.getElementById('ageError').innerText = "Age Should be in Between 12 and 100"
        document.getElementById('age').classList.add('is-invalid')
        isValid = false
    }
    else {
        document.getElementById('ageError').innerText = ""
        document.getElementById('age').classList.remove('is-invalid')
    }
    if (address.length > 50) {
        document.getElementById('addressError').innerText = "Adress Not More Than 50 Leters"
        document.getElementById('Address').classList.add('is-invalid')
        isValid = false
    }
    else {
        document.getElementById('addressError').innerText = ""
        document.getElementById('Address').classList.remove('is-invalid')
    }
    if (!male.checked && !female.checked && !other.checked) {
        document.getElementById('genderError').innerText = "Select Your Gender"
        isValid = false
    }
    else {
        document.getElementById('genderError').innerText = ""
        
    }
    if (!agree) {
        document.getElementById("agreeError").textContent = "(Please agree to the above information.)"
        isValid = false
    }
    else {
        document.getElementById('agreeError').innerText = ""
        
    }

    return isValid
}
const saveValue=()=> {  
    let valueName = document.getElementById('name').value 
    let valueEmail = document.getElementById('email').value
    let valueLname = document.getElementById('Lname').value
   localStorage.setItem('nameValue', valueName);
   localStorage.setItem('emailValue', valueEmail);  
   
   if(valueLname!=""){
    localStorage.setItem('LnameValue', valueLname);
   }
   else{
    valueLname = ""
    localStorage.setItem('LnameValue', valueLname);
   } 
   window.location.href = 'success.html';  
}  

document.getElementById('signInForm').addEventListener('submit', (event) => {
    if (!formValidation()) {

        event.preventDefault()
    }
    else  saveValue()
   
    

})