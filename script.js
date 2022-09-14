async function fun1(){
    let urldata= await fetch("https://random.dog/woof.json")
    let fetcheddata=await urldata.json()
    try {
        let imagedata=document.querySelector(".image")
    imagedata.setAttribute("src",fetcheddata.url)
    } catch (error) {
        let videodata=document.querySelector(".video")
        videodata.setAttribute("src",fetcheddata.url)
    }
    
    
}
async function fun2(){
    let urldata= await fetch("https://aws.random.cat/meow")
    let fetcheddata=await urldata.json()
    try {
        let imagedata=document.querySelector(".image")
    imagedata.setAttribute("src",fetcheddata.file)
    } catch (error) {
        let videodata=document.querySelector(".video")
        videodata.setAttribute("src",fetcheddata.file)
    }
    
}