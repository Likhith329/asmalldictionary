
async function fun(){
  try {
    let inpdat=document.querySelector("input[type='text']").value

  let fetcheddata=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inpdat)

  let data= await fetcheddata.json()
  
 

  let infdata=document.querySelector(".info")

  let inf=''
  
  data[0].meanings.forEach(partsofspeech => {
    let k=0
    inf+=`
    <div class="content">
    <h5 class="pts">${partsofspeech.partOfSpeech}</h5>
    <div>
     <div class="meaning">${k++,((partsofspeech.definitions[0])?partsofspeech.definitions[0].definition:'')}</div>
     <div class="meaning">${k++,partsofspeech.definitions[1]?partsofspeech.definitions[1].definition:''}</div>
     <div class="meaning">${k++,partsofspeech.definitions[2]?partsofspeech.definitions[2].definition:''}</div>
     <div class="meaning">${k++,partsofspeech.definitions[3]?partsofspeech.definitions[3].definition:''}</div>
     </div>
     </div>
    `
    infdata.innerHTML=inf
    
  });
  } catch(error) {
    alert("Word not found")
  }
}



