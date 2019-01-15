import loginCollection from "./loginCollection"

const registerBuilder = {
   registerBuilding(){
        let registerField = document.createElement("article")

        let registerLabel = document.createElement("label")
        registerLabel.setAttribute("for", "register")
        let inputRegister = document.createElement("input");
        inputRegister.setAttribute("id", "registerName")
        inputRegister.placeholder= "Username"
        inputRegister.setAttribute("name", "Username")

        registerField.appendChild(registerLabel)
        registerField.appendChild(inputRegister)

        let emailField = document.createElement("article")

        let emailLabel = document.createElement("label")
        emailLabel.setAttribute("for", "email")
        let inputEmail = document.createElement("input");
        inputEmail.setAttribute("id", "loginEmail")
        inputEmail.placeholder= "Email"
        inputEmail.setAttribute("name", "Email")

        emailField.appendChild(emailLabel)
        emailField.appendChild(inputEmail)

        let loginButton = document.createElement("button")
        loginButton.textContent = "login"
        loginButton.setAttribute("class", "login")

        let registerButton = document.createElement("button")
        registerButton.textContent = "register"
        registerButton.setAttribute("class", "register")

        registerButton.addEventListener("click", this.handleAddNewRegister)
        let loginFormFragment = document.createDocumentFragment()
        loginFormFragment.appendChild(registerField)
        loginFormFragment.appendChild(emailField)
        loginFormFragment.appendChild(loginButton)
        loginFormFragment.appendChild(registerButton)

        let loginArticle = document.querySelector(".loginArticle")
        loginArticle.appendChild(loginFormFragment)
        return loginFormFragment
   },

        handleAddNewRegister () {
         let register = document.querySelector("#registerName").value
         let email = document.querySelector("#loginEmail").value
         console.log(register)
         let newUser = {
            username: register,
            email: email
         }
         console.log(newUser);
         loginCollection.postAllLogin(newUser)

      }
}
export default registerBuilder