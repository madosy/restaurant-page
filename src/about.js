export default function loadAbout(){
    const main = document.querySelector('main')
    main.innerHTML = '<h1>About</h1>'

    const content = document.createElement('div')
    content.innerHTML = `
    <p>Welcome to Crème de la Crème, where passion meets creativity to bring you the most delightful macarons you've ever tasted.</p>

    <p>At our restaurant, we believe that each macaron should be a small piece of art, crafted with care and attention to detail. That's why our team of talented pastry chefs uses only the finest ingredients, sourced from the best suppliers, to create our macarons.</p>
    
    <p>Our mission is to bring joy to our customers' lives, one macaron at a time. Whether you're looking for a sweet treat to brighten up your day or a unique and delicious dessert to share with friends and family, we have a macaron for every occasion.</p>
    
    <p>Our menu features a wide variety of macaron flavors, ranging from classic favorites like chocolate and vanilla to more adventurous options like lavender and Earl Grey tea. Each macaron is crafted with a crispy outer shell and a soft, chewy center, filled with a rich and creamy ganache that perfectly complements the cookie.</p>
    
    <p>We take pride in our commitment to sustainability and local sourcing. Whenever possible, we source our ingredients from local farmers and suppliers, reducing our carbon footprint and supporting the local economy.</p>
    
    <p>At our restaurant, we believe in giving back to the community. We're proud to be involved in various community initiatives and events, and we're always looking for ways to support local charities and organizations.</p>
    
    <p>We hope you enjoy your experience at Crème de la Crème. If you have any questions or feedback, please don't hesitate to reach out to us. We'd love to hear from you.</p>`

    main.appendChild(content)
    }