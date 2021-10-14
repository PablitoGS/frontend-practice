
const App = () => {
    return React.createElement(
        'div',
        {id:1},
        React.createElement('h1',{}, "Adopt Me!")
        )
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))