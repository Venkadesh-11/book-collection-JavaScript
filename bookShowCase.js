let btn1 = document.getElementById("btn1")
let section = document.querySelector("section")
let overlay = document.querySelector(".overlay")
btn1.addEventListener("click", () => {
    section.style.display = "block"
    overlay.style.display = "block"
})
let Main=document.querySelector("main")
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    let name=document.getElementById("name")
    let author=document.getElementById("author")
    let disc=document.getElementById("disc")
    section.style.display = "none"
    overlay.style.display = "none"
    let Main1=document.createElement("main")
    Main1.classList.add("main1")
    let h3=document.createElement("h3")
    let h5=document.createElement("h5")
    let p=document.createElement("p")
    if(name.value==""||author.value==""||disc.value==""){
        alert("FillOut all Details")
        return
    }
    h3.innerText=name.value
    h5.innerText=author.value
    p.innerText=disc.value
    console.log(p.innerHTML);
    
    Main1.append(h3)
    Main1.append(h5)
    Main1.append(p)
   Main.after(Main1)

    
})
