
//Things that need to be animated all the time
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.pagebox, .mainpage_header, .mainpage_image');
hiddenElements.forEach((el) => observer.observe(el));

//Things that need to be animated once
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ShowIn');
        }
        else {
            entry.target.classList.remove('ShowIn');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.resumebox');
hiddenElements2.forEach((el) => observer2.observe(el));