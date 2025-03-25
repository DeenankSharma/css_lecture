console.log("start of script")

setTimeout(() => {  
  console.log("inside setTimeout")
}, 0) 

console.log("end of script")

console.log("start of script")

setTimeout(() => {
  console.log("inside setTimeout1")
} , 0)

setTimeout(() => {
  console.log("inside setTimeout2")
} , 0)


setTimeout(() => {
  console.log("inside setTimeout3")
} , 1000)


console.log("end of script")


console.log("start of script")

setTimeout(() => {
  console.log("inside setTimeout")
} , 0)

Promise.resolve().then(() => {
  console.log("inside promise")
})


console.log("end of script")