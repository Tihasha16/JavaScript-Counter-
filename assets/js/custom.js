// get elements

let input = document.querySelector('#counter');
let start = document.querySelector('#start');
let h1 = document.querySelector('.counter h1');
let bar = document.querySelector('.counter .bar');

// start btn event action 
start.onclick = e =>{
    let counter_val = input.value;
    

    setInterval(() => {
        h1.innerHTML = counter_val;
       
        let bar_width = barCount(input.value, counter_val);
        bar.style.width = `${bar_width}%`;


        if(bar_width >= 0 && bar_width <=30){
            bar.style.width = `${bar_width}%`;
            bar.style.backgroundColor = `red`; 
        }else if(bar_width >= 32 && bar_width <=60){
            bar.style.width = `${bar_width}%`;
            bar.style.backgroundColor = `blue`; 
        }else if(bar_width >= 61 && bar_width <=100){
            bar.style.width = `${bar_width}%`;
            bar.style.backgroundColor = `green`; 
        }


        if (counter_val == 0){
            clearInterval(ss);
        }
        counter_val--;

    }, 1000);

}


//bar status function 

function barCount(start, count){
    return (count * 100)/ start;
}


