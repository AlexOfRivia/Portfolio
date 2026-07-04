/*TODO
- impement reading progress bar
- implement darkmode
*/

document.addEventListener("DOMContentLoaded", () =>{
    const projects = document.querySelectorAll(".project-item");    //looking for all projects in html doc
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.nav-menu')

    if (hamburger && navbar) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            navbar.classList.toggle('active');
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    }

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) 
            {
                entry.target.classList.add("appear");       //anmimation plays
                
                observer.unobserve(entry.target);           //we unobserver to play animation only once
            }
        });
    }, observerOptions); 

    projects.forEach(project => {
        projectObserver.observe(project);
    });
});
