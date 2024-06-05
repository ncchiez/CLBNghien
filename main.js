// var nam = document.getElementById("nam");

// var btn = document.getElementById("btn");
// btn.addEventListener("click",()=> {
//     if(nam.value%4==0 && nam.value%100!=0)
//         document.getElementById("js").innerHTML="Nam nhuan";
//     else
//         document.getElementById("js").innerHTML="Nam k nhuan"
// })


var user1 = document.getElementById("user1");
var user2 = document.getElementById("user2");
var user3 = document.getElementById("user3");
var user4 = document.getElementById("user4");

var win1 = document.getElementById("win1");
var win2 = document.getElementById("win2");
var win3 = document.getElementById("win3");
var win4 = document.getElementById("win4");

var anChay1 = document.getElementById("anChay1");
var anChay2 = document.getElementById("anChay2");
var anChay3 = document.getElementById("anChay3");
var anChay4 = document.getElementById("anChay4");

var chay1 = document.getElementById("chay1");
var chay2 = document.getElementById("chay2");
var chay3 = document.getElementById("chay3");
var chay4 = document.getElementById("chay4");

var btn = document.getElementById("btn");
btn.addEventListener("click",()=> {
    document.getElementById("ten1").innerHTML = user1.value;
    document.getElementById("ten2").innerHTML = user2.value;
    document.getElementById("ten3").innerHTML = user3.value;
    document.getElementById("ten4").innerHTML = user4.value;
    
    var tongVan = win1.value*1+win2.value*1+win3.value*1+win4.value*1;;
    
    const tien1 = win1.value*30+anChay1.value*20-chay1.value*20-(tongVan-win1.value)*10;
    const tien2 = win2.value*30+anChay2.value*20-chay2.value*20-(tongVan-win2.value)*10;
    const tien3 = win3.value*30+anChay3.value*20-chay3.value*20-(tongVan-win3.value)*10;
    const tien4 = win4.value*30+anChay4.value*20-chay4.value*20-(tongVan-win4.value)*10;


    document.getElementById("tien1").innerHTML = tien1;
    document.getElementById("tien2").innerHTML = tien2;
    document.getElementById("tien3").innerHTML = tien3;
    document.getElementById("tien4").innerHTML = tien4;
})
