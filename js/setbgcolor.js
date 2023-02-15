const inp = document.querySelector(".inpColor")
console.log(inp)

/*knap element*/
/*const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)*/

const bdy = document.querySelector("body")
console.log(bdy)

const inp2 = document.querySelector(".inpColorPalette")
console.log(inp2)

function setBgColorByIdOrText() {
    let col = inp.value
    console.log(col)
    bdy.style.backgroundColor = col
}

function SetBgColorByPalette() {
    let col = inp2.value
    console.log(col)
    bdy.style.backgroundColor = col
}

/*aktiveres når knappen klikkes på*/
/*pbCol.addEventListener('click',setBgColor)*/

/*aktiveres automatisk når den rette tekst skrives*/
inp.addEventListener('keyup', setBgColorByIdOrText)

/*aktiveres automatisk når en farve vælges fra paletten*/
inp2.addEventListener('input', SetBgColorByPalette)
