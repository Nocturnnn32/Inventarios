
const options = document.querySelectorAll('.Main-a');
const sections = document.querySelectorAll('.Main-section');


options.forEach((element, index) => {
    element.addEventListener('click', () => {

        sections.forEach((section) => {
            section.classList.remove('active');
        });
        options.forEach((option) => {
            option.classList.remove('active');
        });

        sections[index].classList.add('active');
        element.classList.add('active');
    });
});
