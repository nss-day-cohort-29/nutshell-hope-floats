import loginCollection from "./loginCollection"


const validateUserInputs = {

    clearInputForm() {
        document.querySelector("#registerName").value = ""
        document.querySelector("#loginEmail").value = ""
    },


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
                        sessionStorage.setItem("userID", user.email)
                    }
                    else {
                        alert("Not a Registered User")
                    }



                })
                validateUserInputs.clearInputForm()
            })
    }
}



export default validateUserInputs