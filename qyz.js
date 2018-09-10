window.onload=function () {
    let res=document.querySelectorAll(".icon1")[0];
    let res1=document.querySelectorAll(".sign")[0];
    let res2=document.querySelectorAll("p")[0];
    let res3=document.querySelectorAll(".icon2")[0];
    let res4=document.querySelectorAll(".zc")[0];
    let res5=document.querySelectorAll("p")[1];
    let res6=document.querySelectorAll("input");
    let res7=document.querySelectorAll(".butt");
    res.onclick=function(){
        res1.style.display="flex";
        res4.style.display="none";
    }
    res2.onclick=function(){
        res1.style.display="none";
    }
    res3.onclick=function(){
        res4.style.display="flex";
        res1.style.display="none";
    }
    res5.onclick=function(){
        res4.style.display="none";
    }
    res7[0].onclick=function(){
        if(res6[3].value==res6[5].value && res6[4].value==res6[6].value && res6[6]!==""){
            alert("登陆成功");
            res1.style.display="none";
        }else{
            alert("账户名或密码错误");
        }
    }
    res7[1].onclick=function(){
        if(res6[6].value==res6[7].value){
            alert("注册成功");
            res4.style.display="none";
            res1.style.display="flex";
        }else{
            alert("两次输入密码不一致");
        }
    }


    let dian=document.querySelectorAll("aside .text a");
    let bigbig=document.querySelectorAll(".bigbig");
    dian[0].style.borderLeft="3px solid blue";
    bigbig[0].style.display="block";
    for(let i=0;i<dian.length;i++){
        dian[i].onclick=function () {
            for(let j=0;j<dian.length;j++){
                bigbig[j].style.display="none";
                dian[j].style.borderLeft="none";

            }
            dian[i].style.borderLeft="3px solid blue";
            bigbig[i].style.display="block";
        }
    }
    let li=document.querySelectorAll(".top ul .li1");
    let bigmig=document.querySelectorAll("main .bigimg11");
    function dianjiyemian(li,bigmig){
        li[0].style.backgroundColor= "#00c0ff";
        li[0].style.color= "white";
        bigmig[0].style.display="block";
        for(let i=0;i<li.length;i++){
            li[i].onclick=function () {
                for(let j=0;j<li.length;j++){
                    bigmig[j].style.display="none";
                    li[j].style.backgroundColor= "white";
                    li[j].style.color= "#888";
                }
                li[i].style.backgroundColor= "#00c0ff";
                li[i].style.color= "white";
                bigmig[i].style.display="block";
            }
        }
    }
    //关于我们等的函数
    dianjiyemian(li,bigmig);
    let li2=document.querySelectorAll(".top ul .li2");
    let bigmig2=document.querySelectorAll("main .bigimg22");
    dianjiyemian(li2,bigmig2);
    let li3=document.querySelectorAll(".top ul .li3");
    let bigmig3=document.querySelectorAll("main .bigimg33");
    dianjiyemian(li3,bigmig3);


    let text=document.querySelector(".tops .i1");
    let xldj=document.querySelector(".tops .list1");
    let tops=document.querySelectorAll(".tops11");
    let list23=document.querySelectorAll(".list232");
    let topst=document.querySelectorAll(".tops1 .l1");
    function xsdianji(text,xldj,tops,list23,topst,bigmig){
        for (let i=0;i<tops.length;i++){
            tops[i].style.display="none";
        }
        xldj.onclick=function () {
            for (let i=0;i<tops.length;i++){
                if(tops[i].style.display=="none"){
                    tops[i].style.display="block";
                }else if(tops[i].style.display!=="none"){
                    tops[i].style.display="none";
                }
                xldj.style.background="white";
                xldj.classList.toggle("icon-xaingxia");
                // xldj.classList.toggle("icon-jiantouxiangshang");
            }
        }
        for(let i=0;i<tops.length;i++){
            tops[i].onclick=function () {
                for(let j=0;j<tops.length;j++){
                    tops[j].style.background="white";
                    tops[j].style.color="#888";
                    list23[j].style.background="white";
                    bigmig[j].style.display="none";
                }
                tops[i].style.background="#00c0ff";
                tops[i].style.color="white";
                list23[i].style.background="#00c0ff";
                bigmig[i].style.display="block";
                text.innerHTML=topst[i].innerHTML;
                for(let j=0;j<tops.length;j++){
                    tops[j].style.display="none";}
            }
        }
    }
    xsdianji(text,xldj,tops,list23,topst,bigmig);
    let text1=document.querySelector(".tops .i2");
    let xldj1=document.querySelector(".tops .list2");
    let tops1=document.querySelectorAll(".tops12");
    let list231=document.querySelectorAll(".list233");
    let topst1=document.querySelectorAll(".tops1 .l2");
    xsdianji(text1,xldj1,tops1,list231,topst1,bigmig2);
    let text2=document.querySelector(".tops .i3");
    let xldj2=document.querySelector(".tops .list3");
    let tops2=document.querySelectorAll(".tops13");
    let list232=document.querySelectorAll(".list234");
    let topst2=document.querySelectorAll(".tops1 .l3");
    xsdianji(text2,xldj2,tops2,list232,topst2,bigmig3);

}