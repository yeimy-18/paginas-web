const toggle = document.querySelectorAll('.faq-toggle');

toggle.forEach(toggle =>{
    toggle.addEventListener('click', ()=> {
        toggle.parentNode.classList.toggle('active')
    })
})