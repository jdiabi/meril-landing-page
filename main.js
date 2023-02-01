// ------------ BURGER MENU -----------//

var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham").addEventListener("click", toggleMenu)
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

// ------------- Home ------------- //
var baliseHome = document.querySelector(".home");
var baliseHomeM = document.querySelector(".homeM");//version Mobile
var active = baliseHome;
var activeM = baliseHomeM;

var home = new Waypoint({
  element: document.getElementById('home'),
  handler: function () {
    if (!baliseHome.classList.contains('active')) {
      baliseHome.classList.add('active');
      baliseHomeM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseHome;
      activeM = baliseHomeM;
    }
  }, offset: -400
})

// ------------- About ------------- //

var baliseAbout = document.querySelector(".about");
var baliseAboutM = document.querySelector(".aboutM");//version Mobile

var about = new Waypoint({
  element: document.getElementById('product'),
  handler: function () {
    if (!baliseAbout.classList.contains('active')) {
      baliseAbout.classList.add('active');
      baliseAboutM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseAbout;
      activeM = baliseAboutM;
    }
  }, offset: 200
})

var about = new Waypoint({
  element: document.getElementById('product'),
  handler: function () {
    if (!baliseAbout.classList.contains('active')) {
      baliseAbout.classList.add('active');
      baliseAboutM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseAbout;
      activeM = baliseAboutM;
    }
  }, offset: -900
})

// ------------- Features ------------- //

var baliseFeatures = document.querySelector(".features");
var baliseFeaturesM = document.querySelector(".featuresM");//version Mobile

var about = new Waypoint({
  element: document.getElementById('features'),
  handler: function () {
    if (!baliseFeatures.classList.contains('active')) {
      baliseFeatures.classList.add('active');
      baliseFeaturesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFeatures;
      activeM = baliseFeaturesM;
    }
  }, offset: 200
})

var about = new Waypoint({
  element: document.getElementById('features'),
  handler: function () {
    if (!baliseFeatures.classList.contains('active')) {
      baliseFeatures.classList.add('active');
      baliseFeaturesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFeatures;
      activeM = baliseFeaturesM;
    }
  }, offset: -900
})

// ------------- Fees ------------- //

var baliseFees = document.querySelector(".fees");
var baliseFeesM = document.querySelector(".feesM");//version Mobile

var about = new Waypoint({
  element: document.getElementById('fees'),
  handler: function () {
    if (!baliseFees.classList.contains('active')) {
      baliseFees.classList.add('active');
      baliseFeesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFees;
      activeM = baliseFeesM;
    }
  }, offset: 200
})

var about = new Waypoint({
  element: document.getElementById('fees'),
  handler: function () {
    if (!baliseFees.classList.contains('active')) {
      baliseFees.classList.add('active');
      baliseFeesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFees;
      activeM = baliseFeesM;
    }
  }, offset: -600
})

// ------------- Contact ------------- //

var baliseContact = document.querySelector(".contactus");
var baliseContactM = document.querySelector(".contactusM"); //version Mobile

var about = new Waypoint({
  element: document.getElementById('contact'),
  handler: function () {
    if (!baliseContact.classList.contains('active')) {
      baliseContact.classList.add('active');
      baliseContactM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseContact;
      activeM = baliseContactM;
    }
  }, offset: 200
})

// ------------------ Scroll  ----------------- //

ScrollReveal({ reset: false });
    
ScrollReveal().reveal('.LPtext1', {// "Secure, Scalable And Supported"
  delay: 100,
  origin: 'bottom',
  distance: '30px',
  duration: 2000
});
ScrollReveal().reveal('.LPtext2', { // "Beautiful & Intuitive"
  delay: 110,
  origin: 'bottom',
  distance: '40px',
  duration: 2000
});
ScrollReveal().reveal('.LPbouton', {// Landing page bouton
  delay: 100,
  origin: 'bottom',
  duration: 2000,
  distance: '20px',
});
ScrollReveal().reveal('.Ptext1', {// Produit "our product"
  delay: 300,
  origin: 'bottom',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.card', {// Produit Cards
  delay: 300,
  origin: 'bottom',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.CLlist', {// CheckList
  delay: 300,
  origin: 'bottom',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.img1', {// Trial Image 1
  delay: 400,
  origin: 'left',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.img2', {// Trial Image 2
  delay: 400,
  origin: 'top',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.img3', {// Trial Image 3
  delay: 400,
  origin: 'right',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.img4', {// Trial Image 4
  delay: 400,
  origin: 'bottom',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.img5', {// Trial Image 5
  delay: 400,
  origin: 'bottom',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.Ttext1', {// Trial "Secure, Scalable And Supported"
  delay: 450,
  origin: 'right',
  duration: 2000,
  distance: '30px',
});
ScrollReveal().reveal('.Ttext2', {// Trial text Lorem
  delay: 500,
  origin: 'right',
  duration: 2000,
  distance: '40px',
});
ScrollReveal().reveal('.Tbouton', {// Trial text Lorem
  delay: 500,
  origin: 'right',
  duration: 1500,
  distance: '20px',
});
ScrollReveal().reveal('.Fcenter', {// Icon mobile view center
  delay: 600,
  origin: 'bottom',
  duration: 3000,
  distance: '50px',
});
ScrollReveal().reveal('.Fleft', {// icons Left
  delay: 500,
  origin: 'left',
  duration: 3000,
  distance: '30px',
});
ScrollReveal().reveal('.Fright', {// icons right
  delay: 500,
  origin: 'right',
  duration: 3000,
  distance: '30px',
});
ScrollReveal().reveal('.Mtext1', {// Meril Text
  delay: 500,
  origin: 'bottom',
  duration: 3000,
  distance: '20px',
});
ScrollReveal().reveal('.Mimg', {// Meril image
  delay: 600,
  origin: 'bottom',
  duration: 3000,
  distance: '20px',
});
