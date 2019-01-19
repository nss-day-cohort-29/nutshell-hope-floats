import loginCollection from "./loginCollection"

const validateRegisterInputs = {
    
    clearInputForm(){
        document.querySelector("#registerName").value = ""
        document.querySelector("#loginEmail"). value = ""
      },

    handleAddNewRegister() {
        console.log("hello")
        let register = document.querySelector("#registerName").value
        let email = document.querySelector("#loginEmail").value
        console.log(register)
        loginCollection.getAllLogin()
            .then(users => {
                users.forEach(user => {
                    if (register === user.username && email === user.email) {
                        console.log(register, "is Registered Already")
                        sessionStorage.setItem("userID", user.id)
                        sessionStorage.setItem("userID", user.email)
                    }



                    else {
                        alert("Now you will be registered")
                        let newUser = {
                            username: register,
                            email: email
                         }
                         console.log(newUser);
                         loginCollection.postAllLogin(newUser)
                        
                    }


                })
                validateRegisterInputs.clearInputForm()
            })
        }
}

export default validateRegisterInputs