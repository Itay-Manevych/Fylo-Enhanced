
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
const regexPattern = ("(.*?)\.(jpg|gif|doc|pdf)$");


customBtn.addEventListener("click", ()=>{
    realFileBtn.click();
})

realFileBtn.addEventListener("change", ()=>{
    if(realFileBtn.value){
        if((realFileBtn.value.match(/(.*?)\.(jpg|gif|doc|pdf)$/) == null))
        {
            customTxt.innerHTML = "File format not supported"
        }
        customTxt.innerHTML= realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else{
        customTxt.innerHTML = "Upload Image";
    }
})



