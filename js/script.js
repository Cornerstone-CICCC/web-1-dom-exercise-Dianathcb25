// YOUR CODE HERE
const outPut1 = document.getElementById("output1")

const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", function(){
    outPut1.style.color = "red"
})

/////////////
const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", function(){
    const outPut2 = document.getElementById("output2")
    const text = outPut2.querySelector("p")
    const span = document.createElement("span")
    span.textContent = "Hello World"
    text.insertAdjacentElement("afterend", span)
})

/////////////
const btn3 = document.querySelector("#btn3")

btn3.addEventListener("click", function(){
    const outPut3 = document.getElementById("output3")
    const small = outPut3.querySelector("p.small-text")
    small.classList.remove("small-text")
})

/////////////
const outPut4 = document.getElementById("output4")

const btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", function(){
    outPut4.style.color = "red"
})

//////////////////
const btn5 = document.querySelector("#btn5")

btn5.addEventListener("click", function(){
    const msg = document.getElementById("message")
    console.log(msg.value)
})