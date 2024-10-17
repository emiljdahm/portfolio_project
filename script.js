
    const colorsArray =["#FDC5F5","#A8D8EA","#B4E7C3","#FFF1B8","#D4B3F4"];
    let currentIndexHero = 0;
    let currentIndexForm = 0;

    const heroDiv = document.getElementsByClassName('hero')[0]
    const links = document.getElementsByClassName('links')
    const heroButton = document.getElementsByClassName('hero_button')[0]
    const aboutMeContainer = document.getElementsByClassName('about_me')[0]
    const formBackground = document.getElementsByClassName('contact_form')[0]

    function colorChange() {

        if(heroDiv){
        heroDiv.style.backgroundColor= colorsArray[currentIndexHero]
        currentIndexHero = (currentIndexHero + 1) % colorsArray.length
        }
    }
    function colorChangeForm() {

        if(formBackground){
        formBackground.style.backgroundColor= colorsArray[currentIndexForm]
        currentIndexForm = (currentIndexForm + 1) % colorsArray.length
        }
    }

    function changeDisplayAboutMe() {
        if (aboutMeContainer) {
            aboutMeContainer.style.display = "flex";
            aboutMeContainer.style.opacity = "0";
            aboutMeContainer.style.transition = "opacity 0.7s ease";
            
            setTimeout(() => {
                aboutMeContainer.style.opacity = "1";
            }, 10);
    
            heroDiv.style.display = "none";
        }
    }


    formBackground.addEventListener("keypress",colorChangeForm)
    heroDiv.addEventListener("click", colorChange);
    heroButton.addEventListener("click", changeDisplayAboutMe)

