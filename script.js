const aboutBtn = document.querySelector('.abt');
const resumeBtn = document.querySelector('.res');

const aboutSection = document.querySelector('.about');
const resumeSection = document.querySelector('.resume-iframe');

aboutBtn.addEventListener('click', () => {
  aboutSection.style.display = 'block';
  resumeSection.style.display = 'none';

  aboutBtn.style.color = '#facc15';
  resumeBtn.style.color = '#fff';
});

resumeBtn.addEventListener('click', () => {
  aboutSection.style.display = 'none';
  resumeSection.style.display = 'block';

  resumeBtn.style.color = '#facc15';
  aboutBtn.style.color = '#fff';
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  const resumeIframe = document.querySelector(".resume-iframe");

  const aboutBtn = document.querySelector(".abt");
  const resumeBtn = document.querySelector(".res");

  aboutBtn.addEventListener("click", () => {
    aboutSection.style.display = "block";
    resumeIframe.style.display = "none";
  });

  resumeBtn.addEventListener("click", () => {
    aboutSection.style.display = "none";
    resumeIframe.style.display = "block";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  const whatIDoSection = document.querySelector(".what-i-do");
  const resumeIframe = document.querySelector(".resume-iframe");

  const aboutTab = document.querySelector(".abt");
  const resumeTab = document.querySelector(".res");

  aboutTab.addEventListener("click", () => {
    aboutSection.hidden = false;
    whatIDoSection.hidden = false;
    resumeIframe.hidden = true;
  });

  resumeTab.addEventListener("click", () => {
    aboutSection.hidden = true;
    whatIDoSection.hidden = true;
    resumeIframe.hidden = false;
  });
});




let action = document.getElementById("ayush");

action.addEventListener("contextmenu", function show() {
  
})