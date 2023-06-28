const endDate = "07 july 2023 12:00 AM";

document.getElementById('end-date').innerText = endDate;
const input = document.querySelectorAll('input');

function clock(){
    const end = new Date(endDate)
    const abhiwali =  new Date()
    
    const diff = (end - abhiwali)/1000;

    if(diff<0) return;
    //convert into days
    input[0].value = Math.floor(diff/3600/24);
    //convert into hours
    input[1].value = Math.floor(diff/3600)%24;
    //convert into min
    input[2].value = Math.floor(diff/60)%60;
    //convert into seconds
    input[3].value = Math.floor(diff)%60;
    

}
//initial call
clock()

setInterval(()=>{
    clock()
},1000
)
