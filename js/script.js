///Setting the current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///Smooth Scrolling Animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Below is smooth scroll animation for Safari

    // e.preventDefault();
    // const href = link.getAttribute("href");

    // //Scroll back to top
    // if (href === "#")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });

    // //Scroll to other links
    // if (href != "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    //Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///Stick Navigation

const sectionHeroEl = document.querySelector(".hero-section");

// const observer = new IntersectionObserver();

// observer.observer(sectionHeroEl);

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null, //In the viewport (change if scroll is inside another element)
    threshold: 0, //The selected element (header) is out of the viewport
    rootMargin: "-80px", //The margin for the observer
  }
);

observer.observe(sectionHeroEl);
