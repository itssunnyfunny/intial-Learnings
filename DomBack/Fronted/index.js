

let state = {
 count : 0
}

function onButtonPress() {
 state.count++;
 buttonComponentReRender()
}

function buttonComponentReRender() {
const con= document.getElementById("container");
con.innerHTML = "";
 const component = buttonComponent(state.count);
 console.log(component);
 
con.appendChild(component);
}

function buttonComponent(count) {
 const button = document.createElement("button");
 button.innerHTML = `Couter ${count}`;
 button.setAttribute("onclick", `onButtonPress()`);
 return button
}


buttonComponentReRender()
