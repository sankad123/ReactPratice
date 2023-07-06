const heading = React.createElement("h1", {id:"heading"}, "Welcome to react.js")
// create root using createRoot
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
// passing react element inside root
root.render(heading);