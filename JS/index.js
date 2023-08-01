"use strict";

contactName.value = localStorage.getItem("Name");
contactEmail.value = localStorage.getItem("Email");
contactNumber.value = localStorage.getItem("Number");

// Typed.js

var nameTyped = new Typed("#name-type", {
    strings: ["^1000A PROGRAMMER^1000", "^1000SAGAR MH^1000"],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true,
});

