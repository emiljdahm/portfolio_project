
    const colorsArray =["#FDC5F5","#A8D8EA","#B4E7C3","#FFF1B8","#D4B3F4"];
    const navBarColorsArray = ["#000000","#FFFFFF"];
    let currentIndex = 0;

    const heroDiv = document.getElementsByClassName('hero')[0]
    const navBar = document.getElementsByClassName('navbar')[0]
    const heroButton = document.getElementsByClassName('hero_button')
    const aboutMeContainer = document.getElementsByClassName('about_me')[0]

    function colorChange() {

        if(heroDiv){
        heroDiv.style.backgroundColor= colorsArray[currentIndex]
        currentIndex = (currentIndex + 1) % colorsArray.length


        }
       
    }

    function navBarColors() {
        if(navBar){
            navBar.style.backgroundColor= navBarColorsArray[currentIndex]
            currentIndex = (currentIndex + 1) % navBarColorsArray.length
    
    
            }
        }

    function aboutMeChange(){
        if(aboutMeContainer){
            if(aboutMeContainer.style.display === "none"){
                aboutMeContainer.style.display = "flex";
                heroDiv.style.display = "none";
            }
        }
            
    }



    navBar.addEventListener("click", navBarColors);
    heroDiv.addEventListener("click", colorChange);
    heroButton.addEventListener("click", aboutMeChange);

