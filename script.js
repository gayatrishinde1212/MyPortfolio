// /*====================== toggle icon navbar=======================*/
// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active');
// }
// /*====================== scroll section active link=======================*/

// let sections=document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav a');

// window.onscroll=() =>{
//     sections.forEach(sec =>{
//         let top=window.scrollY;
//         let offset=sec.offsetTop - 150;
//         let height =sec.offsetHeight;
//         let id =sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach.apply(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+id+']').classList.add('active');

//             });
//         };
//     });
    
//     /*====================== sticky navbar =======================*/
//     let header =document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY >100);

//     /*====================== remove toggle icon and navbar =======================*/
//     menuIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// };

//  /*====================== scroll reveal =======================*/
//  ScrollReveal({
//     distance:'80px',
//     duration:2000,
//     delay:200,
//  });

//  ScrollReveal().reveal('.home-content,heading',{origin:'top'});
//  ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
//  ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
//  ScrollReveal().reveal('.home-contact p ,.about-content',{origin:'right'});

//  /*====================== typed js  =======================*/
//  const typed =new Typed('multiple-text',{
//     strings:['Frontend Developer','Web Designer'],
//     typeSpeed:70,
//     backSpeed:70,
//     backDelay:1000,
//     loop:true,   
//  });
// // // Wait for the DOM content to fully load
// // document.addEventListener('DOMContentLoaded', function() {
// //     // Target the element where you want to display the typing effect
// //     const typed = new Typed('.multiple-text', {
// //         strings: ['Frontend Developer', 'Web Designer'],
// //         typeSpeed: 70,
// //         backSpeed: 70,
// //         backDelay: 1000,
// //         loop: true // Optional: Set to true if you want the strings to loop
// //     });
// // });






document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navbar Icon and Menu
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // Smooth Scroll Function
    const smoothScrollTo = (target) => {
        const element = document.querySelector(target);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    };

    // Navbar Menu Click Event
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            const target = link.getAttribute('href'); // Get target section ID
            smoothScrollTo(target); // Smooth scroll to target section

            // Apply ScrollReveal animation to target section
            ScrollReveal().reveal(target, {
                origin: 'bottom',
                distance: '80px',
                duration: 2000,
                delay: 200
            });

            // Update active state of menu items on click
            document.querySelectorAll('header nav a').forEach(item => {
                item.classList.remove('active'); // Remove active class from all menu items
            });
            link.classList.add('active'); // Add active class to clicked menu item
        });
    });

    // Scroll Event Listener for Active Link Highlighting
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        document.querySelectorAll('header nav a').forEach(link => {
            let target = link.getAttribute('href');
            let section = document.querySelector(target);
            let offset = section.offsetTop;
            let height = section.offsetHeight;

            // Highlight the active link based on scroll position
            if (scrollY >= offset - 150 && scrollY < offset + height - 150) {
                document.querySelectorAll('header nav a').forEach(item => {
                    item.classList.remove('active'); // Remove active class from all menu items
                });
                link.classList.add('active'); // Add active class to current menu item
            }
        });
    });

    // Initial Highlighting of Active Link on Page Load
    window.addEventListener('load', () => {
        let scrollY = window.scrollY;

        document.querySelectorAll('header nav a').forEach(link => {
            let target = link.getAttribute('href');
            let section = document.querySelector(target);
            let offset = section.offsetTop;
            let height = section.offsetHeight;

            // Highlight the active link based on initial scroll position
            if (scrollY >= offset - 150 && scrollY < offset + height - 150) {
                link.classList.add('active'); // Add active class to initial menu item
            }
        });
    });

    // Other ScrollReveal Configurations
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });

    // Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['Full Stack Developer','Frontend Developer', 'Web Designer'],
        typeSpeed: 80,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
});


// // Add event listeners to skill category headings
// document.querySelectorAll('.skills-container h3').forEach(function (heading) {
//     heading.addEventListener('click', function () {
//       // Remove 'active' class from all headings
//       document.querySelectorAll('.skills-container h3').forEach(function (element) {
//         element.classList.remove('active');
//       });
  
//       // Add 'active' class to clicked heading
//       heading.classList.add('active');
//     });
//   });
  

// document.addEventListener('DOMContentLoaded', () => {
//     // Toggle Navbar Icon and Menu
//     let menuIcon = document.querySelector('#menu-icon');
//     let navbar = document.querySelector('.navbar');

//     menuIcon.onclick = () => {
//         menuIcon.classList.toggle('fa-xmark');
//         navbar.classList.toggle('active');
//     };

//     // Smooth Scroll Function
//     const smoothScrollTo = (target) => {
//         const element = document.querySelector(target);
//         window.scrollTo({
//             top: element.offsetTop - 100, // Adjust scroll offset if needed
//             behavior: 'smooth'
//         });
//     };

//     // Navbar Menu Click Event
//     document.querySelectorAll('header nav a').forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault(); // Prevent default anchor behavior

//             const target = link.getAttribute('href'); // Get target section ID
//             smoothScrollTo(target); // Smooth scroll to target section

//             // Apply ScrollReveal animation to target section
//             ScrollReveal().reveal(target, {
//                 origin: 'bottom',
//                 distance: '80px',
//                 duration: 2000,
//                 delay: 200
//             });

//             // Update active state of menu items on click
//             document.querySelectorAll('header nav a').forEach(item => {
//                 item.classList.remove('active'); // Remove active class from all menu items
//             });
//             link.classList.add('active'); // Add active class to clicked menu item
//         });
//     });

//     // Initialize ScrollReveal for other animations
//     ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
//     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
//     ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
//     ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });
// });
// Skills data with corresponding Font Awesome classes

// Add active class to the clicked skill group


