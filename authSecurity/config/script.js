// Js integration in login and signUp frontend integration

const exit = document.getElementById("exit");
const message = document.getElementById("message");
const sExit = document.getElementById("sExit");
const sMessage = document.getElementById("sMessage");

exit.onclick = () => {
    message.classList.add("active");
}
sExit.onclick = () => {
    sMessage.classList.add("active");
}