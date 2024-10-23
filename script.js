
   //base defaults dont change
   const colorsArray =["#FDC5F5","#A8D8EA","#B4E7C3","#FFF1B8","#D4B3F4"];
    let currentIndexHero = 0;
    let currentIndexForm = 0;

    //hero element for background animation 
    const heroDiv = document.getElementsByClassName('hero')[0]

    function colorChange() {

        if(heroDiv){
        heroDiv.style.backgroundColor = colorsArray[currentIndexHero];
        currentIndexHero = (currentIndexHero + 1) % colorsArray.length;
        }
    }

    //background element for form background animation
    const formBackground = document.getElementsByClassName('contact_form')[0]

    function colorChangeForm() {

        if(formBackground){
        formBackground.style.backgroundColor = colorsArray[currentIndexForm];
        currentIndexForm = (currentIndexForm + 1) % colorsArray.length;
        }
    }
    //about me section trigger button
    const aboutMeButton = document.getElementsByClassName('hero_button')[0]
    const aboutMe = document.getElementsByClassName('about_me')[0]

    function changeAboutMeDisplay(){
        if(aboutMe){
        aboutMe.style.display = "flex"
        aboutMe.style.transiion = "0.5s ease-in-out;";
         if (heroDiv) {
        heroDiv.style.display = "none"
        }
    }
}
//sidebar toggle 

const sidebarToggle = document.getElementById('sidebar-active')
const closeSidebarButton = document.querySelector('.close-sidebar')

if(closeSidebarButton) {
    closeSidebarButton.addEventListener('click', ()=> {sidebarToggle.checked = false;

    });

}
if(closeSidebarButton) {
    closeSidebarButton.addEventListener('click', ()=> {sidebarToggle.checked = true;

    });

}


//timed color change events 
setInterval(colorChange, 3000); // Changes every 3 seconds
setInterval(colorChangeForm, 5000); // Changes every 3 seconds






    //Event Listeners 

    if(formBackground){
    formBackground.addEventListener("keydown",colorChangeForm);
    }   

    if(heroDiv){
    heroDiv.addEventListener("click", colorChange);
    }

    if(aboutMeButton){
        aboutMeButton.addEventListener("click",changeAboutMeDisplay )
    }
