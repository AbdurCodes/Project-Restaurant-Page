import homeImage from './restaurant.jpg';

export function loadHomePage() {

    const welcome = document.createElement('h1');
    const restaurantPhoto = document.createElement('img');
    const restaurantDesc = document.createElement('p');
    
    welcome.textContent = 'Welcome to Tastee Restaurant';
    
    restaurantPhoto.src = homeImage;
    restaurantPhoto.width = 500;
    restaurantPhoto.height = 700;
    
    restaurantDesc.textContent = 'This is a newly opened restaurant which aims at providing the best quality food at an affordable price. No compromise on cleanliness.';
    
    content.appendChild(welcome);
    content.appendChild(restaurantPhoto);
    content.appendChild(restaurantDesc);
}