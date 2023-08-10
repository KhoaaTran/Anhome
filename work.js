const work_list = document.querySelector(".work-list");
const body = document.body;

// Show detail work
work_list.addEventListener("click", function (e) {
    // e.preventDefault();

    const parent = e.target.closest(".work-list__top");
    if (parent) {
        const openElement = parent.querySelector(".work-list__open");
        openElement.classList.toggle("rotate-45deg");

        const bottomElement = parent.nextElementSibling;
        bottomElement.classList.toggle("show-detail");
    }
});
