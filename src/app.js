/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function theExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let done = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function setElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  let generateExcuses =
    setElement(who) +
    " " +
    setElement(done) +
    " " +
    setElement(what) +
    " " +
    setElement(when);

  
  const myDONExcuse = (document.getElementByTagName("p") 
  myDONExcuse[0].innerText = generateExcuses);
  console.log(myDONExcuse[0]);
};
