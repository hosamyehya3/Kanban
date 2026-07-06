const addinfo = document.getElementById("addinfo");
const main = document.getElementById("main");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const CardForm = document.querySelector('.CardForm');
const xmark = document.querySelector(".xmark");
const close = document.getElementById("close");
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
//# sourceMappingURL=main.js.map