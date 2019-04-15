const togglebtns = document.querySelectorAll('.nav-toggle');
const sideBar = document.querySelector('div.side-navbar');
const sidebarLinks = document.querySelectorAll('.side-navbar li');
// const threeDotMenu = document.querySelector('div.nav-menu-icon');
const navMenu = document.querySelector('div.nav-menu');
const backgroundFader = document.getElementsByClassName('background-fader')[0];
const openLink = document.querySelectorAll('.side-navbar a');


function toggleSidebar() {
  sideBar.classList.toggle('show-side-navbar');
  backgroundFader.classList.toggle('fade-background');
}

togglebtns.forEach(togglebtn => {
  togglebtn.onclick = function() {
    toggleSidebar();
  };
});

backgroundFader.onclick = () => {
  toggleSidebar(); // this is much easier to understand
};

// Handle clicks on li element inside navigation sidebar
// sidebarLinks.forEach(link => {
//   link.onclick = e => {
//     e.openLink();
//   };
// });

sidebarLinks.forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    toggleSidebar();
  };
});

// threeDotMenu.onclick = function() {
//   navMenu.classList.toggle('show-nav-menu');
// };

// export { toggleSidebar };
