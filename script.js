function f1(){
    let gdata=document.getElementById("male")
 window.resl=gdata.value
}
function f2(){
    let gdata=document.getElementById("female")
 window.resl=gdata.value

}
function f3(){
    let gdata=document.getElementById("others")
 window.resl=gdata.value

}


let btndata=document.querySelector("#sbmit")
btndata.addEventListener("click",function(){
    let fnm=document.getElementById("fname")
    let lnm=document.getElementById("lname")
    let add=document.getElementById("address")
    let pn=document.getElementById("pin")
    let gn=document.querySelectorAll("input[name='s']")  
    let chd=document.querySelectorAll("#food") 
    var chres='';
    chd.forEach(x=>{
        if(x.checked==true){
            chres+=x.value+"<br>"
        }
    }
    )
    let sdat=document.getElementById("state")
    let cdat=document.getElementById("cntry")
    if(fnm.value!='' && lnm.value!='' && add.value!='' && pn.value!='' && window.resl!='' && chres!='' && sdat.value!='' && cdat.value!=''){
    let bodydat=document.querySelector(".tbd")
    let row=`
    <tr>
    <td>${fnm.value}</td>
    <td>${lnm.value}</td>
    <td>${add.value}</td>
    <td>${pn.value}</td>
    <td>${window.resl}</td>
    <td>${chres}</td>
    <td>${sdat.value}</td>
    <td>${cdat.value}</td>
    </tr>
    `
    bodydat.innerHTML+=row
    document.getElementById("fm").reset()
}
else{
    alert("Enter all the fields to submit")
}

})