const Pizza = (props) => {
    return React.createElement("div",{},[
        React.createElement("h1",{}, props.name),
        React.createElement("p", {}, props.description),
    ]
    )
}


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},"Padre Gino's"),
            React.createElement(Pizza,{
                name : "The Pepperoni Pizza",
                description: "A good Pizza!!"
            }),
            React.createElement(Pizza,{
                name: "The Tandoori Pizza",
                description: "Spicy!! people without previous spice exp can be effected!"
            }),
            React.createElement(Pizza, {
                name: "The Pineapple Pizza",
                description: "You know what I am talking about!!"
            }),
            React.createElement(Pizza, {
                name: "The Chicken BBQ Pizza",
                description: "All about the sauce morty!!"
            }),
            React.createElement(Pizza, {
                name: "The Spicy Mixed Pizza",
                description: "Mixture of all the meat!!"
            }),
        ],
        
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));