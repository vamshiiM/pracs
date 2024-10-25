const user = document.getElementById('name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const butt1 = document.getElementById('butt1')
const msg = document.getElementById('msg')
const form = document.getElementById('form')

console.log("hiiii")

function sub1(num, num1, num2) {
    
    
    // Check if both username and password fields are empty
    if (num === '' && num2 === '') {
        msg.innerText = "Username and password can't be null";
        user.style.borderColor = "red";
        user.style.borderWidth = "6px";
        password.style.borderColor = "red";
        password.style.borderWidth = "6px";
     } else {
        // Check if username length is valid (must be exactly 8 characters)
        if (num.length > 8 || num.length < 7) {
            user.style.borderColor = "";
        user.style.borderWidth = "";
        password.style.borderColor = "";
        password.style.borderWidth = "";

            msg.innerText = "Username must contain 7-8 characters";
            user.style.borderColor = "red";
            user.style.borderWidth = "6px";

        } else {
            // Check if password length is valid (must be exactly 8 characters)
            if (num2.length > 8 || num2.length < 8) {
                user.style.borderColor = "";
        user.style.borderWidth = "";
        password.style.borderColor = "";
        password.style.borderWidth = "";

                msg.innerText = "Password must be exactly 8 characters";
                password.style.borderColor = "red";
                password.style.borderWidth = "6px";

            } else {
                // Valid password, now check credentials
                if (num !== "VAMSHI12" || num2 !== "Password") {
                    user.style.borderColor = "";
        user.style.borderWidth = "";
        password.style.borderColor = "";
        password.style.borderWidth = "";

                    msg.innerText = "Invalid credentials";
                    document.body.style.backgroundColor = "red"

                } else {
                    user.style.borderColor = "";
        user.style.borderWidth = "";
        password.style.borderColor = "";
        password.style.borderWidth = "";

                    msg.innerText = "Logged in Successfully";
                    document.body.style.backgroundColor = "green"
                   
                }
            }
        }
    }
}



function sub(){

    let name1 = user.value;
    let password1 = password.value;
   let email1 = email.value;
    console.log(email1)
    console.log(password1)
    console.log(name1)

    sub1(name1,email1,password1)

}
