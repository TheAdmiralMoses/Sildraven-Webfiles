const filterButtons = document.querySelectorAll('.category-filter button');
const loreEntries = document.querySelectorAll('.entry');

// Function to filter entries based on category
function filterEntries(category) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    loreEntries.forEach(entry => {
        if (category === 'all' || entry.dataset.category === category) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
    // Find the button that matches the category and add the active class.
    filterButtons.forEach(button => {
        if (button.dataset.category === category){
            button.classList.add('active');
        }
    });

}

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterEntries(category);
    });
});

// Check for URL parameter
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');

if (categoryParam) {
    filterEntries(categoryParam);
}


const image = document.querySelector('img[usemap="#image-map"]');
const map = document.querySelector('map[name="image-map"]');

image.onload = () => {
    const originalWidth = image.naturalWidth;
    const originalHeight = image.naturalHeight;

    function scaleImageMap() {
        const currentWidth = image.clientWidth;
        const currentHeight = image.clientHeight;

        const scaleX = currentWidth / originalWidth;
        const scaleY = currentHeight / originalHeight;

        map.querySelectorAll('area').forEach(area => {
            const originalCoords = area.getAttribute('coords').split(',');
            const scaledCoords = originalCoords.map((coord, index) => {
                if (index % 2 === 0) { // x-coordinates
                    return Math.round(coord * scaleX);
                } else { // y-coordinates
                    return Math.round(coord * scaleY);
                }
            }).join(',');

            area.setAttribute('coords', scaledCoords);
        });
    }

    scaleImageMap();
    window.addEventListener('resize', scaleImageMap);
};


// Initialize imageMapResize
imageMapResize();

// Old version just in case:
// const filterButtons = document.querySelectorAll('.category-filter button');
// const loreEntries = document.querySelectorAll('.entry');

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const category = button.dataset.category;

//         // Remove active class from all buttons
//         filterButtons.forEach(btn => btn.classList.remove('active'));

//         // Add active class to the clicked button
//         button.classList.add('active');

//         loreEntries.forEach(entry => {
//             if (category === 'all' || entry.dataset.category === category) {
//                 entry.style.display = 'block';
//             } else {
//                 entry.style.display = 'none';
//             }
//         });
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.getElementById('theme-toggle-button');
//     const body = document.body;

//     // Check for saved theme preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         body.classList.add('dark-mode');
//     }

//     themeToggle.addEventListener('click', () => {
//         body.classList.toggle('dark-mode');
//         // Save theme preference
//         if (body.classList.contains('dark-mode')) {
//             localStorage.setItem('theme', 'dark');
//         } else {
//             localStorage.setItem('theme', 'light');
//         }
//     });
// });