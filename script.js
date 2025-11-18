const code={
    a:".-",
    b:"-...",
    c:"-.-.",
    d:"-..",
    e:".",
    f:"..-.",
    g:"--.",
    h:"....",
    i:"..",
    j:".---",
    k:"-.-",
    l:".-..",
    m:"--",
    n:"-.",
    o:"---",
    p:".--.",
    q:"--.-",
    r:".-.",
    s:"...",
    t:"-",
    u:"..-",
    v:"...-",
    w:".--",
    x:"-..-",
    y:"-.--",
    z:"--..",
    0:"-----",  
    1:".----",
    2:"..---",
    3:"...--",
    4:"....-",
    5:".....",
    6:"-....",
    7:"--...",
    8:"---..",
    9:"----."
    

}
let input=document.querySelector("input");
let button=document.querySelector("button");
let ans=document.querySelector(".answer1");


button.addEventListener("click",function(e){
    e.preventDefault();
    let len=input.value.length;
    ans.textContent="";

    for(let i=0;i<len;i++){
    if(input.value[i]!==" "){
        ans.textContent+=code[`${input.value[i].toLowerCase()}`]+" ";
    }
    else{
        ans.textContent+="/";
    }
    }
    
    
    if(ans.textContent===""){
        ans.textContent="Please enter some text...";
    }
   
   
});




let para1=document.getElementById("p1");
para1.addEventListener("mousemove",function(){
    para1.style.color="black";
});
let para2=document.getElementById("p2");
para2.addEventListener("mousemove",function(){
    para2.style.color="black";
    para2.style.transition="color 0.5s ease";
});

para1.addEventListener("mouseout",function(){
    para1.style.color="white";
    para1.style.transition="color 0.5s ease";
});
para2.addEventListener("mouseout",function(){
    para2.style.color="white";
});

//Decoder
const decode={
    ".-":"A",
    "/.-":" A",       
    "-...":"B",
    "/-...":" B",
    "-.-.":"C",   
    "/-.-.":" C", 
   "-..":"D",
    "/-..":" D",
    ".":"E",
    "/.":" E",
    "..-.":"F",
    "/..-.":" F",
    "--.":"G",
    "/--.":" G",
    "....":"H",
    "/....":" H",
    "..":"I",
    "/..":" I",
    ".---":"J",
    "/.---":" J",
    "-.-":"K",
    "/-.-":" K",
    ".-..":"L",
     "/.-..":" L",
    "--":"M",
    "/--":" M",
    "-.":"N",
    "/-.":" N",
    "---":"O",
    "/---":" O",
    ".--.":"P",
    "/.--.":" P",
    "--.-":"Q",
    "/--.-":" Q",
    ".-.":"R",
    "/.-.":" R",
    "...":"S",
    "/...":" S",
    "-":"T",
    "/-":" T",
    "..-":"U",
    "/..-":" U",
    "...-":"V",
    "/...-":" V",
    ".--":"W",
    "/.--":" W",
    "-..-":"X",
    "/-..-":" X",
    "-.--":"Y",
    "/-.--":" Y",
    "--..":"Z",
    "/--..":" Z",
    "-----":0,
    "/-----":" "+0,
    ".----":1,
    "/.----":" "+1,
    "..---":2,
    "/..---":" "+2,
    "...--":3,
    "/...--":" "+3,
    "....-":4,
    "/....-":" "+4,
    ".....":5,
    "/.....":" "+5,
    "-....":6,
    "/-....":" "+6,
    "--...":7,
    "/--...":" "+7,
    "---..":8,
    "/---..":" "+8,
    "----.":9,
    "/----.":" "+9,
    
}




let input2=document.querySelector("#decoder");
let btn2=document.querySelector("#decode");
let ans2=document.querySelector(".answer2");



btn2.addEventListener("click",function(e){
    e.preventDefault();
    ans2.textContent=" ";
   let str=input2.value;
   let arr=str.split(" ");
 for(let i=0;i<arr.length;i++){
    ans2.textContent+=decode[`${arr[i]}`];
   }
  
});