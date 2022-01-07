const React = require( 'react' )
const ReactDOM = require( 'react-dom' )

const App = function() {
    return(
        <p>Hello World! I've missed you!</p>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)