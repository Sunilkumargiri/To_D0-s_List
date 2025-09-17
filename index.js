

const addtaskbtn = document.querySelector(".Add");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const tasks = document.querySelector(".alltask");
const clearAll = document.querySelector(".clearAll");

addtaskbtn.addEventListener("click", function () {
    if (title.value !== "" && desc.value !== "") {
        const dl = document.createElement("dl");

        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        const btndiv = document.createElement("div");
        btndiv.classList.add("btndiv");
        // Add text content
        dt.innerText = title.value;
        dd.innerText = desc.value;



        // Delete functionality
        const dlttask = document.createElement("button");
        dlttask.classList.add("delete-btn");
        // Button text
        dlttask.innerText = "Delete Task";

        dlttask.addEventListener("click", function () {
            const userConfirmed = confirm("Are you sure you want to delete all tasks?");
            if (userConfirmed) {
                tasks.removeChild(dl);
            }
        });




        // Create Edit button
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.innerText = "Edit";

        editBtn.addEventListener("click", function () {
            const newTitle = prompt("Edit your title:", dt.innerText);
            const newDesc = prompt("Edit your description:", dd.innerText);

            if (newTitle !== null) dt.innerText = newTitle;
            if (newDesc !== null) dd.innerText = newDesc;
        });





        // Mark as completed functionality 
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.innerText = "Mark as Completed";
        completeBtn.addEventListener("click", function () {
             const userConfirmed = confirm("Are you sure you want to mark as completed ?");
            if (userConfirmed){
            dl.classList.add("completed"); // light green background
            dt.style.textDecoration = "line-through";
            dt.style.color = "rgba(94, 66, 88, 1)";
            dd.style.color = "rgba(233, 221, 230, 1)";
            dl.style.opacity = "0.6"; // faded look
            completeBtn.style.color = "rgba(212, 173, 45, 1)";
            completeBtn.disabled = true; // disable the button after marking as completed
            editBtn.style.display = "none"; // disable edit button after marking as completed
            dlttask.style.display = "none"; // disable delete button after marking as completed 
            }


        });




        // Append children
        btndiv.appendChild(dlttask);
        btndiv.appendChild(editBtn);
        btndiv.appendChild(completeBtn);
        dl.appendChild(dt);
        dl.appendChild(dd);
        dl.appendChild(btndiv);



        // Add to task list
        tasks.appendChild(dl);

        // Clear inputs
        title.value = "";
        desc.value = "";
    }
});





// Clear All Tasks functionality
clearAll.addEventListener("click", function () {
    // Ask for confirmation
    const userConfirmed = confirm("Are you sure you want to delete all tasks?");

    if (userConfirmed) {
        const tasks = document.querySelector(".alltask");
        tasks.innerHTML = ""; // delete all tasks
    }
});