const headerElement = $('#header');
const footerElement = $('#footer');

const headerHTML = `
<h1>JavaScript Apps Project</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="bishbosh/bishbosh.html">Bish Bosh</a>
        <a href="todo/todo.html">ToDo</a>
        <a href="starwars/starwars.html">Star Wars Index</a>
        <a href="cardgame/cardgame.html">Card Game</a>
    </nav>
`;

const headerStyle = `
    header {
        background: linear-gradient(to right, #3498db, #2c3e50);
        color: white;
        padding: 20px 0;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    h1 {
        margin: 0;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    nav {
        margin-top: 15px;
    }
    nav a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 1.1em;
        transition: all 0.3s ease;
    }
    nav a:hover {
        color: #f39c12;
    }
`;

const footerContent = `
    <p>© 2024 Andreas Johansson. All rights reserved.</p>
`

headerElement.html(headerHTML).css(headerStyle);
footerElement.html(footerContent);