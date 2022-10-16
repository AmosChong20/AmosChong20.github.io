const workspaceBtn = document.querySelector(".eql-btn");

const workspaceul = document.querySelector(".workspaceul");

workspaceBtn.addEventListener("click", e => {
    workspaceul.classList.toggle("show-workspaceul");
})