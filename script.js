const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  let no=1
  no--
  let idt=document.getElementById("id")
  let ndt=document.getElementById("nam")
  let jdt=document.getElementById("job")
  let imdt=document.getElementById("img")
  let tdt=document.getElementById("txt")
   idt.innerHTML=reviews[0].id
   ndt.innerHTML=reviews[0].name
   jdt.innerHTML=reviews[0].job
   imdt.setAttribute("src",reviews[0].img)
   tdt.innerHTML=reviews[0].text

   let prvdat=document.querySelector(".pre")
   prvdat.addEventListener("click",function(){
   let dat=document.querySelectorAll(".num")
   if(dat[0].innerHTML!=1){
   dat.forEach(x=>{
    
    x.innerHTML--
   })
   }})

   let ndat=document.querySelector(".nxt")
   ndat.addEventListener("click",function(){
   let dat=document.querySelectorAll(".num")
   if(dat[dat.length-1].innerHTML!=4){
   dat.forEach(x=>{
    
    x.innerHTML++
   })
   }})
   
   let btndata=document.querySelectorAll(".num")
   btndata.forEach(x=>{
    x.addEventListener("click",function(){
      let idt=document.getElementById("id")
      let ndt=document.getElementById("nam")
      let jdt=document.getElementById("job")
      let imdt=document.getElementById("img")
      let tdt=document.getElementById("txt")
      let no=x.innerHTML
      no--
      idt.innerHTML=reviews[no].id
      ndt.innerHTML=reviews[no].name
      jdt.innerHTML=reviews[no].job
      imdt.setAttribute("src",reviews[no].img)
      tdt.innerHTML=reviews[no].text
    })
   })