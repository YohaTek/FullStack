document.getElementById('switch-to-english').addEventListener('click', function(event) {
    event.preventDefault();
    switchLanguage('en');
});

document.getElementById('switch-to-dutch').addEventListener('click', function(event) {
    event.preventDefault();
    switchLanguage('nl');
});

function switchLanguage(language) {
    // Fetch or define the translations
    const translations = {
        en: {
            'title': 'Welcome to our website',
            'description': 'We provide top-notch network design solutions to ensure seamless communication within your organization.'
            // Add more translations as needed
        },
        nl: {
            'title': 'Welkom op onze website',
            'description': 'We bieden eersteklas netwerkontwerpoplossingen om een naadloze communicatie binnen uw organisatie te garanderen.'
            // Add more translations as needed
        }
    };

    // Select all elements with the 'translatable' class
    const translatableElements = document.querySelectorAll('.translatable');

    translatableElements.forEach(function(element) {
        const key = element.getAttribute('data-translate-key');
        element.textContent = translations[language][key];
    });
}
