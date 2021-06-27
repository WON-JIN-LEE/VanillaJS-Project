'use strict';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clockHidden = document.querySelector("#clock");
const toDoFormHidden = document.querySelector("#todo-form");
const todoContainer = document.querySelector("#todo-container");
const home= document.querySelector("#home");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clockHidden.classList.remove(HIDDEN_CLASSNAME);
    toDoFormHidden.classList.remove(HIDDEN_CLASSNAME);
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}

