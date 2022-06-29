// const btn = document.querySelector('.btn')

// btn.addEventListener('click', (e) =>{
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#333';
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// }
// )

const myForm = document.querySelector('my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const users = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()
    console.log(nameInput.value)
}
