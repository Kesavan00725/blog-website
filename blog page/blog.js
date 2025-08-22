// Carousel functionality
        let blogCurrentIndex = 0;
        let videoCurrentIndex = 0;

        function moveCarousel(carouselId, direction) {
            const carousel = document.getElementById(carouselId);
            const items = carousel.children;
            const totalItems = items.length;
            const itemsToShow = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
            const maxIndex = Math.max(0, totalItems - itemsToShow);
            
            if (carouselId === 'blogCarousel') {
                blogCurrentIndex += direction;
                if (blogCurrentIndex < 0) blogCurrentIndex = maxIndex;
                if (blogCurrentIndex > maxIndex) blogCurrentIndex = 0;
                carousel.style.transform = `translateX(-${blogCurrentIndex * (100 / itemsToShow)}%)`;
            } else if (carouselId === 'videoCarousel') {
                videoCurrentIndex += direction;
                if (videoCurrentIndex < 0) videoCurrentIndex = maxIndex;
                if (videoCurrentIndex > maxIndex) videoCurrentIndex = 0;
                carousel.style.transform = `translateX(-${videoCurrentIndex * (100 / itemsToShow)}%)`;
            }
        }

         function playVideo(videoId) {
        alert(`Playing video: ${videoId}\n\nNote: This is a demo. In a real implementation, this would open a video player or navigate to a video page.`);
        }
        function playVideo(containerId, youtubeId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <iframe width="100%" height="250"
            src="https://youtu.be/LfaMVlDaQ24?si=PKpw1IPaP9VUa0ir${youtubeId}?autoplay=1&rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;
}


        // Auto-play carousel (optional)
        setInterval(() => {
            moveCarousel('blogCarousel', 1);
        }, 5000);

        setInterval(() => {
            moveCarousel('videoCarousel', 1);
        }, 6000);

        // Handle window resize
        window.addEventListener('resize', () => {
            blogCurrentIndex = 0;
            videoCurrentIndex = 0;
            document.getElementById('blogCarousel').style.transform = 'translateX(0)';
            document.getElementById('videoCarousel').style.transform = 'translateX(0)';
        });

        // Smooth scrolling for navigation links
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = targetSection.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });