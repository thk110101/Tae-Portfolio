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

    // Logo GIF Reset

    logo.addEventListener("mousemove", function (event) {
        const logoRect = logo.getBoundingClientRect(); // Get the logo's position and size
        const mouseX = event.clientX; // Get the mouse's X position relative to the viewport
        const logoCenterX = logoRect.left + logoRect.width / 2; // Calculate the center of the logo

        if (mouseX < logoCenterX) {
            // Mouse is on the left side
            if (logo.src !== "assets/General Assets/left.gif") {
                logo.src = "assets/General Assets/left.gif";
            }
        } else {
            // Mouse is on the right side
            if (logo.src !== "assets/General Assets/right.gif") {
                logo.src = "assets/General Assets/right.gif";
            }
        }
    });

    // Reset to the static logo when the mouse leaves the logo
    logo.addEventListener("mouseleave", function () {
        logo.src = "assets/General Assets/logo test.svg";
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

    document.querySelectorAll('.project img').forEach(image => {
        image.addEventListener('mouseenter', function(event) {
            const tooltip = this.nextElementSibling; // The tooltip next to the image
            tooltip.style.display = 'block'; // Show the tooltip
        });

        image.addEventListener('mousemove', function(event) {
            const tooltip = this.nextElementSibling; // The tooltip next to the image
            const offsetX = 10; // Adjust horizontal offset
            const offsetY = 10; // Adjust vertical offset
            tooltip.style.left = event.pageX + offsetX + 'px';
            tooltip.style.top = event.pageY + offsetY + 'px';
        });

        image.addEventListener('mouseleave', function() {
            const tooltip = this.nextElementSibling; // The tooltip next to the image
            tooltip.style.display = 'none'; // Hide the tooltip when leaving the image
        });
    });

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

    const logo = document.querySelector(".logo img");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            logo.src = "assets/General Assets/right.gif";
        } else {
            // Scrolling up
            logo.src = "assets/General Assets/left.gif";
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative values
    });

});

