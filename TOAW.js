document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");

    playButton.addEventListener("click", function () {
        audioPlayer.play();
    });

    pauseButton.addEventListener("click", function () {
        audioPlayer.pause();
    });

    const backgroundSlideshow = document.getElementById("backgroundSlideshow");
    const images = [
        "https://wallpapers.com/images/hd/2560-x-1440-black-ops-2-5o0ori8ckx9oktp5.jpg",
        "https://wallpapers.com/images/high/2560-x-1440-black-ops-2-d57m54b7bwv4co3o.webp",
        "https://wallpapers.com/images/high/2560-x-1440-black-ops-2-c4i9z9xejo9tk9m4.webp",
        "https://wallpapers.com/images/high/2560-x-1440-black-ops-2-zff5yeerw82w4s02.webp",
        "https://wallpapers.com/images/high/2560-x-1440-black-ops-2-f3utxaqkoxus67jz.webp",
        "https://wallpapers.com/images/high/2560-x-1440-black-ops-2-zb9km57t2yt51pev.webp",
        "https://wallpapers.com/images/high/2560-x-1440-black-ops-2-gs9nszkvos3gcon6.webp",
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        backgroundSlideshow.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000);
    changeBackgroundImage();

    if (document.body.classList.contains('contact-page')) {
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});