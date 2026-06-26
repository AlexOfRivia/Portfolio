/*TODO
- impement reading progress bar
- implement darkmode
- implement animation loading only after scrolling */


document.addEventListener("DOMContentLoaded", () =>{
    const projects = document.querySelectorAll(".project-item");    //looking for all projects in html doc

    // Poprawiono: ujednolicono nazwę na observerOptions (z 's' na końcu)
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