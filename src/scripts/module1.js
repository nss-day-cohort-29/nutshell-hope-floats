const loginBuilder = {
   loginBuilding(){
        let loginField = document.createElement("article")

        let loginLabel = document.createElement("label")
        loginLabel.setAttribute("for", "login")
        let inputlogin = document.createElement("input");
        inputlogin.setAttribute("id", "loginName")
        inputlogin.placeholder= "Login"
        inputlogin.setAttribute("name", "Login")

        loginField.appendChild(loginLabel)
        loginField.appendChild(inputlogin)

        let passwordField = document.createElement("article")

        let passwordLabel = document.createElement("label")
        passwordLabel.setAttribute("for", "password")
        let inputPassword = document.createElement("input");
        inputPassword.setAttribute("id", "loginPassword")
        inputPassword.placeholder= "Password"
        inputPassword.setAttribute("name", "Password")

        passwordField.appendChild(passwordLabel)
        passwordField.appendChild(inputPassword)

        let loginButton = document.createElement("button")
        loginButton.textContent = "login"
        loginButton.setAttribute("class", "login")

        let registerButton = document.createElement("button")
        registerButton.textContent = "register"
        registerButton.setAttribute("class", "register")


        let loginFormFragment = document.createDocumentFragment()
        loginFormFragment.appendChild(loginField)
        loginFormFragment.appendChild(passwordField)
        loginFormFragment.appendChild(loginButton)

        let loginArticle = document.querySelector(".loginArticle")
        loginArticle.appendChild(loginFormFragment)
        return inputlogin

   }
}
export default loginBuilder