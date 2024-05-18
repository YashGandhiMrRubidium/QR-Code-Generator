let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrtext");

function generateQR(){
    if(qrtext.value.length > 0){
        qrImage.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`
        imgBox.classList.add("show-img");
        console.log("call");
    }
    else{
        alert("Enter text or Url in input");
    }
}