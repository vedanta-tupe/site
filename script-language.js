document.getElementById('toggleButton').addEventListener('click', function() {
    var englishText = document.getElementById('englishText');
    var marathiText = document.getElementById('marathiText');
    var button = document.getElementById('toggleButton');

    if (button.innerHTML === 'English') {
        // Show English text, hide Marathi text
        englishText.style.display = 'block';
        marathiText.style.display = 'none';
        button.innerHTML = 'Marathi';
    } else {
        // Show Marathi text, hide English text
        englishText.style.display = 'none';
        marathiText.style.display = 'block';
        button.innerHTML = 'English';
    }
});

const toggleButton = document.getElementById('toggleButton');
let isMarathi = false;

// Function to update the content based on the selected language
const updateContent = (language) => {
    const langAttr = language === 'marathi' ? 'data-mr' : 'data-en';

    // Loop through all elements that have data-en or data-mr attributes
    document.querySelectorAll('[data-en], [data-mr]').forEach((element) => {
        element.innerHTML = element.getAttribute(langAttr);
    });
};

// Function to toggle between Marathi and English
const toggleLanguage = () => {
    isMarathi = !isMarathi;
    toggleButton.textContent = isMarathi ? 'English' : 'मराठी';
    updateContent(isMarathi ? 'marathi' : 'english');
};

// Event listener for the button toggle
toggleButton.addEventListener('click', toggleLanguage);

// Initialize content with English (content is already in HTML)
updateContent('marathi');
