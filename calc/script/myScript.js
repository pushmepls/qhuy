'use strict'
let a=0;
let b=0;
let operator="";
let result=NaN;
let floata=false;
let floatb=false;
function onNumberClick(elm){         
    if(operator && !isNaN(a)){//return a b là string để in số thập ph
            // if(elm.id==="dot"){}
            if(isNaN(b)){b=0;}
            if(elm.id=="."){
                if(floatb==false){
                b=b+elm.id;
                floatb=true;
                printToScreen(b);
            }
                else{b=b;}
            }else{
                if(elm.id==="neg"){
                    let check=a.slice(0,1);
                    if(check==="-"){a=a.slice(1);}
                    else{a="-"+a;}
                }
                else{
                    if(b===0&&elm.id==="0"&&floatb==false){b=b;}
                    else{if(b.toString().length<=13){b=(b+elm.id);}               
                    else{b=b}}                    
                }
            }
        printToScreen(b);
    }       
    else{
            if(isNaN((a))){a=0;}         
            if(elm.id==="."){                
                if(floata==false){
                    a=a+elm.id;
                    floata=true;
                    printToScreen(a);
                }
                else{a=a;}
            }else{
            if(elm.id==="neg"){
                if(a*1<0){a=a.slice(1);}
                else{a="-"+a;}
            }else{
                if(a==0&&elm.id==0&&floata==false){a=a;}
                else{if(a.toString().length<=13){a=(a+elm.id);}else{a=a;}            
                }
            }
        printToScreen(a);
        }  
    }
};

function printToScreen(value){
    let val=value.toString();
    if(val.charAt(val.length-1)==="."){
        let v=val.slice(0,length-1)*1;
        if(v===0){val=value;}
        else{val=value*1;}
    }
    else{
        if(val.indexOf(".")>0){val=value;}
        else{if(val==="-0"||val==="-0."){val=value;}     
            else{val=val*1;}     
    }
    }
    let screen = document.getElementById("valueOut");
    if(val!==0){document.getElementById("del").innerHTML="C";}
    else{document.getElementById("del").innerHTML="AC";}
    if(isNaN(val)){
    val="Error";
    screen.value = val;}
    else{
        if(val.toString().length>8){
            if(window.innerWidth>=768){
            screen.style.fontSize=`70px`;
            screen.value=val.toLocaleString();}
            else{
                screen.style.fontSize=`32px`;
                screen.value=val.toLocaleString();}
        }
        else{
            if(window.innerWidth>=768){
                screen.style.fontSize=`200px`;
                screen.value=val.toLocaleString();}
                else{
                    screen.style.fontSize=`55px`;
                    screen.value=val.toLocaleString();}
        }
    }
};

function onClear(elm){
    a=0;
    b=0;
    floata=false;
    floatb=false;
    if(operator!=""){
        document.getElementById(operator).style.backgroundColor=`rgb(239,145,55)`;
        document.getElementById(operator).style.color=`white`;
        }
    operator="";
    result=NaN;
    printToScreen("0");
};

function onOperationClick(elm){  
    a=a*1;   
    if(elm.id==="percent"){
        a=a/100;
        printToScreen(a);
    }
    else
    {
    b=NaN;
    floatb=false;
    let opt= elm.id;
    if(operator!=""){
    document.getElementById(operator).style.backgroundColor=`rgb(239,145,55)`;
    document.getElementById(operator).style.color=`white`;
    }
    console.log(opt);

    operator=opt;   
    document.getElementById(opt).style.backgroundColor=`white`;
    document.getElementById(opt).style.color=`rgb(239,145,55)`;
    
    }
};

function onResult(){
    b=b*1;
    console.log("a="+a);
    console.log("b=" +b);   
    if(!isNaN(a)&&!isNaN(result)){
        b=a;
        a=NaN;
    }   
    let opt=operator;
    console.log(opt);
    if(opt){
    if(!isNaN(result)&&!isNaN(b)){//cộng thêm b khi bấm == liên tiếp +&&b!=nan
        Switchopt(opt, result, b);
    }
    else{
        if(!isNaN(result)&&isNaN(b)){Switchopt(opt,result,result)}
        else{Switchopt(opt, a, b);}
    }
    a=NaN;//set a về nan để có thể thêm a vào cho lần thứ >1    
    printToScreen((result).toString());
}else{
    printToScreen(a);
    a=0;
    floata=false;
    }
    console.log("result=" +result);
};
function Switchopt(opt, a, b){
    switch(opt){
        case "add":
            return result=(a*1)+(b*1);
        case "mul":
            return result=(a*1)*(b*1);
        case "div":
            if(b==0){
                return result="Error";
            }
            else{return result=(a*1)/(b*1);}
             
        case "sub":
            return result=(a*1)-(b*1); 
    }
}
