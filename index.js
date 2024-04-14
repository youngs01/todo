$(document).ready(function () {
    const taskElement = document.querySelector(".task-element");
    let searchInput = document.querySelector(".search-input");
    const listElement = document.querySelector(".list-element")
    const searchBtn = document.querySelector(".search-btn");
    const editInput = document.querySelector(".edit-input");
    const editBtn = document.querySelector(".edit-btn")




    let p = document.createElement("p");
    p.classList.add("text-center", "paragraph")
    p.textContent = "Your tasks appears here"
    listElement.appendChild(p)

    taskElement.addEventListener("click", function (event) {
        if (event.target.classList.contains("task-element")) {
            searchInput.focus();
        }
    })

    searchBtn.addEventListener("click", function () {
        if (searchInput.value === "") {
            alert("write something")
            searchInput.focus()
        } else {
            p.remove()
            creatingLi()
            savingData()


        }
    });

    function creatingLi() {
        let li = document.createElement("li");
        li.textContent = searchInput.value;
        let div = document.createElement("div");

        var span1 = document.createElement("span");
        span1.classList.add("span1", "btn");
        span1.setAttribute("data-bs-toggle", "modal");
        span1.setAttribute("data-bs-target", "#exampleModal");
        span1.innerHTML = '<i class="fas fa-pen"></i>';
                
        let span2 = document.createElement("span");
        span2.innerHTML = '<i class ="fas fa-xmark"></i>';
        span2.classList.add("span2")
        div.appendChild(span1);
        div.appendChild(span2);
        li.appendChild(div);
        listElement.appendChild(li)
        searchInput.value = "";

    }

let arr = [];

document.addEventListener("click", function (clicks) {
    if (clicks.target.classList.contains("fa-pen") || clicks.target.tagName === "SPAN") {
        let closestLi = clicks.target.closest("li");
        arr.push(closestLi);
        // console.log(arr);
    }
    
    if(clicks.target.classList.contains("edit-btn")){
        // console.log(arr);
      if(editInput.value != ''){
        arr[0].firstChild.textContent = editInput.value
        arr.pop()
        savingData()
        editInput.value = "";
      }
      else{
        alert("write something to change task heading")
      }
}
});


    listElement.addEventListener("click", function (click) {
        if (click.target.tagName === "LI") {
            click.target.classList.toggle("checked");
            savingData()
        }
        else if (click.target.classList.contains("span2") || click.target.classList.contains("fa-xmark")) {
            click.target.closest("li").remove()
            savingData()
        }
    });



    function savingData() {
        localStorage.setItem("data", listElement.innerHTML);
    }

    function getData() {
        listElement.innerHTML = localStorage.getItem("data")
    } getData();
});
