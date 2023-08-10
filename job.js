const job_list = document.querySelector(".job-list");
const body = document.body;

// Show detail job
job_list.addEventListener("click", function (e) {
    // e.preventDefault();

    const parent = e.target.closest(".job-list__top");
    if (parent) {
        const openElement = parent.querySelector(".job-list__open");
        openElement.classList.toggle("rotate-45deg");

        const bottomElement = parent.nextElementSibling;
        bottomElement.classList.toggle("show-detail");
    }
});
