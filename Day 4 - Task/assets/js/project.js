let myProject =[{
    projectName : "Makan Mukbang Kuy Apps",
    duration : "1 Bulan",
    description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Condimentum lacinia quis vel eros donec ac odio tempor. 
    Eget gravida cum sociis natoque penatibus et magnis dis parturient. 
    Interdum velit laoreet id donec ultrices tincidunt arcu non.`,
    usingNode : true,
    usingReact : true,
    usingNext : true,
    usingType : true,
    image : "./assets/image/makanan.jpg"
}]

function isiProject(event) {
    event.preventDefault()

    let projectName = document.getElementById("my-project").value
    let awalWaktu = document.getElementById("awal").value
    let akhirWaktu = document.getElementById("akhir").value
    let description = document.getElementById("description").value
    let usingNode = document.getElementById("node-js").checked
    let usingReact = document.getElementById("react-js").checked
    let usingNext = document.getElementById("next-js").checked
    let usingType= document.getElementById("typeScript").checked
    let image= document.getElementById("input-blog-image").files

    if(projectName == ""){
        return alert("Nama Project harus di isi")
      } else if(awalWaktu == "") {
        return alert("Tanggal awal harus di isi") 
      } else if(akhirWaktu == "") {
        return alert("Tanggal akhir harus di isi") 
      } else if(description == "") {
        return alert("Deskripsi harus di isi") 
      } else if(image == "") {
        return alert("image harus di isi") 
      }
    
    image = URL.createObjectURL (image[0])

    const data =  {
        projectName,
        awalWaktu,
        akhirWaktu,
        description,
        duration : "1 Bulan",
        image
    }

    myProject.unshift(data)
    console.log(myProject)

    renderMyProject()
}

function renderMyProject() {

    document.getElementById("contents").innerHTML =""
     
    for (let i = 0 ; i < myProject.length ; i++){
        document.getElementById("contents").innerHTML += `<div class="project-list-items">
        <img src="${myProject[i].image}" alt="makan"/>
        <h1><a href="my-project-detail.html" target="_blank">${myProject[i].projectName}</a></h1>
        <p style="font-size: 15px; color: grey;">Durasi : ${myProject[i].duration}</p>
        <p>
        ${myProject[i].description}
        </p>
        
        <i class="fa-brands fa-node-js"></i>    
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-vuejs"></i>
        <i class="fa-brands fa-js"></i>
        <div class="edit">
            <button>Edit</button>
            <button>Delete</button>
        </div>`
    }
}