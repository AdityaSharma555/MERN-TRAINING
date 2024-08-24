

// let myDiv = document.getElementById("main");
// let footer = document.getElementById("footer")
// let myBtn = document.getElementById("main-btn")

// let newDiv = document.createElement("div")
// newDiv.style.height = "100px"
// newDiv.style.width = "100px"
// newDiv.style.backgroundColor = "lightgreen"


// myBtn.onclick = () => {
//     myDiv.appendChild(newDiv);
//     footer.appendChild(newDiv);
// }

/////////////////////////////////////////////////

let mainDiv = document.getElementById("main");
let footerDiv = document.getElementById("footer")
let myBtn = document.getElementById("main-btn")


mainDiv.addEventListener("click", () => {
    let newDiv = document.createElement("div")
    newDiv.style.height = "100px"
    newDiv.style.width = "100px"
    newDiv.style.backgroundColor = "lightgreen"

    let newFooterDiv = {...newDiv};
    mainDiv.appendChild(newDiv);
    footerDiv.appendChild(newFooterDiv);
    document.insertBefore(newFooterDiv,newDiv);
});

/////////////////////////////////////////////////

document.getElementById("name").addEventListener("change", function() {
    let fieldValue = document.getElementById("name").value;
    console.log(fieldValue);
})


