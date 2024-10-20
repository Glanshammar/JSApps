$(function() {
    const headerElement = $('#header');
    const footerElement = $('#footer');
    const pageHead = $('head');

    const headerContent = `
    <h1>JavaScript Apps Project</h1>
        <nav>
            <a href="../pages/index.html">Home</a>
            <a href="../pages/bishbosh.html">Bish Bosh</a>
            <a href="../pages/todo.html">ToDo</a>
            <a href="../pages/starwars.html">Star Wars Index</a>
            <a href="../pages/cardgame.html">Card Game</a>
        </nav>
    `;

    const footerContent = `
        <p>©2024 Andreas Johansson. All rights reserved.</p>
    `;

    headerElement.html(headerContent).append('<link rel="stylesheet" type="text/css" href="../styles/header.css">');
    footerElement.html(footerContent).append('<link rel="stylesheet" type="text/css" href="../styles/footer.css">');
    pageHead.append('<link rel="stylesheet" type="text/css" href="../styles/base.css">');
})