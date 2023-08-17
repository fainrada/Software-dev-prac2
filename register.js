function validate()
{
    console.log("validate");
    let name = document.getElementById("companyname").value;
    let phone = document.getElementById("phone").value;
    let personname = document.getElementById("personname").value;
    console.log(name, phone, personname);
    if(name === "" || phone === "" || personname === ""){
        window.alert("input company name, phone or person name is not valid");
    }
    let chair = document.getElementById("chair").value;
    if(chair !== "" && (parseInt(chair) < 1 || parseInt(chair) > 10)){
        window.alert("input chair not valid");
    }

}