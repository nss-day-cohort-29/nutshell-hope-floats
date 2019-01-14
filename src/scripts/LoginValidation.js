import loginCollection from "./loginCollection"

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
// const validateUser = {

//     handleLogin() {
//         let inputName = document.querySelector("#registerName").value
//         let inputEmail = document.querySelector("#loginEmail").value
//         console.log(inputName)
//         loginCollection.getAllLogin()
//             .then(users => {
//                 users.forEach(user => {
//                     if (inputName === user.username && inputEmail === user.email) {
//                         console.log(inputName, "is logged in")
//                         sessionStorage.setItem("userID", user.id)
//                     }
//                     else {
//                         alert("Not a Registered User")
//                     }


//                 })
//             })
//         }
}
export default validateUserInputs