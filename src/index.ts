let aaa: string = "eric"
console.log("aaa : " + aaa)


//枚舉
enum LiveStatus {
    SUCCESS = 1,
    FAIL = -1,
    STREAMING = 0
}

const staus = LiveStatus.STREAMING
console.log(staus)

// Union
let uni: number | string;
uni = 1000

//Type
type AAA = number | string;
let a1: AAA;
a1 = 5000
a1 = "true"


//interface
interface Card {
    name: string | number,
    phone: number | string
}

let hi = "hi"

let card1: Card = {
    name: "ericd",
    phone: 123,
    hobbies: ["123", "asdasd", hi]
}

interface Card {
    hobbies: string[]
}

