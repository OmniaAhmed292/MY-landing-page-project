/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
//Put navbar__list into a variable;
const navBar = document.querySelector('.navbar__menu');
const navigation = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('main section');
//End global variables



/*
    Functtions
*/

// build the navigation bar with buttons and their events
function NavBuild(){
    sections.forEach(section => {
        const navButton = document.createElement('li');
        //Insert the html text to  the li and the function of the button
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="Sections">${section.dataset.nav}</a>`);
        //Append the li to the ul
        navigation.appendChild(navButton);

        //When The button is clicked
        navButton.addEventListener('click', function(event){
        //Prevent the default function to go to link
        event.preventDefault();
        //Scrolling conditions
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    }); //End of event EventListener

  }); //End of for loop

    //Put the finished nav to the nav variable
    navBar.appendChild(navigation);
} //End of NavBuild function




// Add class 'active' to section when near top of viewport
function ActivateSection(){
  //Select All anchors we built in nav using "Sections" class
  let NavSections = document.querySelectorAll(".Sections");
  sections.forEach((Section, i) => {
    //get boundaries for each section
    const Boundary= Section.getBoundingClientRect();
    if(Boundary.top <=380 && Boundary.bottom >= 350){
      //if this true then section is active
      //Activate section and its button
      NavSections[i].classList.add("active_button");
      Section.classList.add("your-active-class");
    }
    else
    {
      NavSections[i].classList.remove("active_button");
      Section.classList.remove("your-active-class");
    }



  });//End of for loop


}//End of Activate section function
//Build the navigation bar
NavBuild();

//While scrolling we want to Activate each section we are at;
window.addEventListener('scroll',(event)=>{
    ActivateSection();
    console.log("scrolling");
})




// Build menu

// Scroll to section on link click


// Set sections as active
