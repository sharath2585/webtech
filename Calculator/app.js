let input = document.querySelector('input')

let getValue = (e) => {
    let btnValue = e.target.innerText
    input.value += btnValue
}

let result = ()=>{
    input.value = eval(input.value)
}

let empty = () => {
    input.value = ""
}