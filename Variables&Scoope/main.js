

let salary = window.prompt("Please Add Your Annual Salary")
let day = salary.trim()

console.log(typeof day)

console.log(day)

switch(day)
{
    case 'monday':
    alert('Im starting the week reading my emails')
    break;
    case 'tuesday':
    alert('Im do the normal 9-5 working, go out for a walk ')
    break;
    case 'wednesday':
    alert('Im star working and after work go to shopping')
    break;
    case 'thursday':
    alert('Im starting the week with morning run')
    break;
    case 'friday':
    alert('Im working on my projects')
    break;
    case 'saturday':
    alert('Spend time with friends')
    break;
    case 'sunday':
    alert('Have a nioce Sunday-Roast')
    break;
 default :
 alert('Something went wrong')


}
