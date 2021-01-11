const React = require('react')
const ReactDOM = require('react-dom')

const App = function() {
    return(
        <p>Hello World!</p>
    )
}

ReactDOM.render(
    document.getElementById('root'),
    <App />
)