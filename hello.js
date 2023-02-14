function logHello() {
    console.log("Hello")
}

logHello()

function sumTwoNumbers(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber
    console.log(result)
}

sumTwoNumbers(5, 4)

function sumThreeNumbers(firstNumber, secondNumber, thirdNumber) {
    const result = (firstNumber * secondNumber) - thirdNumber
    console.log(result)
}

sumThreeNumbers(5, 4, 12)

function helloName(name) {
    console.log("Hello there, ".concat(name))
    console.log(`Hello there, ${name}`)
}

helloName("Alex")

function compareTypes(type) {

    if (typeof type === "number") {
        let result = type * type
        console.log(result)
    } else if (typeof type === "boolean") {
        console.log("is it boolean")
    } else {
        console.log("it is not a number")
    }

    (function (a) {
        console.log(Boolean(a))
    })(1);
}

compareTypes("")

const myArrowFunction = (a) => {

    ((b) => {
        console.log(`Hello from arrow function ${a.concat(b)}`)
    })("Ivan");
}

myArrowFunction("Alex ")

function showNumbersToTen() {
    for (let i = 0; i <= 10; i++) {
        if ((i === 2) || (i === 5) || (i === 6)) {
            continue
        } else {
            console.log(i)
        }
    }
}

showNumbersToTen()

function showNumbers(firstNumber, secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
        console.log(i)
    }
}

showNumbers(10, 20)

function compareBooleanValue(firstValue, secondValue) {
    if (firstValue && secondValue) {
        console.log("Both of true")
    } else if (firstValue || secondValue) {
        console.log("Only one is true")

    } else {
        console.log("None one of them is true")
    }
}

compareBooleanValue(false, false)

function returnNumber(num) {
    let result = num * num * num
    console.log(result)
    return result
}

returnNumber(3)

function homework(num1, num2) {
    if ((num1 === 7) || (num2 === 7) || num1 + num2 === 7) console.log(true)
}

homework(3, 7)

function homework2(wins, lost, equality) {
    let points = (wins * 3) + equality;
    let matches = wins + lost + equality
    console.log(`Points :${points}`)
    console.log(`Matches :${matches}`)
}

homework2(2, 4, 3)

function dayOfWeek() {
    // let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    // if (day > days.length) {
    //     console.log("Invalid day")
    // } else {
    //     console.log(days[day - 1])
    // }


    // for (let i = 0; i<= days.length; i++){
    //     console.log(days[i])
    // }

    // console.log(days.length.toString())

    let num = [1, 2, 3]

    num.push(4)
    for (let i = 0; i <= 15; i++) {
        console.log(num.length)
    }
}

dayOfWeek()
