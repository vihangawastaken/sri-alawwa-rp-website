window.addEventListener("load", () => { 
    document.querySelector(".content").classList.add("loaded");
    document.querySelector(".loading").classList.add("loading--hidden"); document.querySelector(".loading").addEventListener("transitionend", () => { document.body.removeChild(document.querySelector("loading")); }); });

    const showPopupButton = document.getElementById('showPopup');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');

showPopupButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  const element = document.querySelector('.element-to-animate');
  
  // Function to handle the scroll event
  function handleScroll() {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  // Add a scroll event listener
  window.addEventListener('scroll', handleScroll);

  const scrollTracker = document.getElementById("scroll-tracker");

  window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
          scrollTracker.style.backgroundColor = "transparent";
      } else {
          scrollTracker.style.backgroundColor = "blue";
      }
  });

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.backgroundColor = "#01BAEF";
    } else {
      document.getElementById("header").style.backgroundColor = "transparent";
    }
  }