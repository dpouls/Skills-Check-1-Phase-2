
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called addMoreDucks that takes in an array
//and if the array's length is greater than 4, replace the
//3rd element of the array with the string '42 ducks'. 
//addMoreDucks should return the array.

function addMoreDucks(arr){
    arr.length > 4 ? arr.splice(2,1,"42 ducks"): null;
    return arr;
}
//Code here


//////////////////PROBLEM 2////////////////////

//Create a function called cutItOut that takes in an array
//and if the array's length is greater than 4, removes 
//the 3rd element of the array. cutItOut should return the array.

function cutItOut(arr){
    arr.length > 4 ? arr.splice(2,1): null;
    return arr;
}
//Code here


//////////////////PROBLEM 3////////////////////

//Create a function called changeName that takes in an array
//and finds the element "Tolkn", and changes it to "Tolkien".
//changeName should return the array.
function changeName(arr){
    for (let i = 0; i< arr.length; i++){
        if(arr[i] === "Tolkn"){
            arr[i] = "Tolkien"
        }
    }; return arr;
}
//Code here

