const form = document.getElementById("formlogin")
form.onsubmit = function(ev){
    ev.preventDefault()
    if (!n){
        console.log("یسبنسین")
    }
}

const input =document.getElementsByClassName("form-control")
input.oninput =function(event){
    event.preventDefault()
    
}


const btn=document.getElementById("btnlog")
const n =document.getElementById("validationDefault01")
const lastname=document.getElementById("validationDefault02")
const telephone=document.getElementById("validationDefault03")
function log(d){
    const info={
        nInput:n.value,
        lastnameInput:lastname.value,
        telphoneInput:telephone.value,
    }
    

}
btn.onclick = function(e){
    

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: n.value,
            body: lastname.value,
            userId: telephone.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

}    
