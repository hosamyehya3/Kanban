const addinfo = document.getElementById("addinfo");
const main = document.getElementById("main");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const CardForm = document.querySelector('.CardForm');
const xmark = document.querySelector(".xmark");
const close = document.getElementById("close");
const FormControlInput1 = document.getElementById("FormControlInput1");
const clickMainBtn = document.getElementById("clickMainBtn");
const waringValid = document.getElementById('waringValid');
const text = document.getElementById("text");
const date = document.getElementById("date");
const description = document.getElementById("FormControlTextarea1");
const Card = document.querySelectorAll("Card");
const rowdata = document.getElementById('rowdata');
addinfo?.addEventListener("click", () => {
    main?.classList.add("hidden");
    nav?.classList.add("hidden");
    footer?.classList.add("hidden");
    document.body.classList.add("linear");
    CardForm?.classList.remove("d-none");
});
xmark?.addEventListener("click", () => {
    main?.classList.remove("hidden");
    nav?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    document.body.classList.remove("linear");
    CardForm?.classList.add("d-none");
});
close?.addEventListener("click", () => {
    main?.classList.remove("hidden");
    nav?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    document.body.classList.remove("linear");
    CardForm?.classList.add("d-none");
});
document.body.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        main?.classList.remove("hidden");
        nav?.classList.remove("hidden");
        footer?.classList.remove("hidden");
        document.body.classList.remove("linear");
        CardForm?.classList.add("d-none");
    }
});
function IsnameValid() {
    let regex = /^[A-Z][a-z0-9_]{3,}$/;
    if (regex.test(FormControlInput1.value)) {
        waringValid?.classList.add("d-none");
        FormControlInput1.classList.remove("valid");
        FormControlInput1.classList.add("first");
    }
    else {
        waringValid?.classList.remove("d-none");
        FormControlInput1.classList.add("valid");
        FormControlInput1.classList.remove("first");
    }
    return regex.test(FormControlInput1.value);
}
let arr = [];
if (localStorage.getItem("saveCard") !== null) {
    arr = JSON.parse(localStorage.getItem("saveCard"));
    DisplayTheCard();
}
function DisplayTheCard() {
    let card = {
        name: FormControlInput1.value,
        Priority: text.value,
        date: date.value,
        description: description.value
    };
    arr.push(card);
    localStorage.setItem("saveCard", JSON.stringify(arr));
    let box = "";
    for (let i = 0; i < arr.length; i++) {
        box += `   <div class="border Card mx-auto my-4 rounded-3  px-3 bg-white shadow">
                    <div class="contain d-flex justify-content-between mt-3">
                        <div class="d-flex justify-content-center">    <div class="circle mt-1"></div>
                        <p class="numberChange ms-2">#00${i + 1}</p></div>
                    
                        <div class="d-flex btns ">
                            <div title="Delete Task" class="mx-3 delete"><i class="fa-solid fa-trash-can fa-xs" style="color: rgb(160, 175, 195);"></i></div>
                            <div title="Edit Task" class="updata"><i class="fa-solid fa-pen fa-xs" style="color: rgb(160, 175, 195);"></i></div>
                        </div>
                    </div>
                    <p class="fw-bold m-0">${arr[i]?.name}</p>
                    <p class="m-0 text-secondary">${arr[i]?.description}</p>
                    <div class="Priority my-1"><i class="fa-solid fa-circle fa-2xs" style="color:#c59e02;"></i><span 
                            class="Priority mx-1">${arr[i]?.Priority}</span> </div>
                    <div class="timer border-bottom pb-2">
                        <i class="fa-regular fa-clock fa-2xs" style="color: rgb(160, 175, 195);"></i>
                        <span class="timerAgo">53m ago</span>
                    </div>
                    <div class="group-btns d-flex">
                        <div class="stratBtn d-flex justify-content-center align-items-center my-2">
                            <i class="fa-solid fa-play fa-2xs" style="color: rgb(187, 77, 0);"></i> <span>Start</span>
                        </div>
                        <div class="stratBtn complete d-flex mx-3 justify-content-center align-items-center my-2">
                            <i class="fa-solid fa-check fa-2xs" style="color: rgb(12, 131, 94);"></i>
                            <span>Complete</span>
                        </div>
                    </div>
                </div>
`;
        if (rowdata) {
            rowdata.innerHTML = box;
        }
    }
}
clickMainBtn?.addEventListener("click", () => {
    if (IsnameValid() == true) {
        DisplayTheCard();
        main?.classList.remove("hidden");
        nav?.classList.remove("hidden");
        footer?.classList.remove("hidden");
        document.body.classList.remove("linear");
        CardForm?.classList.add("d-none");
    }
    else {
        console.log("wrong in regex try again");
    }
    ;
});
//# sourceMappingURL=main.js.map