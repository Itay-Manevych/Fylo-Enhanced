const fileInput = document.getElementById("file-input");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

// updating the loading bar and the amount
const storageUpdate = (usedSpace)=>{
    const amountUsed = document.getElementById("amount-used");
    const amountLeft = document.getElementById("amount-left");
    const loadingBar = document.getElementById("loading-shape-color");
    const width = (usedSpace / 10) * 583;
    loadingBar.style.width = width + "px";
    const usedSpaceString = localStorage.getItem("space").slice(0,4); // sliced only to 2 numbers after the dot
    amountUsed.innerHTML = usedSpaceString + " MB";
    amountLeft.innerHTML = (10 - usedSpaceString).toString().slice(0,4); // sliced only to 2 numbers after the dot
}

// if the page has been refreshed then keep the amount
if(JSON.parse(localStorage.getItem("space")) > 0)
{
    storageUpdate(JSON.parse(localStorage.getItem("space")));
}

// open the file explorer when the custom button is clicked
customBtn.addEventListener("click", ()=>{
    fileInput.click();
})

const onFileInputChange = (event)=>{
    const regexPattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(png|jpg|jpeg|gif)$/i;
    if(event.value){

        if(!(event.value.match(regexPattern))) // checking file format
        {
            customTxt.innerHTML = "File format isn't supported"
        }

        else{
            let usedSpace = 0;
            let currentFileSize = 0;
            const usedFileSize = JSON.parse(localStorage.getItem("space"));
            const conversion = 1024*1024;
            const currentFileCount = event.files.length;

            for (let i = 0; i < currentFileCount; i++) {
                currentFileSize += (event.files[i].size) / conversion // 1 mb = 1024*1024 bytes
            }
            
            if(usedFileSize + currentFileSize > 10)
            {
                customTxt.innerHTML = "Upload Image";
                setTimeout(()=>alert("There is not enough space on the disk"), 1);
                return;
            }

            usedSpace = usedFileSize + currentFileSize;
            localStorage.setItem("space", usedSpace);

            storageUpdate(usedSpace);

            if(currentFileCount > 1)
            {
                return customTxt.innerHTML = "Upload completed";
            }

            customTxt.innerHTML =  event.value.slice(12, 29);  // remove fakepath
        }
    }

    // if there was no photo uploaded then keep the custom text the same
    else{
        customTxt.innerHTML = "Upload Image";
    }
}
// change the custom text 
//fileInput.addEventListener("change", onFileInputChange(this));



