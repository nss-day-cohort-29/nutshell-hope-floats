const loginCollection = {

    getAllLogin (){
        return fetch("http://localhost:8088/Users")
        .then(response => response.json())
    },
    postAllLogin(newLoginToSave){
       return fetch("http://localhost:8088/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(newLoginToSave)
    })
    // location.reload(true);
  }
}
export default loginCollection