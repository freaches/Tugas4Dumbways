let myProject =[]

let days =""
let months = ""

function waktu (awal,akhir){
    let dataStart = new Date (awal)
    let dataEnd = new Date (akhir)
    let oneDay = 1000 * 3600 * 24

    let selisih = dataEnd.getTime() - dataStart.getTime()
    let totaldays = selisih/oneDay
    let totalmonths = Math.floor (totaldays/30)
        totaldays = totaldays % 30

    days = totaldays
    months = totalmonths
}

function isiProject(event) {
    event.preventDefault()

    let projectName = document.getElementById("my-project").value
    let awalwaktu = document.getElementById("awal").value
    let akhirwaktu = document.getElementById("akhir").value
    let description = document.getElementById("description").value
    let usingNode = document.getElementById("node-js").checked
    let usingReact = document.getElementById("react-js").checked
    let usingNext = document.getElementById("next-js").checked
    let usingType= document.getElementById("typeScript").checked
    let image= document.getElementById("input-blog-image").files
    
    image = URL.createObjectURL (image[0])

    waktu(awalwaktu,akhirwaktu)

    const data =  {
        projectName,
        awal,
        akhir,
        description,
        days,
        months,
        usingNode,
        usingReact,
        usingNext,
        usingType,
        image
    }

    myProject.push(data)
    console.log(myProject)

    renderMyProject()
}

function renderMyProject() {

    document.getElementById("contents").innerHTML =""
     
    for (let i = 0 ; i < myProject.length ; i++){
        document.getElementById("contents").innerHTML += `<div class="project-list-items">
        <img src="${myProject[i].image}" alt="makan"/>
        <h1><a href="my-project-detail.html" target="_blank">${myProject[i].projectName}</a></h1>
        <p style="font-size: 15px; color: grey;">Durasi : ${myProject[i].months} Bulan</p>
        <p>
        ${myProject[i].description}
        </p>
        
        ${renderIcon(myProject[i])}
        <div class="edit">
            <button>Edit</button>
            <button>Delete</button>
        </div>`
    }
}

function renderIcon(icon) {
    let renderImage = ""

    if (icon.usingNode == true){
        renderImage += `<i class="fa-brands fa-node-js"></i>`
    }
    if (icon.usingNext == true){
        renderImage += `<i class="fa-brands fa-react"></i>`
    }
    if (icon.usingReact == true){
        renderImage += `<i class="fa-brands fa-vuejs"></i>`
    }
    if (icon.usingType == true){
        renderImage += `<i class="fa-brands fa-js"></i>`
    }
    
    return renderImage
}