//Menü aç kapa
// if(screen.availWidth>992)
//     {
//  document.querySelector("nav ul").style.display="flex";
//     }
document.querySelector("nav button").addEventListener("click",function(){
   
//     if(document.querySelector("nav ul").style.display=="block")
//     {
//         document.querySelector("nav ul").style.display="none";
//     }
//   else{
//     document.querySelector("nav ul").style.display="block";
//   }
let menu=document.querySelector("nav ul");
if(menu.style.display=="block")
{
    menu.style.display="none";
}
else{
    menu.style.display="block";
}

})
// ****************************Slayt işlemleri****************
let leftkonumu=0;
let slayt;

function slider(){
    slayt=setInterval(function(){
        document.querySelector("#serit").style.left=leftkonumu+"%";
        leftkonumu-=100;
        if(leftkonumu==-300){
            leftkonumu=0;
        }
    },2000)
}
slider();//slayt çalışmaya başlasın diye çağırdık

//fare ile gelince durma
document.querySelector("#serit").addEventListener("mouseover",function(){clearInterval(slayt)});
//fareyi çekince yeniden başlasın
document.querySelector("#serit").addEventListener("mouseout",function(){
   slider();
    //setTimeout(slider(),0);
})
//geri Butonu

document.querySelector("#geri").addEventListener("mouseover",function(){clearInterval(slayt)});
document.querySelector("#geri").addEventListener("mouseout",function(){
   slider();});

document.querySelector("#geri").addEventListener("click",function(){
    if(leftkonumu==-200){
        leftkonumu=0;
        document.querySelector("#serit").style.left=leftkonumu+"%";
    }
    else{
        leftkonumu-=100;
        document.querySelector("#serit").style.left=leftkonumu+"%";
    }
});
//ieri butonu
document.querySelector("#ileri").addEventListener("mouseover",function(){clearInterval(slayt)});
document.querySelector("#ileri").addEventListener("mouseout",function(){
   slider();});
   document.querySelector("#ileri").addEventListener("click",function(){
    if(leftkonumu==0){
        leftkonumu=-200;
        document.querySelector("#serit").style.left=leftkonumu+"%";
    }
    else{
        leftkonumu+=100;
        document.querySelector("#serit").style.left=leftkonumu+"%";
    }
});