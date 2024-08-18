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
btn.addEventListener("click", () => {
    if (user4.value == "") {
        document.getElementById("ten1").innerHTML = "";
        document.getElementById("ten2").innerHTML = "";
        document.getElementById("ten3").innerHTML = "";
        document.getElementById("ten4").innerHTML = "";
        document.getElementById("tien1").innerHTML = "";
        document.getElementById("tien2").innerHTML = "";
        document.getElementById("tien3").innerHTML = "";
        document.getElementById("tien4").innerHTML = ""
        // win4 = anChay4 = chay4 = 0;
        let anChay = Number(anChay1.value)+Number(anChay2.value)+Number(anChay3.value);
        let chay = Number(chay1.value)+Number(chay2.value)+Number(chay3.value);
        if(anChay!=chay)
        {
            document.getElementById("ten4").innerHTML = "Ăn cháy với cháy phải bằng nhau!!";
            return;
        }
        document.getElementById("ten1").innerHTML = user1.value;
        document.getElementById("ten2").innerHTML = user2.value;
        document.getElementById("ten3").innerHTML = user3.value;
        document.getElementById("ten4").innerHTML = "";

        var tongVan = win1.value * 1 + win2.value * 1 + win3.value * 1;

        const tien1 = win1.value * 20 + anChay1.value * 20 - chay1.value * 20 - (tongVan - win1.value) * 10;
        const tien2 = win2.value * 20 + anChay2.value * 20 - chay2.value * 20 - (tongVan - win2.value) * 10;
        const tien3 = win3.value * 20 + anChay3.value * 20 - chay3.value * 20 - (tongVan - win3.value) * 10;

        document.getElementById("tien1").innerHTML = tien1;
        document.getElementById("tien2").innerHTML = tien2;
        document.getElementById("tien3").innerHTML = tien3;
        document.getElementById("tien4").innerHTML = "";
    }
    else {
        document.getElementById("ten1").innerHTML = "";
        document.getElementById("ten2").innerHTML = "";
        document.getElementById("ten3").innerHTML = "";
        document.getElementById("ten4").innerHTML = "";
        document.getElementById("tien1").innerHTML = "";
        document.getElementById("tien2").innerHTML = "";
        document.getElementById("tien3").innerHTML = "";
        document.getElementById("tien4").innerHTML = "";
        let anChay = Number(anChay1.value)+Number(anChay2.value)+Number(anChay3.value)+Number(anChay4.value);
        let chay = Number(chay1.value)+Number(chay2.value)+Number(chay3.value)+Number(chay4.value);
        if(anChay!=chay)
        {
            document.getElementById("ten1").innerHTML = "Ăn cháy với cháy phải bằng nhau!!";
            return;
        }
        document.getElementById("ten1").innerHTML = user1.value;
        document.getElementById("ten2").innerHTML = user2.value;
        document.getElementById("ten3").innerHTML = user3.value;
        document.getElementById("ten4").innerHTML = user4.value;

        var tongVan = win1.value * 1 + win2.value * 1 + win3.value * 1 + win4.value * 1;;

        const tien1 = win1.value * 30 + anChay1.value * 20 - chay1.value * 20 - (tongVan - win1.value) * 10;
        const tien2 = win2.value * 30 + anChay2.value * 20 - chay2.value * 20 - (tongVan - win2.value) * 10;
        const tien3 = win3.value * 30 + anChay3.value * 20 - chay3.value * 20 - (tongVan - win3.value) * 10;
        const tien4 = win4.value * 30 + anChay4.value * 20 - chay4.value * 20 - (tongVan - win4.value) * 10;


        document.getElementById("tien1").innerHTML = tien1;
        document.getElementById("tien2").innerHTML = tien2;
        document.getElementById("tien3").innerHTML = tien3;
        document.getElementById("tien4").innerHTML = tien4;
    }
})
// var reset = document.getElementById("reset");
// reset.addEventListener("click", () => {
//     document.getElementById("myForm").reset();
    
// })
