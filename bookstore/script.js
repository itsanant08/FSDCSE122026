const books = [

    {
        id: 1,
        name: "The Alchemist",
        price: 399,
        image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
    },

    {
        id: 2,
        name: "Atomic Habits",
        price: 499,
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },

    {
        id: 3,
        name: "The Psychology of Money",
        price: 350,
        image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
    },

    {
        id: 4,
        name: "Rich Dad Poor Dad",
        price: 299,
        image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
    },

    {
        id: 5,
        name: "Ikigai",
        price: 399,
        image: "https://covers.openlibrary.org/b/isbn/9780143452742-L.jpg"
    },

    {
        id: 6,
        name: "Think and Grow Rich",
        price: 450,
        image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
    }

];


let cart = [];


// Display Books

function displayBooks() {

    let container = document.getElementById("booksContainer");

    container.innerHTML = "";

    let row = document.createElement("tr");


    books.forEach(function(book, index) {

        let column = document.createElement("td");

        column.innerHTML = `

            <img 
                src="${book.image}"
                width="150"
                height="200"
            >

            <h2>${book.name}</h2>

            <p>₹${book.price}</p>

            <button onclick="addToCart(${book.id})">
                Add to Cart
            </button>

        `;


        row.appendChild(column);


        // After every 3 books create a new row

        if ((index + 1) % 3 === 0) {

            container.appendChild(row);

            row = document.createElement("tr");

        }

    });


    // Add remaining books

    if (row.children.length > 0) {

        container.appendChild(row);

    }

}


// Add to Cart

function addToCart(id) {

    let book = books.find(function(book) {

        return book.id === id;

    });

    cart.push(book);

    updateCart();

}


// Update Cart

function updateCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(function(book, index) {

        total = total + book.price;


        cartItems.innerHTML += `

            <p>

                ${book.name} - ₹${book.price}

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </p>

        `;

    });


    document.getElementById("cartCount").innerText = cart.length;

    document.getElementById("cartTotal").innerText = total;


    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    }

}


// Remove from Cart

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// View Cart

document
    .getElementById("viewCartBtn")
    .addEventListener("click", function() {

        document
            .getElementById("cartItems")
            .scrollIntoView();

    });


// Run when page loads

displayBooks();

updateCart();