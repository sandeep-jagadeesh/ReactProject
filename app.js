// this I will get from core of React that is line 11 from index file
const parent = React.createElement("div", {"div": "parent"}, 
               [React.createElement("div", {"div": "child"}, 
               [React.createElement("h1",{},"header style, I am the header"), 
               React.createElement("h2", {}, "I am the second header")]),
               React.createElement("div", {"div": "child2"}, 
               [React.createElement("h1",{},"header style, for the header 2 child 2"), 
               React.createElement("h2", {}, "I am the second header child 2")])
            ]);
console.log("head", parent);
// this I will get from line 12 - which modify the DOM or manipulate the DOM from index file
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



