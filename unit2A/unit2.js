function mapWith(arr,callback){
    let arr2 = [];
    arr.forEach(e=>{
        arr2.push(callback(e));
    });
    return console.log('result1', arr2);
};
mapWith([1,2,3,4,5], subtractTwo);


function subtractTwo(num){
    return num-2;
};

function map(arr,callback){
    let arr2 = [];
    for(var i = 1; i <= arr.length; i++){
         arr2.push(callback(i));
    };
    return console.log('result',arr2);
};

 map([1,2,3,4,5], subtractTwo);


 