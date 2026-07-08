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
const timerAgo = document.querySelector(".timerAgo");
const clickUpdateBtn = document.getElementById("clickUpdateBtn");
const indexOfArray = document.getElementById("indexOfArray");
const rowdata_progress = document.getElementById("rowdata_progress");
let arr = [];
addinfo?.addEventListener("click", () => {
    main?.classList.add("hidden");
    nav?.classList.add("hidden");
    footer?.classList.add("hidden");
    document.body.classList.add("linear");
    CardForm?.classList.remove("d-none");
    resetAllBtn();
});
xmark?.addEventListener("click", () => {
    main?.classList.remove("hidden");
    nav?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    document.body.classList.remove("linear");
    CardForm?.classList.add("d-none");
    clickUpdateBtn?.classList.add("d-none");
    clickMainBtn?.classList.remove("d-none");
});
close?.addEventListener("click", () => {
    main?.classList.remove("hidden");
    nav?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    document.body.classList.remove("linear");
    CardForm?.classList.add("d-none");
    clickUpdateBtn?.classList.add("d-none");
    clickMainBtn?.classList.remove("d-none");
});
document.body.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        main?.classList.remove("hidden");
        nav?.classList.remove("hidden");
        footer?.classList.remove("hidden");
        document.body.classList.remove("linear");
        CardForm?.classList.add("d-none");
        clickUpdateBtn?.classList.add("d-none");
        clickMainBtn?.classList.remove("d-none");
    }
});
NoTasks();
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
function getFromLocalstroge() {
    if (localStorage.getItem("saveCard") !== null) {
        arr = JSON.parse(localStorage.getItem("saveCard"));
        console.log(JSON.parse(localStorage.getItem("saveCard")));
        DisplayTheCard();
    }
}
getFromLocalstroge();
function AddValue() {
    let count = 0;
    let timer = setInterval(() => {
        count++;
        console.log(`minute ${count}`);
    }, 60000);
    let card = {
        name: FormControlInput1.value,
        Priority: text.value,
        date: date.value,
        description: description.value,
        timecount: count
    };
    arr.push(card);
    localStorage.setItem("saveCard", JSON.stringify(arr));
}
function DisplayTheCard() {
    let box = "";
    for (let i = 0; i < arr.length; i++) {
        box += `   <div class="border Card mx-auto my-4 rounded-3  px-3 bg-white shadow">
                    <div class="contain d-flex justify-content-between mt-3">
                        <div class="d-flex justify-content-center">    <div class="circle mt-1"></div>
                        <p class="numberChange ms-2">#00${i + 1}</p></div>
                    
                        <div class="d-flex btns ">
                            <div onclick="DeleteCard(${i})" title="Delete Task" class="mx-3 delete"><i class="fa-solid fa-trash-can fa-xs" style="color: rgb(160, 175, 195);"></i></div>
                            <div onclick="updata(${i}) , updateAndDisplay()" title="Edit Task" class="updata"><i class="fa-solid fa-pen fa-xs" style="color: rgb(160, 175, 195);"></i></div>
                        </div>
                    </div>
                    <p class="fw-bold m-0">${arr[i]?.name}</p>
                    <p class="m-0 text-secondary">${arr[i]?.description}</p>
                    <div class="Priority my-1"><i class="fa-solid fa-circle fa-2xs" style="color:#c59e02;"></i><span 
                            class="Priority mx-1">${arr[i]?.Priority}</span> </div>
                    <div class="timer d-flex border-bottom pb-2">
                  <div class="dateBtn">
                        <div class="flex  items-center gap-1.5 ">
                            <i class="fa-regular fa-calendar"></i>
                            <span>${arr[i].date}</span>
                        </div>
                    </div>
                    <div class="ms-3" >
                        <i class="fa-regular fa-clock fa-2xs" style="color: rgb(160, 175, 195);"></i>
                        <span class="timerAgo">${arr[i]?.timecount}m ago</span> </div>
                    </div>


                    <div class="group-btns d-flex">
                        <div class="stratBtn d-flex justify-content-center align-items-center my-2">
                            <i class="fa-solid fa-play fa-2xs" style="color: rgb(187, 77, 0);"></i> <span onclick="secondTable(${i})">Start</span>
                        </div>
                        <div class="stratBtn complete d-flex mx-3 justify-content-center align-items-center my-2">
                            <i class="fa-solid fa-check fa-2xs" style="color: rgb(12, 131, 94);"></i>
                            <span>Complete</span>
                        </div>
                    </div>
                </div>
`;
    }
    if (rowdata) {
        rowdata.innerHTML = box;
    }
    if (indexOfArray) {
        indexOfArray.innerHTML = `${arr.length}  tasks`;
    }
}
clickMainBtn?.addEventListener("click", () => {
    if (IsnameValid() == true) {
        AddValue();
        DisplayTheCard();
        resetAllBtn();
        main?.classList.remove("hidden");
        nav?.classList.remove("hidden");
        footer?.classList.remove("hidden");
        document.body.classList.remove("linear");
        CardForm?.classList.add("d-none");
        clickUpdateBtn?.classList.add("d-none");
    }
    else {
        console.log("wrong in regex try again");
    }
});
function DeleteCard(index) {
    console.log(index);
    arr.splice(index, 1);
    localStorage.setItem("saveCard", JSON.stringify(arr));
    DisplayTheCard();
    NoTasks();
}
function resetAllBtn() {
    FormControlInput1.value = "";
    text.value = "";
    date.value = "";
    description.value = "";
}
let NewIndex = 0;
function updata(index) {
    NewIndex = index;
    FormControlInput1.value = arr[index].name;
    text.value = arr[index].Priority;
    date.value = arr[index].date;
    description.value = arr[index].description;
    CardForm?.classList.remove("d-none");
    main?.classList.add("hidden");
    nav?.classList.add("hidden");
    footer?.classList.add("hidden");
    document.body.classList.add("linear");
    clickMainBtn?.classList.add("d-none");
    clickUpdateBtn?.classList.remove("d-none");
}
function updateAndDisplay() {
    arr[NewIndex].name = FormControlInput1.value;
    arr[NewIndex].Priority = text.value;
    arr[NewIndex].date = date.value;
    arr[NewIndex].description = description.value;
    localStorage.setItem("saveCard", JSON.stringify(arr));
    DisplayTheCard();
}
clickUpdateBtn?.addEventListener("click", () => {
    updateAndDisplay();
    main?.classList.remove("hidden");
    nav?.classList.remove("hidden");
    footer?.classList.remove("hidden");
    document.body.classList.remove("linear");
    CardForm?.classList.add("d-none");
    resetAllBtn();
    clickUpdateBtn.classList.add("d-none");
    clickMainBtn?.classList.remove("d-none");
});
const rowdata_2 = document.getElementById("rowdata_2");
let SecondArr = [];
function secondTable(index) {
    let result = arr[index];
    console.log(result);
    SecondArr.push(result);
    console.log(SecondArr);
    localStorage.setItem("Progress", JSON.stringify(SecondArr));
    DeleteCard(index);
    localStorage.setItem("Progress", JSON.stringify(arr));
    displayProgress();
    localStorage.setItem("Progress", JSON.stringify(SecondArr));
}
function NoTasks() {
    if (!arr.length) {
        if (rowdata) {
            console.log(55555555555555);
            rowdata.innerHTML = `
       <div class="rowdata  position-absolute">
              <i class="ms-5 fa-regular fa-folder-open fa-2xl" style="color: rgb(197, 206, 219);"></i>
              <div class="folder-info mt-2">
                  <p class="m-0 ms-4 fw-bold ">No tasks yet</p>
                  <p class="m-0 fw-medium size ms-3">Click + to add one</p>
              </div>
          </div> 
`;
        }
    }
    console.log(arr);
}
const counter = document.getElementById("count");
const FormControlTextarea1 = document.getElementById("FormControlTextarea1");
FormControlTextarea1?.addEventListener("input", (e) => {
    const target = e.target;
    const charCount = target.value.length;
    if (counter) {
        counter.value = charCount.toString();
        console.log(counter.value);
        counter.innerHTML = `${counter.value} /500`;
    }
});
const ProgressLength = document.getElementById("ProgressLength");
function displayProgress() {
    let cartona = "";
    for (let i = 0; i < SecondArr.length; i++) {
        cartona += `
              <div class="border Card mx-auto my-4 rounded-3  px-3 bg-white shadow">
                    <div class="contain d-flex justify-content-between mt-3">
                        <div class="d-flex justify-content-center">    <div class="circle mt-1"></div>
                        <p class="numberChange ms-2">#00${i + 1}</p></div>
                    
                        <div class="d-flex btns ">
                            <div onclick="DeleteCardProgress(${i})" title="Delete Task" class="mx-3 delete"><i class="fa-solid fa-trash-can fa-xs" style="color: rgb(160, 175, 195);"></i></div>
                            <div onclick="updataProgress(${i}) , updateAndDisplay()" title="Edit Task" class="updata"><i class="fa-solid fa-pen fa-xs" style="color: rgb(160, 175, 195);"></i></div>
                        </div>
                    </div>
                    <p class="fw-bold m-0">${SecondArr[i]?.name}</p>
                    <p class="m-0 text-secondary">${SecondArr[i]?.description}</p>
                    <div class="Priority my-1"><i class="fa-solid fa-circle fa-2xs" style="color:#c59e02;"></i><span 
                            class="Priority mx-1">${SecondArr[i]?.Priority}</span> </div>
                    <div class="timer d-flex border-bottom pb-2">
                  <div class="dateBtn">
                        <div class="flex  items-center gap-1.5 ">
                            <i class="fa-regular fa-calendar"></i>
                            <span>${SecondArr[i].date}</span>
                        </div>
                    </div>
                    <div class="ms-3" >
                        <i class="fa-regular fa-clock fa-2xs" style="color: rgb(160, 175, 195);"></i>
                        <span class="timerAgo">${SecondArr[i]?.timecount}m ago</span> </div>
                    </div>


                    <div class="group-btns d-flex">
                        <div onclick="returnToDo(${i})" class="stratBtn ToDo d-flex justify-content-center align-items-center my-2">
                       <i class="fa-solid fa-arrow-rotate-right fa-2xs" style="color: rgb(112, 118, 124);"></i>    <span >To Do</span>
                        </div>
                        <div class="stratBtn complete d-flex mx-3 justify-content-center align-items-center my-2">
                            <i class="fa-solid fa-check fa-2xs" style="color: rgb(12, 131, 94);"></i>
                            <span>Complete</span>
                        </div>
                    </div>
                </div>
           `;
        if (rowdata_progress) {
            rowdata_progress.innerHTML = cartona;
        }
        if (ProgressLength) {
            ProgressLength.innerHTML = `${SecondArr.length} tasks`;
        }
    }
}
function DeleteCardProgress(index) {
    SecondArr.splice(index, 1);
    localStorage.setItem("Progress", JSON.stringify(SecondArr));
    displayProgress();
    if (!SecondArr.length) {
        if (rowdata_progress) {
            console.log(55555555555555);
            rowdata_progress.innerHTML = `
       <div class="rowdata  position-absolute">
              <i class="ms-5 fa-regular fa-folder-open fa-2xl" style="color: rgb(197, 206, 219);"></i>
              <div class="folder-info mt-2">
                  <p class="m-0 ms-4 fw-bold ">No tasks yet</p>
                  <p class="m-0 fw-medium size ms-3">Click + to add one</p>
              </div>
          </div> 
`;
        }
    }
    if (ProgressLength) {
        ProgressLength.innerHTML = `${SecondArr.length} tasks`;
    }
}
function returnToDo(index) {
    let newObj = SecondArr[index];
    arr.unshift(newObj);
    DeleteCardProgress(0);
    localStorage.setItem("Progress", JSON.stringify(SecondArr));
    localStorage.setItem("Progress", JSON.stringify(arr));
    DisplayTheCard();
}
//# sourceMappingURL=main.js.map