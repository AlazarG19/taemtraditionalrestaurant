let img = document.querySelectorAll(".box img")
console.log("thi")
console.log(img)
img.forEach((image)=>{
    image.addEventListener("click",()=>{
        document.querySelector(".popup-image").style.display = "block"
        document.querySelector(".popup-image img").src = image.getAttribute("src")
    
    })
})
let close = document.querySelector(".popup-image span")
close.onclick  = () =>{
    document.querySelector(".popup-image").style.display = "none"

}