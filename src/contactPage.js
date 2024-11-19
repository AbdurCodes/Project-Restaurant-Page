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
    const emailManager = document.createElement('p');
    emailManager.textContent = 'contactManager@tastee.com'; 
    divManager.appendChild(emailManager);
    content.appendChild(divManager);
    
    const divDeliveryBoy = document.createElement('div');
    const contactDeliveryBoy = document.createElement('h2');
    contactDeliveryBoy.textContent = 'Contact Delivery Person';
    divDeliveryBoy.appendChild(contactDeliveryBoy);
    const phoneDeliveryBoy = document.createElement('p');
    phoneDeliveryBoy.textContent = '555-555-5555';
    divDeliveryBoy.appendChild(phoneDeliveryBoy);
    const emailDeliveryBoy = document.createElement('p');
    emailDeliveryBoy.textContent = 'contactDeliveryBoy@tastee.com'; 
    divDeliveryBoy.appendChild(emailDeliveryBoy);
    content.appendChild(divDeliveryBoy);
}