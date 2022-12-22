const bar1=document.querySelector('.bar1');
const bar2=document.querySelector('.bar2');
const bar3=document.querySelector('.bar3');
const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-links-wrapper');
const navLinks=document.querySelectorAll('.nav-link-wrapper'); 

nav.style.transition = `${667/window.innerHeight}s ease-in`    

burger.addEventListener('click',()=>{

nav.classList.toggle('show');
bar1.classList.toggle('magic1');
bar2.classList.toggle('magic2');
bar3.classList.toggle('magic3');
navLinks.forEach(link => {
    link.classList.toggle('fade');
});

});

const team_name = document.querySelector('.name');
const team_description = document.querySelector('.description');
const wwd_items = document.querySelectorAll('.what-we-do-item');
const wwdheading_name = document.querySelector('.what-we-do-heading');
const projects_heading = document.querySelector('.projects-section-heading');
const latest_projects = document.querySelectorAll('.project');

window.addEventListener('load',()=>{
        team_name.classList.add('fade-in-right');
        team_description.classList.add('fade-in-right');
    
})

window.addEventListener('scroll',()=>{
    if(wwdheading_name.getBoundingClientRect().top<window.innerHeight/1.25){
        wwdheading_name.classList.add('fade-in-down');
        wwd_items.forEach(item => {
            item.classList.add('fade-in-right');
        });
    }
    if(projects_heading.getBoundingClientRect().top<window.innerHeight/1.25){
        projects_heading.classList.add('fade-in-down');
        latest_projects.forEach(item => {
            item.classList.add('fade-in-right');
        });
    }
})