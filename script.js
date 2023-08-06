const room_list = document.querySelector(".room-list");
const body = document.body;
const room_img = document.querySelectorAll(".room__img-wrap");
// Disable scroll

// Show detail room
room_list.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = e.target.closest(".room-list__top");
    if (parent) {
        const openElement = parent.querySelector(".room-list__open");
        openElement.classList.toggle("rotate-45deg");

        const bottomElement = parent.nextElementSibling;
        bottomElement.classList.toggle("show-detail");
    }
});

let curIndex = 0;
let maxIndex;
screen.width > 992
    ? (maxIndex = room_img.length - 4)
    : (maxIndex = room_img.length - 1);
const prevImgBtn = document.querySelector(".btn-prev");
const nextImgBtn = document.querySelector(".btn-next");

prevImgBtn.addEventListener("click", function () {
    if (curIndex === 0) {
        curIndex = maxIndex;
    } else curIndex--;
    room_img.forEach((room) => {
        room.style.transform = `translateX(calc(-${curIndex} * 100% - ${curIndex} * 20px))`;
        return room;
    });
});

nextImgBtn.addEventListener("click", function () {
    if (curIndex === maxIndex) {
        curIndex = 0;
    } else curIndex++;
    room_img.forEach((room) => {
        room.style.transform = `translateX(calc(-${curIndex} * 100% - ${curIndex} * 20px))`;
        return room;
    });
});
