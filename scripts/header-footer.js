const headerElement = $('#header');
const footerElement = $('#footer');

const headerHTML = `
<h1>JavaScript Apps Project</h1>
    <nav>
        <a href="../index.html">Home</a>
        <a href="../pages/bishbosh.html">Bish Bosh</a>
        <a href="../pages/todo.html">ToDo</a>
        <a href="../pages/starwars.html">Star Wars Index</a>
        <a href="../pages/cardgame.html">Card Game</a>
    </nav>
`;

const footerContent = `
    <p>© 2024 Andreas Johansson. All rights reserved.</p>
`

headerElement.html(headerHTML).css(headerStyle);
footerElement.html(footerContent);