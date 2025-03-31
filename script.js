document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.project-type a');
    const projects = document.querySelectorAll('.project');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            
            // Remove active class from all category links
            categoryLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked category link
            link.classList.add('active');
            
            // Filter projects based on selected category
            projects.forEach(project => {
                const categories = project.getAttribute('data-category').split(',').map(cat => cat.trim());
                if (categories.includes(category) || category === 'All') {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // active link

        const projectLinks = document.querySelectorAll(".projects-menu ul li a"); // Select all project links
        const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
    
        projectLinks.forEach(link => {
            const linkHref = link.getAttribute("href"); // Get the href of the link
    
            if (linkHref === currentPage) {
                link.classList.add("active"); // Add the 'active' class to the matching link
            }
        });

    // scroll

    // const logoContainer = document.querySelector(".logo");
    // const staticLogo = document.querySelector(".static-logo");
    // let lastScrollTop = 0; // Track the last scroll position
    // let gifTimeout; // Timeout to reset the logo after scrolling

    // if (logoContainer && staticLogo) {
    //     window.addEventListener("scroll", function () {
    //         const currentScrollTop = window.scrollY; // Get the current scroll position
    //         const gifLogo = document.createElement("img"); // Create a new <img> for the GIF
    //         gifLogo.classList.add("gif-logo");

    //         if (currentScrollTop > lastScrollTop) {
    //             // Scrolling down
    //             gifLogo.src = "assets/General Assets/left.gif";
    //         } else if (currentScrollTop < lastScrollTop) {
    //             // Scrolling up
    //             gifLogo.src = "assets/General Assets/right.gif";
    //         } else {
    //             return; // No scroll direction change
    //         }

    //         // Clear any existing GIFs
    //         const existingGif = document.querySelector(".gif-logo");
    //         if (existingGif) {
    //             existingGif.remove();
    //         }

    //         // Add the GIF to the logo container
    //         logoContainer.appendChild(gifLogo);

    //         // Show the GIF and hide the static logo
    //         gifLogo.style.opacity = 1;
    //         staticLogo.style.opacity = 0;

    //         // Reset the logo after a short delay
    //         clearTimeout(gifTimeout);
    //         gifTimeout = setTimeout(() => {
    //             gifLogo.style.opacity = 0; // Hide the GIF
    //             staticLogo.style.opacity = 1; // Show the static logo
    //             gifLogo.remove(); // Remove the GIF from the DOM
    //         }, 1000); // Adjust the delay as needed (1 second here)

    //         lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
    //     });
    // } else {
    //     console.error("Logo container or static logo not found.");
    // }


    document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.querySelector(".logo");
    const staticLogo = document.querySelector(".static-logo");
    let lastScrollTop = 0; // Track the last scroll position
    let gifTimeout; // Timeout to reset the logo after scrolling

    if (logoContainer && staticLogo) {
        window.addEventListener("scroll", function () {
            const currentScrollTop = window.scrollY; // Get the current scroll position
            const gifLogo = document.createElement("img"); // Create a new <img> for the GIF
            gifLogo.classList.add("gif-logo");

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                gifLogo.src = "assets/General Assets/left.gif";
            } else if (currentScrollTop < lastScrollTop) {
                // Scrolling up
                gifLogo.src = "assets/General Assets/right.gif";
            } else {
                return; // No scroll direction change
            }

            // Clear any existing GIFs
            const existingGif = document.querySelector(".gif-logo");
            if (existingGif) {
                existingGif.remove();
            }

            // Add the GIF to the logo container
            logoContainer.appendChild(gifLogo);

            // Show the GIF and hide the static logo
            gifLogo.style.opacity = 1;
            staticLogo.style.opacity = 0;

            // Reset the logo after a short delay
            clearTimeout(gifTimeout);
            gifTimeout = setTimeout(() => {
                gifLogo.style.opacity = 0; // Hide the GIF
                staticLogo.style.opacity = 1; // Show the static logo
                gifLogo.remove(); // Remove the GIF from the DOM
            }, 1000); // Adjust the delay as needed (1 second here)

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
        });
    } else {
        console.error("Logo container or static logo not found.");
    }
});

    console.log("DOM fully loaded and parsed"); // Debug log

    const projectsTitle = document.querySelector(".projects-title");
const menu = document.querySelector(".projects-menu");
const arrow = document.querySelector(".arrow");

if (projectsTitle && menu && arrow) {
    projectsTitle.addEventListener("click", function () {
        menu.classList.toggle("open");
        arrow.classList.toggle("rotate");
    });
} else {
    console.error("Projects menu elements not found.");
}

    // Carousel functionality
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');

    if (slides.length > 0) {
        let currentIndex = 1;

        // Clone first and last slides for infinite effect
        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);
        firstClone.id = 'first-clone';
        lastClone.id = 'last-clone';

        carouselContainer.appendChild(firstClone);
        carouselContainer.prepend(lastClone);

        const updateCarousel = () => {
            carouselContainer.style.transition = 'transform 0.5s ease-in-out';
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const jumpToSlide = () => {
            carouselContainer.style.transition = 'none';
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex--;
                updateCarousel();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex++;
                updateCarousel();
            });
        }

        carouselContainer.addEventListener('transitionend', () => {
            if (carouselContainer.children[currentIndex].id === 'first-clone') {
                currentIndex = 1;
                jumpToSlide();
            }
            if (carouselContainer.children[currentIndex].id === 'last-clone') {
                currentIndex = slides.length;
                jumpToSlide();
            }
        });

        // Initial setup
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else {
        console.error("Carousel slides not found.");
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var posters = document.getElementsByClassName("poster");

    for (let i = 0; i < posters.length; i++) {
        posters[i].onclick = function(){
            if (modal && modalImg) {
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            if (modal) {
                modal.style.display = "none";
            }
        }
    }

    // When the user clicks anywhere outside of the modal image, close it
    if (modal) {
        modal.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Listen for all mouse overs of all links in the nav element

    const navLinks = document.querySelectorAll('.cascading a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            // Store the HTML 5 data attribute of index of the current element
            const selectedIndex = this.getAttribute('data-index');
            navLinks.forEach(link => {
                // Skip the current element
                const index = this.getAttribute('data-index');
                if(index == 0) {
                    document.querySelectorAll('.cascading a[data-index="1"], .cascading a[data-index="2"]').forEach(el => el.style.paddingLeft = '40px');
                    document.querySelectorAll('.cascading a[data-index="3"], .cascading a[data-index="4"]').forEach(el => el.style.paddingLeft = '80px');
                } else if (index == 2) {
                    document.querySelectorAll('.cascading a[data-index="0"], .cascading a[data-index="1"]').forEach(el => el.style.paddingLeft = '40px');
                    document.querySelectorAll('.cascading a[data-index="3"], .cascading a[data-index="4"]').forEach(el => el.style.paddingLeft = '40px');
                } else if (index == 4) {
                    document.querySelectorAll('.cascading a[data-index="0"], .cascading a[data-index="1"]').forEach(el => el.style.paddingLeft = '80px');
                    document.querySelectorAll('.cascading a[data-index="2"], .cascading a[data-index="3"]').forEach(el => el.style.paddingLeft = '40px');
                }
            }
            );
        });
        // Reset the padding of all the links when the mouse leaves the nav element
        link.addEventListener('mouseleave', function() {
            navLinks.forEach(link => {
                link.style.paddingLeft = '0px';
            });
        });
    });
    
});

