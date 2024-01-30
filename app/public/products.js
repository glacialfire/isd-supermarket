// Funzione per inserire dinamicamente le card dei prodotti
function insertProducts(products) {
  const productsContainer = document.getElementById('productsContainer');

  // Popolamento delle card
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image; // Assicurati che l'oggetto prodotto abbia una proprietà 'image' con il percorso dell'immagine
    image.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const productId = document.createElement('p');
    productId.textContent = `ID: ${product.id}`;

    const price = document.createElement('p');
    price.textContent = `Prezzo: ${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Aggiungi al Carrello';

    // Aggiungi un gestore di eventi per il clic sul bottone
    addToCartButton.addEventListener('click', () => {
      // Recupera il carrello dal local storage (se presente)
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Aggiungi il prodotto al carrello
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
      });

      // Salva il carrello aggiornato nel local storage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Personalizza questa parte per gestire l'aggiunta del prodotto al carrello
      console.log(`Prodotto aggiunto al carrello: ${product.name}`);
    });

    // Aggiungi gli elementi alla card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(productId);
    card.appendChild(price);
    card.appendChild(addToCartButton);

    // Aggiungi la card al contenitore
    productsContainer.appendChild(card);
  });
}

// Richiedi al server di ottenere i prodotti
fetch('/get-products')
  .then(response => response.json())
  .then(data => insertProducts(data))
  .catch(error => console.error('Error fetching products:', error));
