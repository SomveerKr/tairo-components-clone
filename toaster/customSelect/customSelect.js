//for color select
const colorsOptionMenu = document.getElementById("color-select"),
       colorSelectBtn = colorsOptionMenu.querySelector("#color-select .select-btn"),
       colorOptions = colorsOptionMenu.querySelectorAll("#color-options .option"),
       displaycolorTextElement = document.getElementById("display-color-text");

colorSelectBtn.addEventListener("click", () => colorsOptionMenu.classList.toggle("active"));       

colorOptions.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        displaycolorTextElement.innerText = selectedOption;

        colorsOptionMenu.classList.remove("active");
    });
});


//for icons select
const iconsOptionMenu = document.getElementById("icon-select"),
       iconSelectBtn = iconsOptionMenu.querySelector("#icon-select .select-btn"),
       iconOptions = iconsOptionMenu.querySelectorAll("#icon-options .option"),
       displayIconTextElement = document.getElementById("display-icon-text");

iconSelectBtn.addEventListener("click", () => iconsOptionMenu.classList.toggle("active"));       

iconOptions.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        displayIconTextElement.innerText = selectedOption;

        iconsOptionMenu.classList.remove("active");
    });
});


