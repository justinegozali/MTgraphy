function formSubmitted(event){
    let name = document.getElementById('nameTxt').value
    let phoneNumber = document.getElementById('phonenumberTxt').value
    let email = document.getElementById('emailTxt').value
    let password = document.getElementById('passwordTxt').value
    let confirmPassword = document.getElementById("confirmPasswordTxt").value

    if (name.length <= 5){
        alert('name lenght must be more than 5')
    }
    else if (phoneNumber.length <= 8){
        alert('phone number lenght must be more than 8')
    }
    else if (!email.endsWith ("@gmail.com")){
        alert('email must ends with @gmail.com')
    }
    else if (password != confirmPassword){
        alert('password must be the same')
    }
    else{
        alert('register sucess')
    }
    event.preventDefault()
}