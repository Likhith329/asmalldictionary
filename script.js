let btndata=document.querySelector(".btn")
btndata.addEventListener("click",()=>{
    let inpdata=document.querySelector("input[type='number']").value
    var containerdata=document.querySelector(".tbody")
        async function getdata(pincode){
            if(pincode!=''){
                try {
                    let pindata= await fetch("https://api.postalpincode.in/pincode/"+pincode)
                let fetcheddata=await pindata.json()
                let datas=fetcheddata[0].PostOffice
                console.log(datas)
                var dat='';
                datas.forEach(data => {
                    dat+=`
                    <tr>
                    <td>${data.Name}</td>
                    <td>${data.BranchType}</td>
                    <td>${data.Block}</td>
                    <td>${data.Division}</td>
                    <td>${data.District}</td>
                    <td>${data.State}</td>
                    </tr>
                    `
                });
                containerdata.innerHTML=dat
                } catch (error) {
                    document.body.innerHTML=`<strong>Details not found</strong>`
                }
            }
            else{
                alert("Enter the pincode")
            }
            
        }
        getdata(inpdata)
    
})


