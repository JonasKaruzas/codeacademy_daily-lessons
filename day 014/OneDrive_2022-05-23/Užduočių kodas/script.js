// čia rašykite užduoties kodą
// 1
const btn = document.querySelector("button");
btn.innerText = "Mygtukas";

// 2
const para1 = document.querySelectorAll("p");
para1[1].innerText = "Naujas tekstas!";

// 3
const newPara = document.createElement("p");
const content = document.querySelector(".content");

newPara.innerText = "Naujausiass ir paskutinis paragrafas.";
content.append(newPara);

// Mano
let moreButtons = false;

btn.addEventListener("click", uzduotis2);

let allBtn = document.querySelectorAll('.button');

function uzduotis2() {
    const img = document.querySelector("#image");
    img.setAttribute('src','https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574');
    
    const allPara = document.querySelectorAll('p');
    
    for(p of allPara){
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }

    if(!moreButtons) {
        moreButtons = true;
            const newBtn1 = document.createElement('button');
            const newBtn2 = document.createElement('button');
            newBtn1.innerText = ' -> As desinej';
            newBtn2.innerText = 'As kairej <- ';
            newBtn1.classList.add('button');
            newBtn2.classList.add('button');
            newBtn1.style.marginLeft = '2rem';
            newBtn2.style.marginRight = '2rem';
            
            const btnContainer = document.querySelector('.button__container');
            btnContainer.append(newBtn1);
            btnContainer.prepend(newBtn2);

            allBtn = document.querySelectorAll('.button');
            btn.removeEventListener('click', uzduotis2);
            addClickEvent(allBtn);
    }

    btn.innerText = 'As kitoks';

}

function addClickEvent(allBtn) {
    for(let oneBtn of allBtn){
        oneBtn.addEventListener('click', function(){
            oneBtn.innerText = 'AAAAAAAAA';
        })
    }
}



const foto = document.querySelector('img')
foto.addEventListener('click', function() {
    foto.src = 'https://images.unsplash.com/photo-1653256513370-8d0d519b9477?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1622';
})