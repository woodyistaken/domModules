import "./dropdown.css"

export function initializeDropDown(listElement){
  listElement.classList.add("domModules-dropdown");

  let buttons=listElement.querySelectorAll("button")
  for(let i=0; i<buttons.length;i++){

    let button=buttons[i]
    if(i!=0){
      button.classList.add("domModules-dropdown-hidden");
    }

    button.addEventListener("mouseenter",()=>{
      for(let i=1; i<buttons.length;i++){
        buttons[i].classList.remove("domModules-dropdown-hidden");
      }
    })
    button.addEventListener("mouseleave",()=>{
      for(let i=1; i<buttons.length;i++){
        buttons[i].classList.add("domModules-dropdown-hidden");
      }
    })
  }
  
}
