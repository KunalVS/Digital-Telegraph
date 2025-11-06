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
let ans=document.querySelector(".answer");


button.addEventListener("click",function(e){
    e.preventDefault();
    let len=input.value.length;
    ans.textContent="";

    for(let i=0;i<len;i++){
       if(input.value[i]!==" "){
        ans.textContent+=code[`${input.value[i].toLowerCase()}`]+" ";
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
 