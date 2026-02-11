// CUSTOMIZE THESE WITH YOUR PHOTOS AND MEMORIES!
const episodes = [
    {
        id: 1,
        episode: "Episode 1",
        title: "The First Meeting",
        image: "photos/one.jpg",
        heartPosition: { top: '20%', left: '30%' }, // Heart in top-left area
        caption: "Every great love story starts somewhere...",
        question: "What did I give you during our CWTS Outreach Program?",
        answers: [
            { text: "Sprite", correct: true },
            { text: "Yakult", correct: false },
            { text: "Royal", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 2,
        episode: "Episode 2",
        title: "Museum Hopping Date",
        image: "photos/two.jpg",
        heartPosition: { top: '70%', left: '60%' }, // Heart in bottom-right area
        caption: "Walking through the museums while holding your hand...",
        question: "Within the three national museums, which museum did we visit last?",
        answers: [
            { text: "Natural History", correct: false },
            { text: "Anthropology", correct: true },
            { text: "Fine Arts", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 3,
        episode: "Episode 3",
        title: "The First Flower",
        image: "photos/three.jpg",
        heartPosition: { top: '50%', left: '50%' }, // Heart in center
        caption: "My first nervous attempt to give you flowers",
        question: "Question: What were the first set of flowers I ever gave you?",
        answers: [
            { text: "Chamomile", correct: false },
            { text: "Sunflower", correct: true },
            { text: "Crysanthemum", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 4,
        episode: "Episode 4",
        title: "My Watch Buddy",
        image: "photos/four.jpg",
        heartPosition: { top: '15%', left: '70%' }, // Heart in top-right area
        caption: "That March evening was the first time I indulged in a Filipino film with you",
        question: " What film did we watch on StartHub back in March 2025?",
        answers: [
            { text: "Seven Sundays", correct: false },
            { text: "Four Sisters & A Wedding", correct: true },
            { text: "Everything about here", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 5,
        episode: "Episode 5",
        title: "Lego & Arroceros",
        image: "photos/five.jpg",
        heartPosition: { top: '60%', left: '20%' }, // Heart in bottom-left area
        caption: "Building legos in Arroceros! who knew they could be so romantic",
        question: "What were the two legos we built during our date in Arroceros?",
        answers: [
            { text: "Daisy & Gerbera", correct: true },
            { text: "Daisy & Rose", correct: false },
            { text: "Gerbera and Sunflowers", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 6,
        episode: "Episode 6",
        title: "First Gig Vibes",
        image: "photos/six.jpg",
        heartPosition: { top: '40%', left: '80%' }, // Heart on right side middle
        caption: "The first time we went to a concert together",
        question: " What bands did we see during our first gig at J&P?",
        answers: [
            { text: "Ben&Ben and Shirebound", correct: false },
            { text: "The Ridleys and Magiliw Street", correct: true },
            { text: "The Ridleys and Over October", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 7,
        episode: "Episode 7",
        title: "Photobooth Mishaps",
        image: "photos/seven.jpg",
        heartPosition: { top: '75%', left: '45%' }, // Heart in bottom-center area
        caption: "Even the months we missed still feel part of our story...",
        question: "What months of the year did we not take photobooth pics in?",
        answers: [
            { text: "July & October", correct: false },
            { text: "July & September", correct: true },
            { text: "July & May", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 8,
        episode: "Episode 8",
        title: "The First 'I Love You'",
        image: "photos/eight.jpg",
        heartPosition: { top: '30%', left: '15%' }, // Heart in top-left lower
        caption: "Do you still remember when and where this happened?",
        question: "Where were we when we first said 'I love you'?",
        answers: [
            { text: "Manila Bulletin", correct: false },
            { text: "Sleepzone", correct: true },
            { text: "Fort Santiago", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 9,
        episode: "Episode 9",
        title: "Our Favorite Memory",
        image: "photos/nine.jpg",
        heartPosition: { top: '55%', left: '70%' }, // Heart in middle-right
        caption: "These are some of the moments that I knew you were special :)",
        question: "What's your favorite thing we've done together?",
        answers: [
            { text: "Cooking for each other", correct: false },
            { text: "Taking looong walks together", correct: true },
            { text: "Sleeping together", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    },
    {
        id: 10,
        episode: "Episode 10",
        title: "The Future Chapter",
        image: "photos/ten.jpg",
        heartPosition: { top: '45%', left: '25%' }, // Heart in middle-left
        caption: "Our story isn't finished yet and I can't wait to write the next chapters with you",
        question: "What's one thing I'm most looking forward to with you?",
        answers: [
            { text: "Growing together <3 ", correct: true },
            { text: "More dates! Hindi na na-update alphabog ><", correct: false },
            { text: "More patience ;-((", correct: false }
        ],
        ost: "Playing: Ikaw Lang Patutunguhan by Amiel Sol"
    }
];

let currentEpisode = 0;
let completedEpisodes = 0;

// Initialize gallery
const galleryContainer = document.getElementById('galleryContainer');

episodes.forEach((ep, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.index = index;
    
    item.innerHTML = `
        <img src="${ep.image}" alt="${ep.title}" class="gallery-image">
        <div class="gallery-info">
            <span class="episode-tag">${ep.episode}</span>
            <h3 class="gallery-title">${ep.title}</h3>
        </div>
    `;
    
    item.addEventListener('click', () => openEpisode(index));
    galleryContainer.appendChild(item);
});

function openEpisode(index) {
    const item = galleryContainer.children[index];
    if (item.classList.contains('completed')) return;
    
    currentEpisode = index;
    const ep = episodes[index];

    document.getElementById('episodeNumber').textContent = ep.episode;
    document.getElementById('modalTitle').textContent = ep.title;
    document.getElementById('modalImage').src = ep.image;
    document.getElementById('caption').textContent = ep.caption;
    document.getElementById('question').textContent = ep.question;
    document.getElementById('ostPlaying').textContent = ep.ost;
    
    // Reset and position heart overlay
    const heartOverlay = document.getElementById('heartOverlay');
    heartOverlay.classList.remove('found');
    
    // Position the heart indicator
    const heartIndicator = document.getElementById('heartIndicator');
    heartIndicator.style.top = ep.heartPosition.top;
    heartIndicator.style.left = ep.heartPosition.left;
    
    // Create answer buttons
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    ep.answers.forEach((answer, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.addEventListener('click', () => checkAnswer(i, answer.correct));
        answersContainer.appendChild(btn);
    });
    
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('questionSection').classList.add('hidden');
}

// Click on heart to reveal question
document.getElementById('heartOverlay').addEventListener('click', function(e) {
    // Check if clicked near the heart position
    const rect = this.getBoundingClientRect();
    const heartIndicator = document.getElementById('heartIndicator');
    const heartRect = heartIndicator.getBoundingClientRect();
    
    const clickX = e.clientX;
    const clickY = e.clientY;
    
    // Check if click is within heart area (with some tolerance)
    if (clickX >= heartRect.left - 30 && clickX <= heartRect.right + 30 &&
        clickY >= heartRect.top - 30 && clickY <= heartRect.bottom + 30) {
        this.classList.add('found');
        document.getElementById('questionSection').classList.remove('hidden');
    }
});

function checkAnswer(index, isCorrect) {
    const buttons = document.querySelectorAll('.answer-btn');
    
    if (isCorrect) {
        buttons[index].classList.add('correct');
        setTimeout(() => {
            completeEpisode();
        }, 1000);
    } else {
        buttons[index].classList.add('wrong');
        setTimeout(() => {
            buttons[index].classList.remove('wrong');
        }, 1000);
    }
}

function completeEpisode() {
    galleryContainer.children[currentEpisode].classList.add('completed');
    completedEpisodes++;
    
    updateProgress();
    
    document.getElementById('modal').classList.add('hidden');
    
    if (completedEpisodes === episodes.length) {
        setTimeout(showFinalScene, 500);
    }
}

function updateProgress() {
    const percentage = (completedEpisodes / episodes.length) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = 
        completedEpisodes === episodes.length 
        ? 'All Episodes Complete!' 
        : `Episode ${completedEpisodes + 1} of ${episodes.length}`;
}

function showFinalScene() {
    document.querySelector('.drama-title').style.display = 'none';
    galleryContainer.style.display = 'none';
    document.getElementById('finalScene').classList.remove('hidden');
}

// Close modal functionality
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

// Close modal when clicking outside of it
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
    }
});

// Background music control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = 'Click to Play Music';
        isPlaying = false;
    } else {
        bgMusic.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
        musicToggle.textContent = 'Music Playing';
        isPlaying = true;
    }
});

// Final Scene Button Controls
document.getElementById('yesBtn').addEventListener('click', showYesScreen);
document.getElementById('absolutelyBtn').addEventListener('click', showYesScreen);
document.getElementById('retryBtn').addEventListener('click', retryStory);

function showYesScreen() {
    document.getElementById('finalScene').classList.add('hidden');
    document.getElementById('yesScreen').classList.remove('hidden');
    
    // Create floating hearts
    createFloatingHearts();
}

function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    // Create 30 hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 200); // Stagger the hearts
    }
    
    // Keep creating hearts
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 800);
}

function retryStory() {
    // Reset everything
    completedEpisodes = 0;
    currentEpisode = 0;
    
    // Remove completed state from all episodes
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.classList.remove('completed');
    });
    
    // Reset progress bar
    updateProgress();
    
    // Hide final scene and show gallery
    document.getElementById('finalScene').classList.add('hidden');
    document.querySelector('.drama-title').style.display = 'block';
    galleryContainer.style.display = 'grid';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}