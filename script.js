
let btdata=document.querySelector(".bt");
btdata.addEventListener("click",async()=>{

    let id1=Math.floor(Math.random()*250+1);
    let id2=Math.floor(Math.random()*250+1);
    let id3=Math.floor(Math.random()*250+1);

    let data= await fetch("https://restcountries.com/v3.1/all")
    let jsondata=await data.json();
 
    let name1data=document.querySelector("#name1");
    let img1data=document.querySelector(".one img")
    let capdata1=document.querySelector(".capital1")
    let regdata1=document.querySelector(".region1")
    let condata1=document.querySelector(".countrycode1")
    name1data.innerHTML=jsondata[id1].name.common
    img1data.setAttribute("src",jsondata[id1].flags.png)
    capdata1.innerHTML=jsondata[id1].capital
    regdata1.innerHTML=jsondata[id1].region
    condata1.innerHTML=jsondata[id1].cca3

    let name2data=document.querySelector("#name2");
    let img2data=document.querySelector(".two img")
    let capdata2=document.querySelector(".capital2")
    let regdata2=document.querySelector(".region2")
    let condata2=document.querySelector(".countrycode2")
    name2data.innerHTML=jsondata[id2].name.common
    img2data.setAttribute("src",jsondata[id2].flags.png)
    capdata2.innerHTML=jsondata[id2].capital
    regdata2.innerHTML=jsondata[id2].region
    condata2.innerHTML=jsondata[id2].cca3

    let name3data=document.querySelector("#name3");
    let img3data=document.querySelector(".three img")
    let capdata3=document.querySelector(".capital3")
    let regdata3=document.querySelector(".region3")
    let condata3=document.querySelector(".countrycode3")
    name3data.innerHTML=jsondata[id3].name.common
    img3data.setAttribute("src",jsondata[id3].flags.png)
    capdata3.innerHTML=jsondata[id3].capital
    regdata3.innerHTML=jsondata[id3].region
    condata3.innerHTML=jsondata[id3].cca3

    async function execute(){
        hidebtn("info1")
        hidebtn("info2")
        hidebtn("info3")
    }
    execute();
})


function getweatherdata(info,fdata){
 let tempdata=document.querySelector("."+info+" .temp")
 let feelsdata=document.querySelector("."+info+" .feelslike")
 let desdata=document.querySelector("."+info+" .description")
 let winddata=document.querySelector("."+info+" .windspeed")
 tempdata.innerHTML= Math.floor(fdata.main.temp-273.15)+"<sup>o</sup>C"
 feelsdata.innerHTML=Math.floor(fdata.main.feels_like-273.15)+"<sup>o</sup>C"
 desdata.innerHTML=fdata.weather[0].description
 winddata.innerHTML=fdata.wind.speed+" m/s"
}

  function hidebtn(info){
  let infdata=document.querySelector("."+info)
  infdata.style.display="none";
}




async function fun1(){
    let namedata=document.getElementById("name1");
    let inpdat=namedata.innerHTML
    let fetdata=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+inpdat+"&appid=308ece19d75613701d0f15f7a965c032")
    let fdata=await fetdata.json()
    let infodata=document.querySelector(".info1")
    infodata.style.display="block"
    getweatherdata("info1",fdata)
}

async function fun2(){
    let namedata=document.getElementById("name2");
    let inpdat=namedata.innerHTML
    let fetdata=  await fetch("https://api.openweathermap.org/data/2.5/weather?q="+inpdat+"&appid=308ece19d75613701d0f15f7a965c032")
    let fdata=await fetdata.json()
    let infodata=document.querySelector(".info2")
    infodata.style.display="block"
    getweatherdata("info2",fdata)
}


async function fun3(){
    let namedata=document.getElementById("name3");
    let inpdat=namedata.innerHTML
    let fetdata=  await fetch("https://api.openweathermap.org/data/2.5/weather?q="+inpdat+"&appid=308ece19d75613701d0f15f7a965c032")
    let fdata=await fetdata.json()
    let infodata=document.querySelector(".info3")
    infodata.style.display="block"
    getweatherdata("info3",fdata)
}
