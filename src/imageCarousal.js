import "./imageCarousel.css"

export function initializeCarousel(div){
  div.classList.add("domModules-imageCarousel-div")
  let imgs=Array.from(div.querySelectorAll("img"))
  for(let i=0; i<imgs.length;i++){
    imgs[i].classList.add("domModules-imageCarousel-img")
    if(i!=0){
      imgs[i].classList.add("domModules-imageCarousel-hidden")
    }
  }
  let buttons=Array.from(div.querySelectorAll("div>button"))
  for(let i=0; i<buttons.length;i++){
    buttons[i].classList.add("domModules-imageCarousel-button")
  }
  let index=0;
  buttons[0].textContent="<"
  buttons[0].classList.add("domModules-imageCarousel-left-button")
  buttons[0].addEventListener("click",()=>{
    imgs[index].classList.add("domModules-imageCarousel-hidden")
    points[index].classList.remove("domModules-imageCarousel-point-selected")
    index--;
    if(index<0){
      index=imgs.length-1
    }
    imgs[index].classList.remove("domModules-imageCarousel-hidden")
    points[index].classList.add("domModules-imageCarousel-point-selected")
    
  })
  buttons[1].textContent=">"
  buttons[1].classList.add("domModules-imageCarousel-right-button")
  buttons[1].addEventListener("click",()=>{
    imgs[index].classList.add("domModules-imageCarousel-hidden")
    points[index].classList.remove("domModules-imageCarousel-point-selected")
    index++;
    if(index>=imgs.length){
      index=index%imgs.length
    }
    imgs[index].classList.remove("domModules-imageCarousel-hidden")
    points[index].classList.add("domModules-imageCarousel-point-selected")
  })
  let pointDiv=document.createElement("div")
  pointDiv.classList.add("domModules-imageCarousel-pointdiv")
  for(let i=0; i<imgs.length;i++){
    let point=document.createElement("button")
    point.textContent=".";
    point.classList.add("domModules-imageCarousel-point")
    if(i==0){
      point.classList.add("domModules-imageCarousel-point-selected")
    }
    pointDiv.appendChild(point)
    point.addEventListener("click",()=>{
      imgs[index].classList.add("domModules-imageCarousel-hidden")
      imgs[i].classList.remove("domModules-imageCarousel-hidden")
      points[index].classList.remove("domModules-imageCarousel-point-selected")
      points[i].classList.add("domModules-imageCarousel-point-selected")
      index=i;
    })
  }
  let points=Array.from(pointDiv.querySelectorAll("button"))
  div.appendChild(pointDiv);
  setInterval(()=>{
    imgs[index].classList.add("domModules-imageCarousel-hidden")
    points[index].classList.remove("domModules-imageCarousel-point-selected")
    index++;
    if(index>=imgs.length){
      index=index%imgs.length
    }
    imgs[index].classList.remove("domModules-imageCarousel-hidden")
    points[index].classList.add("domModules-imageCarousel-point-selected")
  },500)
}

