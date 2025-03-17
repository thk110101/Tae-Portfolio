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

    // Carousel functionality
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
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

    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

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
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var posters = document.getElementsByClassName("poster");

for (let i = 0; i < posters.length; i++) {
    posters[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal image, close it
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}