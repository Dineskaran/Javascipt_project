// const buttons = document.querySelectorAll('.Switch');

// const body = document.querySelector('body');

// buttons.forEach((Switch) => {
//     Switch.addEventListener('click', (e) => {
//     if (e.target.id === 'gray') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'green') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'red') {
//         body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === 'brown') {
//         body.style.backgroundColor = e.target.id;
//       }  
//   });
// });

const buttons = document.querySelectorAll('.Switch');
const body = document.querySelector('body');
buttons.forEach((element) => {
    element.addEventListener('click',() =>{
        console.log(element.innerHTML);
        body.style.backgroundColor=element.innerHTML;
    })
})