export function loadMenuPage() {

    const restaurantMenu = document.createElement('h1');
    restaurantMenu.textContent = 'Tastee Restaurant Menu';
    content.appendChild(restaurantMenu);

    for (let key in menuItems) {

        const h2 = document.createElement('h2');
        h2.textContent = key;
        content.appendChild(h2);

        const ol = document.createElement('ol');
        for (let i=0; i<menuItems[key].length; i++) {
            const li = document.createElement('li');
            li.textContent = menuItems[key][i];
            ol.appendChild(li);
        }
        content.appendChild(ol);
    }
}



let menuItems = {
    Appetizers: [
        'Classic Caesar Salad',
        'Crispy Garlic Bread',
        'Spicy Chicken Wings',
        'Mozzarella Sticks with Marinara',
        'Veggie Spring Rolls',
        'Omlete',
    ],
    'Soups & Salads': [
        'Creamy Tomato Soup',
        'Chicken Corn Chowder',
        'Greek Salad with Feta Cheese',
        'Asian Sesame Salad',
        'Avocado and Quinoa Bowl',
    ],
    "Main Courses": [
        'Grilled Salmon with Lemon Butter',
        'Classic Cheeseburger with Fries',
        'Penne Alfredo with Chicken',
        'Vegan Buddha Bowl',
        'Beef Steak with Mashed Potatoes',
    ],
    "Pizza & Pasta": [
        'Margherita Pizza',
        'BBQ Chicken Pizza',
        'Pepperoni Pizza',
        'Spaghetti Carbonara',
        'Lasagna with Garlic Bread',
    ],
    Desserts: [
        'New York Cheesecake',
        'Chocolate Lava Cake',
        'Tiramisu',
        'Ice Cream Sundae',
        'Fresh Fruit Platter',
    ],
    Beverages: [
        'Fresh Lemonade',
        'Classic Iced Tea',
        'Mango Smoothie',
        'Cappuccino',
        'Sparkling Water',
    ],
    "Kids’ Menu": [
        'Mini Cheese Pizza',
        'Chicken Nuggets with Fries',
        'Mac and Cheese',
        'Grilled Cheese Sandwich',
        'Fruit Salad with Yogurt',
    ],
}