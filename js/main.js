let testNumber = document.querySelectorAll(".test-number")
let counter = 0
const radioInp = document.querySelectorAll('input[type="radio"]')
let mark = 0
const result = document.querySelector("#result")
const checkBox = document.querySelectorAll('input[type="checkbox"]')
const CheckBoxUl = document.querySelectorAll(".CheckBoxUl")

testNumber.forEach(function(el){
    counter =  ++counter
    el.innerText = counter + ". "
})


const sendBtn = document.querySelector ('#sendBtn')
sendBtn.addEventListener("click",sendMail)


function sendMail(e){
    e.preventDefault();
    radioInp.forEach(function(el){
    //підсвітити рядок залежно від правильності відповіді
        if (el.value == "true" && el.checked == true){
            ++mark
            el.style.background = "red"
            el.parentElement.style.background="green"
        }
        else if(el.value != "true" && el.checked == true){ 
            el.parentElement.style.background="red"
        }
    //підсвітити всі правильні відповіді radio
        radioInp.forEach(function(elem){
            if(elem.value == "true"){
                elem.parentElement.style.background="green"
            }
        })
    })


    checkBox.forEach(function(elem){
    //підсвітити рядок залежно від правильності відповіді
        if (elem.value == "true" && elem.checked){
        elem.parentElement.style.background="green"
    }
        else if (elem.value != "true" && elem.checked){
            elem.parentElement.style.background="red"
        }
    //підсвітити всі правильні відповіді checkbox
    checkBox.forEach(function(elem){
        if (elem.value == "true"){
            elem.parentElement.style.background="green"
        }
    })
    })




//підрахунок кількості правильних відповідей checkbox
    for (let i =0; i <CheckBoxUl.length; i++){
        let trueAnswer = 0
        let falseAnswer = 0 
         for (let y = 0; y < 4; y++){
             if(CheckBoxUl[i].children[y].children[0].checked 
                &&  CheckBoxUl[i].children[y].children[0].value == "true"){
                    trueAnswer +=1
             }
             else if (CheckBoxUl[i].children[y].children[0].checked 
                &&  CheckBoxUl[i].children[y].children[0].value != "true"){
                    falseAnswer +=1
             }
         }
         if (trueAnswer== falseAnswer){
            console.log(0)
            mark += 0
         }
         else if (trueAnswer ==2  && falseAnswer ==0){
            mark += 1
         }

         else if (trueAnswer > falseAnswer){
            console.log(0)
            mark += 0.5
         }
         trueAnswer = 0
         falseAnswer = 0 
     }


    result.innerText = mark
    this.remove()
}

