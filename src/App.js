const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/Main').default;
require('./App.css');

const App = () => {
    return <Main />
}

if (typeof document === "undefined") {
    module.exports = App;
} else {
    ReactDOM.hydrate(<App />, document.getElementById("root"))
}