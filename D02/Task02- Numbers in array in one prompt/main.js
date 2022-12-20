// take an array using prompt + split
var arr = prompt('ENTER YOUR ARRAY AND SPLIT WITH , ').split(',')
// '1' , '2' ,'3'
// var numArr =[]
for(var i=0;i<arr.length;i++ ){
     arr[i] = parseInt(arr[i])
    // numArr.push(parseInt(arr[i]))
}
console.log(arr)