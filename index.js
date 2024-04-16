
const postdata = (data) => {
    fetch("http://localhost:3000/products",{
        method:"POST",
        headers:{"content-type":"applicatoin/json"},
        body: JSON.stringify(data)
    })
}


const productsdata = (e) => {
    e.preventDefault()

    let data ={
        
    title:document.getElementById('title').value,
    price:document.getElementById('price').value,
    url:document.getElementById('url').value
    }
    postdata(data)
    
}


    document.getElementById("form").addEventListener("submit",productsdata)