'use strict';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clockHidden = document.querySelector("#clock");
const toDoFormHidden = document.querySelector("#todo-form");
const todoContainer = document.querySelector("#todo-container");
const loginContainer = document.querySelector(".login__container");
const clockContainer = document.querySelector(".clock__container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreeting(username);
}

function paintGreeting(username) {
    loginContainer.classList.add('anim-out');
    clockContainer.classList.add('anim-out');
    setTimeout(() => {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.innerText = `Good morning! ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
        clockHidden.classList.remove(HIDDEN_CLASSNAME);
        toDoFormHidden.classList.remove(HIDDEN_CLASSNAME);
        todoContainer.classList.remove(HIDDEN_CLASSNAME);

        clockContainer.classList.remove('anim-out');

    }, 300)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginContainer.classList.remove('anim-out');
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreeting(savedUsername);
}
