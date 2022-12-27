
let oldLead = []
let mylead =[]
let ulEl = document.getElementById("ul_el");
const InputEl = document.getElementById("input");
const inputBtn = document.getElementById("input_btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("mylead") );
let deleteBtn = document.getElementById("delete_el");
let tabBtn = document.getElementById("tab_btn");

const tab =[
    {"url": "htttp/www/google.com"}
]
tabBtn.addEventListener("click",function(){
    mylead.push(tab[0].url);
    localStorage.setItem("mylead",mylead);
    lender(mylead);
})

deleteBtn.addEventListener("dblclick",function(){
localStorage.clear();
mylead =[];
lender(mylead);
})

if(leadsFromLocalStorage) {
    mylead = leadsFromLocalStorage;
    lender(mylead);   
}

function lender(leads){
    let listItem = " ";
    for(let i=0; i<leads.length; i++){
       listItem +=  `<li> <a target="_blank" href="${leads[i]}"> 
            ${leads[i]}</a>
            </li>`
    }
    ulEl.innerHTML = listItem;
    }
    

inputBtn.addEventListener('click',function(){
    mylead.push(InputEl.value );
    InputEl.value ="";
    localStorage.setItem("mylead" ,JSON.stringify(mylead));
    lender(mylead);
})





