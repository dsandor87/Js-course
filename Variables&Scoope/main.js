

let income = window.prompt("Please Add Your Annual Salary")
let base = parseInt(income.trim())


function calculateTax (base){

    if (base === NaN) {
        console.log('Thats not a number mate')
    }

    if (base <= 37500) {
         taxedSalary = (base * .8) / 12
    } 
    else if (base > 37500 && base <= 150000) {
        console.log('2nd rate')
        taxedSalary = (base / 2)
    }else {
        taxedSalary = (base / 1000)
        console.log('something else')
    }

    if(taxedSalary ===NaN){
        console.log('did something wrong')
    }

     console.log(`Based on your annual incom you will recive, ${taxedSalary}£ monthly`)

}

calculateTax(base)