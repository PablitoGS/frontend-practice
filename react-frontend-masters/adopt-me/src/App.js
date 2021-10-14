const Pet = (props) => {
    return React.createElement(
        'div', {}, [
            React.createElement('h2', {}, props.name),
            React.createElement('h3', {}, props.animal),
            React.createElement('h3', {}, props.breed),
        ]
    )
}

const App = () => {
    return React.createElement(
        'div',{id:1},
        [
            React.createElement('h1',{}, "Adopt Me!"),
            React.createElement(Pet,{name: 'Luna', animal: 'dog', breed: 'Havanese'}),
            React.createElement(Pet,{name: 'Gardfield', animal: 'cat', breed: 'Orange Persian'}),
            React.createElement(Pet,{name: 'Perales', animal: 'bird', breed: 'Canario'}),
        ]
    )
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))