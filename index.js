var button=document.querySelectorAll(".buttons div div");
var screen=document.querySelector(".screen");
var record=[];
var recordno=0;
var noofspots=0;
var spot=[];
var sign=[];
var Total=0;


button.forEach(function(item){
    item.addEventListener("click",function(){
        seperate(this.textContent,this.classList[0]);
        record[recordno]=this.classList[0];
        recordno=recordno+1;
    });
})

function seperate(value,myclass){

    switch(myclass){

        case "digit":

            var length=record.length-1;

            if(record[length] == "arith"){
                screen.textContent=value;
            }

            else{
                screen.textContent+=value;
            }

            break;

        case "arith":

            spot[noofspots]=Number(screen.textContent);
            sign[noofspots]=value;

            if(noofspots==0){

                Total=analyse(spot[noofspots],"+");
                screen.textContent=Total;

            }

            else{
                Total=analyse(spot[noofspots],sign[noofspots-1]);
                screen.textContent=Total;
            }

            noofspots+=1;
            break;
       
        default:

            if(myclass=="del"){
                var temp=screen.textContent;
                screen.textContent=temp.substring(0,temp.length-1);
            }

            else if(myclass="reset"){
                screen.textContent="";
                Total=0;
            }

            else{
                screen.textContent=Total;
            }

            break;

    }
}

function analyse(number,arith){
    if(arith=="+"){
        return (Total + number);
    }
    else if(arith=="-"){
        return (Total - number);
    }
    else if(arith=="X"){
        return (Total * number);
    }
    else{
        return (Total/ number);
    }
}

// This function deals with toggle bar 

document.querySelectorAll(".spot").forEach(function(item,index){
    item.addEventListener("click",function(){
        
        if(index==0){
            document.querySelector(".slider").style.left="5px";
            document.querySelector("body").style.backgroundColor=" hsl(222, 26%, 31%)";
            document.querySelector("body").style.color="  hsl(0, 0%, 100%)";
            document.querySelector(".buttons").style.backgroundColor=" hsl(223, 31%, 20%)";

            document.querySelector("label").style.backgroundColor=" hsl(223, 31%, 20%)";
            document.querySelector(".slider").style.backgroundColor=" hsl(6, 63%, 50%)";
            document.querySelector(".screen").style.backgroundColor=" hsl(224, 36%, 15%)";

           
            for(i=0;i< document.querySelectorAll(".row div").length;i++){
            document.querySelectorAll(".row div")[i].style.color="hsl(221, 14%, 31%)";
            document.querySelectorAll(".row div")[i].style.backgroundColor="  hsl(30, 25%, 89%)";
            document.querySelectorAll(".row div")[i].style.boxShadow="1px 5px 5px 0px   hsl(28, 16%, 65%)";
            
            }

            document.querySelector(".row .reset").style.backgroundColor=" hsl(225, 21%, 49%)";
            document.querySelector(".row .reset").style.boxShadow="1px 5px 5px 0px  hsl(224, 28%, 35%)";
            document.querySelector(".row .reset").style.color="white";

            document.querySelector(".row .del").style.backgroundColor=" hsl(225, 21%, 49%)";
            document.querySelector(".row .del").style.boxShadow="1px 5px 5px 0px  hsl(224, 28%, 35%)";
            document.querySelector(".row .del").style.color="white";

            document.querySelector(".row .equal").style.backgroundColor="  hsl(6, 63%, 50%)";
            document.querySelector(".row .equal").style.boxShadow="1px 5px 5px 0px   hsl(6, 70%, 34%)";
            document.querySelector(".row .equal").style.color="white";
        }

        else if(index==1){
            document.querySelector(".slider").style.left="30px";

            document.querySelector("body").style.backgroundColor="  hsl(0, 0%, 90%)";
            document.querySelector("body").style.color="  hsl(60, 10%, 19%)";
            document.querySelector(".buttons").style.backgroundColor=" hsl(0, 5%, 81%)";

            document.querySelector("label").style.backgroundColor=" hsl(0, 5%, 81%)";
            document.querySelector(".slider").style.backgroundColor=" hsl(25, 98%, 40%)";
            document.querySelector(".screen").style.backgroundColor="  hsl(0, 0%, 93%)";
            
            for(i=0;i< document.querySelectorAll(".row div").length;i++){
            document.querySelectorAll(".row div")[i].style.color="hsl(60, 10%, 19%)";
            document.querySelectorAll(".row div")[i].style.backgroundColor=" hsl(45, 7%, 89%)";
            document.querySelectorAll(".row div")[i].style.boxShadow="1px 5px 5px 0px   hsl(35, 11%, 61%)";
            }

            document.querySelector(".row .reset").style.backgroundColor=" hsl(185, 42%, 37%)";
            document.querySelector(".row .reset").style.boxShadow="1px 5px 5px 0px hsl(185, 58%, 25%)";
            document.querySelector(".row .reset").style.color="white";

            document.querySelector(".row .del").style.backgroundColor=" hsl(185, 42%, 37%)";
            document.querySelector(".row .del").style.boxShadow="1px 5px 5px 0px hsl(185, 58%, 25%)";
            document.querySelector(".row .del").style.color="white";

            document.querySelector(".row .equal").style.backgroundColor="  hsl(25, 98%, 40%)";
            document.querySelector(".row .equal").style.boxShadow="1px 5px 5px 0px   hsl(25, 99%, 27%)";
            document.querySelector(".row .equal").style.color="white";
        }

        else{
            document.querySelector(".slider").style.left="55px";
            document.querySelector("body").style.backgroundColor=" hsl(268, 75%, 9%)";
            document.querySelector("body").style.color=" hsl(52, 100%, 62%)";
            document.querySelector(".buttons").style.backgroundColor=" hsl(268, 71%, 12%)";

            document.querySelector("label").style.backgroundColor=" hsl(223, 31%, 20%)";
            document.querySelector(".slider").style.backgroundColor=" hsl(268, 71%, 12%) ";
            document.querySelector(".screen").style.backgroundColor=" hsl(268, 71%, 12%)";
           
            for(i=0;i< document.querySelectorAll(".row div").length;i++){
                document.querySelectorAll(".row div")[i].style.color=" hsl(52, 100%, 62%)";
                document.querySelectorAll(".row div")[i].style.backgroundColor="  hsl(281, 89%, 26%)";
                document.querySelectorAll(".row div")[i].style.boxShadow="1px 5px 5px 0px   hsl(285, 91%, 52%)";
                }
           
            document.querySelector(".row .reset").style.backgroundColor=" hsl(268, 47%, 21%)";
            document.querySelector(".row .reset").style.boxShadow="1px 5px 5px 0px  hsl(290, 70%, 36%)";
            document.querySelector(".row .reset").style.color="white";

            document.querySelector(".row .del").style.backgroundColor="hsl(268, 47%, 21%)";
            document.querySelector(".row .del").style.boxShadow="1px 5px 5px 0px hsl(290, 70%, 36%)";
            document.querySelector(".row .del").style.color="white";

            document.querySelector(".row .equal").style.backgroundColor="  hsl(176, 100%, 44%)";
            document.querySelector(".row .equal").style.boxShadow="1px 5px 5px 0px  hsl(177, 92%, 70%)";
            document.querySelector(".row .equal").style.color="hsl(198, 20%, 13%)";
        }
    });
})