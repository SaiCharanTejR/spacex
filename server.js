const express = require("express");
const app = express();
const ReactDOMServer = require("react-dom/server");
const App = require('./public/bundle');
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    const htmlBody = ReactDOMServer.renderToString(App());
    res.send(renderMarkup(htmlBody));
});

app.listen(port, () => {
    console.log('Server is up and running');
})

function renderMarkup(html) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="og:title" content='SpaceX Launch Programs' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="SpaceX Launch Programs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SpaceX Launch Programs</title>
        <link rel="stylesheet" type="text/css" href="./styles.css" />
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="./bundle.js"></script>
    </body>
    </html>`;
}
