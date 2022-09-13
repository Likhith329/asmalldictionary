var info={
    name:"",
    text:""
}

let btndata=document.querySelector(".btn")
btndata.addEventListener("click",()=>{
    let namedata=document.querySelector(".name").value
   let textdata=document.querySelector(".comment").value
   info.name=namedata;
   info.text=textdata;
   if(info.name!='' && info.text!='' ){
   createdata(info)}
   else{
   alert("Yoohh Chooskoobadleee!!!!!!!")
}
})

async function createdata(info){

    const fetcheddata=await fetch("https://6320863c9f82827dcf2ec213.mockapi.io/comments",{
        method:'POST',
        body:JSON.stringify(info),
        headers:{"Content-Type":"application/json"},
    } )
    window.confirm("Posted successfully")
}
