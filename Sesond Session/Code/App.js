// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * Host you app on HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking - remove unsued codes
 * code splitting
 * Differntial bundlling - support older folders
 * Diganositcs - better error suggestion
 *
 *
 * Transitive Dependencies
 */

 import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Welcome to react.js")
// create root using createRoot
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
// passing react element inside root
root.render(heading); 