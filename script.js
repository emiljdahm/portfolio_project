
    const colorsArray =["#FDC5F5","#A8D8EA","#B4E7C3","#FFF1B8","#D4B3F4"];
    let currentIndex = 0;

    const heroDiv = document.getElementsByClassName('hero')[0]
    const links = document.getElementsByClassName('links')
    const heroButton = document.getElementsByClassName('hero_button')[0]
    const aboutMeContainer = document.getElementsByClassName('about_me')[0]

    function colorChange() {

        if(heroDiv){
        heroDiv.style.backgroundColor= colorsArray[currentIndex]
        currentIndex = (currentIndex + 1) % colorsArray.length
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



    heroDiv.addEventListener("click", colorChange);
    heroButton.addEventListener("click", changeDisplayAboutMe)

