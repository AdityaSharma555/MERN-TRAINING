
function fetchData() {
    let data = fetch("https://fakestoreapi.com/products");
    return data;
}

let fetchedData = fetchData();
console.log(fetchedData);

let productGrid = document.getElementById("products");


function updateProducts(data) {

    data.forEach(element => {
     
        let product = document.createElement("div");
    
        let title = document.createElement("h6")
        title.innerText = element["title"];
    
        let category = document.createElement("p")
        category.innerText = element["category"]
    
        product.appendChild(title)
        product.appendChild(category)
    
        productGrid.appendChild(product);
    });
    
}

fetchedData
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    updateProducts(data);
})
.catch((error)=>{
    console.log(error);
})

