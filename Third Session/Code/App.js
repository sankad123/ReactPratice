//Session 3

import React from "react";
import ReactDOM from "react-dom/client";


 //Recat.craeteElement => Object => HTMLElemnt(render)

 const heading = React.createElement("h1",{id:"heading"},"Welcom to React.Js Course")

 const root = ReactDOM.createRoot(document.getElementById("root"))

 root.render(heading)

 //React using JSX

 const JSXHeading = <h1 id="JSXHeading">React.js using JSX</h1>

 root.render(JSXHeading)

 //Functional Component

 const Title = ()=>(<h1>Title of react</h1>)

 const javascriptVarible = <h1>Javascript Varible</h1>

 const FunctionalCompHeading = () =>(
    <React.Fragment>
    <div id = "container">
        <h1>Welcom to Functional component </h1>
        <Title />
        {Title()}
        <Title></Title>
        {javascriptVarible}
    </div>
    <div></div>
    </React.Fragment>
 )

 root.render(<FunctionalCompHeading />)
 