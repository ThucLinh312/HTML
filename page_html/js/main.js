const title = document.getElementById("main-title");
title.innerText = "Chào mừng bạn đến với khóa học JavaScript!";

const desc = document.querySelector(".description");
desc.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";

function sayHello() {
  const name = document.getElementById("studentName").value;
  const greeting = document.getElementById("greeting");
  greeting.innerText = `Xin chào, ${name}!`;
}
