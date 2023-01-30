//SWIPER JS*+(TESTIMONIAL)
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  const menubtn=document.querySelector("#menu-btn");
  const closebtn=document.querySelector("#close-btn");
  const menu=document.querySelector("nav .container  ul");

 

  menubtn.addEventListener("click",()=>{
    menu.style.display="block";
    menubtn.style.display="none";
    closebtn.style.display="inline-block"
  });

  
  closebtn.addEventListener("click",()=>{
    menu.style.display="none";
    menubtn.style.display="inline-block";
    closebtn.style.display="none"
  });


  const menuItem=menu.querySelectorAll("li");

  const changeMenu=()=>{
    menuItem.forEach(item => {
      const itemLink=item.querySelector("a");
      itemLink.classList.remove("active");
    });
  }
  
  menuItem.forEach(item => {
    const itemLink=item.querySelector("a");
    itemLink.addEventListener("click", ()=>{
      changeMenu();
      itemLink.classList.add("active")
    })
  });


//TOOGLE BUTTON FOR SEE MORE
const seeMoreBtn=document.querySelector(".read-more");
const seeMoreContent=document.querySelector(".read-more-pages");

  seeMoreBtn.addEventListener("click", ()=>{
    seeMoreContent.classList.toggle("show-more");
    if (seeMoreContent.classList.contains("show-more")) {
      seeMoreBtn.textContent="See less";
      
    }else{
      seeMoreBtn.textContent="See more";
    }
  })
 

  const skillSel=document.querySelectorAll("section.skills .skill");


  skillSel.forEach(skill => {
    const headSel=skill.querySelector(".head").addEventListener("click", ()=>{
       headSel.querySelector(".items").classList.toggle("show-bar");
     }
    )
  });