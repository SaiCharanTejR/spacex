const express = require("express");
const app = express();
const ReactDOMServer = require("react-dom/server");
const App = require('./public/bundle');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const htmlBody = ReactDOMServer.renderToString(App());
    res.send(renderMarkup(htmlBody));
});

app.listen(3000, () => {
    console.log('Server is up and running');
})

function renderMarkup(html) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="./bundle.js"></script>
    </body>
    </html>`;
}
