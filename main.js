import './style.scss';
import Typed from "typed.js";
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints.min.js';


var options = {
  strings: ["Food....", "Drink...."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
};

let typed = new Typed(".element", options);

let toDown = {
  distance: "50px",
  origin: "top",
    interval: 300,
  duration:800,
};

ScrollReveal().reveal(".to-down", toDown);

let toRight = {
  distance: "100px",
  origin: "left",
    interval: 300,
  duration:800,
};

ScrollReveal().reveal(".to-right", toRight);

let toLeft = {
  distance: "100px",
  origin: "right",
  interval: 300,
  duration:800,
};

ScrollReveal().reveal(".to-left", toLeft);

var waypoint = new Waypoint({
  element: document.getElementById("home-content"),
  handler: function (direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
    if (oldNavLink != null) {
      oldNavLink.classList.remove("active");
      }
      let currentNavLink = document.querySelector('[href="#home"]');
      currentNavLink.classList.add("active");
  },
  offset: "25%",
});

// let sections = ['about', 'service', 'menu'];
// sections.forEach((section) => { 
//    new Waypoint({
//     element: document.getElementById(section),
//     handler: function (direction) {
//       let oldNavLink = document.querySelector(".nav-link.active");
//       oldNavLink.classList.remove("active");
//       let currentNavLink = document.querySelector('[href="#${section}"]');
//       currentNavLink.classList.add("active");
//     },
//     offset: "25%",
//   });
// });


var waypoint = new Waypoint({
  element: document.getElementById("about"),
  handler: function (direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
      oldNavLink.classList.remove("active");
      let currentNavLink = document.querySelector('[href="#about"]');
      currentNavLink.classList.add("active");
  },
  offset: "25%",
});

var waypoint = new Waypoint({
  element: document.getElementById("service"),
  handler: function (direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector('[href="#service"]');
    currentNavLink.classList.add("active");
  },
  offset: "25%",
});

var waypoint = new Waypoint({
  element: document.getElementById("menu"),
  handler: function (direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector('[href="#menu"]');
    currentNavLink.classList.add("active");
  },
  offset: "25%",
});

var waypoint = new Waypoint({
  element: document.getElementById("contact"),
  handler: function (direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector('[href="#contact"]');
    currentNavLink.classList.add("active");
  },
  offset: "25%",
});




let menuLists = [
  {
    id: 1,
    img: "public/img/plate1.png",
    title: "Barbecue",
    description: "Special Delicious Dish",
    price: 22.2,
    currency: "$",
  },
  {
    id: 2,
    img: "public/img/plate2.png",
    title: "Salad with fish",
    description: "Special Delicious Dish",
    price: 30.7,
    currency: "$",
  },
  {
    id: 3,
    img: "public/img/plate3.png",
    title: "Spinach Salad",
    description: "Special Delicious Dish",
    price: 16.6,
    currency: "$",
  },
];

let menuRow = document.getElementById("menuRow");
menuLists.forEach((menuList) => { 
  let div = document.createElement('div');
  div.className = "col-8 col-lg-3 ";
  div.innerHTML = `
  <div class="card plate-card mb-3 mb-md-0">
                <div class="card-body">
                  <img src="${menuList.img}" class="my-5 w-75 mx-auto d-block" alt="">
                  <p class="fw-bold m-0">${menuList.title}</p>
                  <p class="text-black-50">${menuList.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="fw-bold m-0">${menuList.currency} ${menuList.price}</p>
                    <button class="btn btn-sm btn-primary">
                      <i class="bi bi-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
  `;
  menuRow.append(div);
});