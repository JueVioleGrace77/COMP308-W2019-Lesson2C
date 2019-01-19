"use strict";


// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){//Code block
let myFunctionVariable = 0;

    function Start() {
        let myLocalVariable = 0;
        console.log(`%cApp Started..${myFunctionVariable}`, "font-size: 20px; color: blue; font-weight: bold;");
    }

    window.addEventListener("load", Start);
})();