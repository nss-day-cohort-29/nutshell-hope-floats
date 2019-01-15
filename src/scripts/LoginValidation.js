import loginCollection from "./loginCollection"
import registerBuilder from "./loginForm"


const validateUserInputs = {

    handleLogin() {
        let inputName = document.querySelector("#registerName").value
        let inputEmail = document.querySelector("#loginEmail").value
        console.log(inputName)
        loginCollection.getAllLogin()
            .then(users => {
                users.forEach(user => {
                    if (inputName === user.username && inputEmail === user.email) {
                        console.log(inputName, "is logged in")
                        sessionStorage.setItem("userID", user.id)
                    }
                    else {
                        alert("Not a Registered User")
                    }


                })
            })
        }
},
const validateRegisterInputs = {

    handleAddNewRegister() {
        let register = document.querySelector("#registerName").value
        let email = document.querySelector("#loginEmail").value
        console.log(username)
        loginCollection.getAllLogin()
            .then(users => {
                users.forEach(user => {
                    if (register === user.username && email === user.email) {
                        console.log(username, "is Registered Already")
                        sessionStorage.setItem("userID", user.id)
                    }
                    else {
                        let newUser = {
                            username: register,
                            email: email
                         }
                         console.log(newUser);
                         loginCollection.postAllLogin(newUser)
                        alert("You are Registered!")
                    }


                })
            })
        }
},

export default {validateUserInputs,validateRegisterInputs}