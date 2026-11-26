// let arr = ["item1","item2","item3","item4"];

// arr.map((element) =>{
//     let li = document.createElement("li");
//     li.innerHTML = element;
//     let ul = document.getElementById("list");
//     ul.appendChild(li);

//     li.addEventListener("click", ()=>{
//         li.style.display = "none";
//     })
// })


let arr = [];

function handleSubmit(event){
    event.preventDefault();
    let data = document.getElementById("task").value;
    let ul = document.getElementById("list")
    arr.push(data);
    console.log(arr);

    ul.innerHTML = "";
    arr.map((element) => {
        let li = document.createElement("li");
        li.innerHTML = element;
        ul.appendChild(li);
        document.getElementById("task").value = "";

        li.addEventListener("click", () => {
            li.style.display = "none";
        })
    })
}