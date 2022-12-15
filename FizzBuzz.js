let containerEl = document.getElementById("results");
let btn = document.getElementById("click-btn");
let tableEl=document.createElement('table');



function displayValue() {
    let fVEl = document.getElementById("fizzvalue").value;
    let bVEl = document.getElementById("buzzvalue").value;  
    let el= document.getElementsByTagName('td');
      
    for (i = 1; i <= 100; i++) {
        if ((i%fVEl==0) && (i%bVEl==0)) {
            //Print FizzBuzz
            el[i-1].innerText= "FizzBuzz";  
            el[i-1].style.color= "crimson"; 
            el[i-1].style.fontWeight="bold";             
        }
        else if ((i % (fVEl)) == 0)  {
            //Print Fizz
            el[i-1].innerText= "Fizz"; 
            el[i-1].style.color= "navy"; 
            el[i-1].style.fontWeight="bold";  
        }
        else if ((i % (bVEl)) == 0) {
            //Print Buzz
            el[i-1].innerText= "Buzz";  
            el[i-1].style.color= "darkorange"; 
            el[i-1].style.fontWeight="bold";  
        }
        else {
            //Print i
            el[i-1].innerText= i;   
        }
    }
}

function printTable(){
    containerEl.appendChild(tableEl);
    tableEl.innerHTML="";
for (i=0; i<20; i++)
 {
    let rowEl= document.createElement('tr');
    tableEl.appendChild(rowEl);
    for(j=0; j<5; j++)
    {
        let tdEl=document.createElement('td');
        rowEl.appendChild(tdEl);
    }
 }
 displayValue();
}

btn.addEventListener('click', printTable);
