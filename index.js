"use strict";

const btn = document.querySelector(".btn");
const input = document.querySelector("#password");
const imgClass= document.querySelector(".imgClass");

const length = 6; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symblol = "@#$%^&*()!+_)(_=";

const AllOnes = upperCase + lowerCase + number + symblol;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    password += symblol[Math.floor(Math.random() * symblol.length)]; 
    while(length > password.length){ 
        password += AllOnes[Math.floor(Math.random() * AllOnes.length)];
    }
    input.value = password;
}

btn.addEventListener("click", generatePassword);

imgClass.addEventListener("click",copyPassword)

function copyPassword(){
    input.select();
    document.execCommand("copy")
}
