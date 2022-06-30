const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active') // adds active class to panel clicked
    })
})

function removeActiveClasses() {
    panels.forEach(panel => { // removes active class when you click on new panel
        panel.classList.remove('active')
    })
}

















