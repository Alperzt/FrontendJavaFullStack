let submitButton = () => {
    // JavaScript
    let emailData = document.getElementById("emailData").value;
    let localStorageSetEmail = localStorage.setItem("email",emailData);  
    let localStorageGetEmail = localStorage.getItem("email");
    console.log(localStorageGetEmail);

    //JQuery
    let passwordData = $(`#pword`).val();
    let localStorageSetPassword=localStorage.setItem("password",passwordData);
    let localStorageGetPword = localStorage.getItem("password");
    console.log(localStorageGetPword);
}

