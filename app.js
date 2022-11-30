let arr = []
function list () {
    const div = document.querySelector("div")
    const input = document.querySelector("input").value
    let sum = 0
    if (Number(input)){
        arr.push(input)
    }
    arr.forEach(num => sum += Number(num))
    div.innerHTML = `List : [${arr}] dan jumlahnya ${sum}`
    
}

