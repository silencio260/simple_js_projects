//******FindIndex excercise */

var numbers = [1,2,3,4,5,6,7]
var nums = [1,3,3,5,11,9,19,20, 22, 10]
var langs = ['javascript', 'c++', 'java', 'c#', 'swift', 'flutter']

function findIndex(arr, callback){  
  
        for(i = 0; i < arr.length; i++){
            if(callback(arr[i], i, arr)){
                return i;
        }
    }
}

var item = findIndex(numbers, function(item, index, indices){

    return item === 5;
})

var even = findIndex(nums, function(item, index, indices){

    return item % 2 === 0;
})


var languages = findIndex(langs, function(item, index, indices){

    return item == 'flutter';
})

console.log('the result of find index languages is: ' + languages)
console.log('the result of findIndex even number is: ' + even)
console.log('the result of find index is: ' + item)

// End of FindIndex

//******ForEach callback example */

list = ['my', 'forEach', 'example' ]

function forEach(arr, callback){
    for(i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
    }
}

var result = ' '
function callback(item, index, arr){

    if(index - 1 !== arr.length){
        result += item + ' ';
    }else{
        result += item + '!!!'
        console.log(result)

    }
}

forEach(list, callback);
// console.log(result)

// End of forEach

function sendMessage(message, callback){
    return callback(message);
}

function greet(name, formater){
    return 'hello' + formater(name)
}

function upperCase(name){
    return name.toUpperCase()
}

var result = greet('Rukmar', upperCase )

// console.log(result)

// sendMessage('alert prompt', alert)
