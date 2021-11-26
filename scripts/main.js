
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img.jpg') {
      myImage.setAttribute('src', 'images/img2.jpg');
    } else if(mySrc==='images/img2.jpg') {
      myImage.setAttribute('src', 'images/img.jpg');
    }
}
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    alert( 'welcome my first web' + myName);
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    alert('welcome my first web'+ storedName);
  }
  myButton.onclick = function() {
    setUserName();
 }
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      alert( 'welcome my first web' + myName);
    }
  }