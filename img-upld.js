
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
const regexPattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(png|jpg|jpeg|gif)$/i;

// open the file explorer when the custom button is clicked
customBtn.addEventListener("click", ()=>{
    realFileBtn.click();
})

// change the custom text 
realFileBtn.addEventListener("change", ()=>{
    if(realFileBtn.value){
        // using regex the check if the file format is supported or not
        if(!(realFileBtn.value.match(regexPattern)))
        {
            customTxt.innerHTML = "File format isn't supported"
        }

        else{
            customTxt.innerHTML = realFileBtn.value.replace('C:\\fakepath\\', '');
        }
    }

    // if there was no photo uploaded then keep the custom text the same
    else{
        customTxt.innerHTML = "Upload Image";
    }
})



