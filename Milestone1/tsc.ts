const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click',()=>{
    if (skills.style.display ==='none') {
        skills.style.display = 'blocks'
    }
    else{
        skills.style.display = 'none'
    }
}) ;