/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function getExcuse() {
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
  //this will print your line of excuses
  console.log(generateExcuses);
  //this will put the excuse in the highlighted area.
  const myDOMExcuse = (document.getElementByTagName("p") /
  myDOMExcuse[0].innerText = generateExcuses);
  console.log(myDOMExcuse[0]);
};
