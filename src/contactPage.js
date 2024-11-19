export function loadContactPage() {

    const contact = document.createElement('h1');
    contact.textContent = 'Contact Tastee Restaurant';
    content.appendChild(contact);

    const divManager = document.createElement('div');
    const contactmanager = document.createElement('h2');
    contactmanager.textContent = 'Contact Manager';
    divManager.appendChild(contactmanager);
    const phoneManager = document.createElement('p');
    phoneManager.textContent = '555-555-5554';
    divManager.appendChild(phoneManager);
    content.appendChild(divManager);
    
    const divDeliveryBoy = document.createElement('div');
    const contactDeliveryBoy = document.createElement('h2');
    contactDeliveryBoy.textContent = 'Contact Delivery Person';
    divDeliveryBoy.appendChild(contactDeliveryBoy);
    const phoneDeliveryBoy = document.createElement('p');
    phoneDeliveryBoy.textContent = '555-555-5555';
    divDeliveryBoy.appendChild(phoneDeliveryBoy);
    content.appendChild(divDeliveryBoy);

}