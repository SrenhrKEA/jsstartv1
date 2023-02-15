const fruits = ["<br>","apples", "pears", "bananas", "juice"]
const ptag = document.getElementById("demo")
function myfunc(item) {

    console.log(ptag)
    ptag.innerHTML += item + "<br>"
}
 fruits.forEach(myfunc)