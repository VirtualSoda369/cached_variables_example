

//let's test this with an array first
//----------------------------------------------------
let test_arr = [];

//fill the array with a LOT of elements
for (let i = 0; i < 1000000; i++)
{
   test_arr.push(i);
}

// test vars to do something inside the loop
let sum_1 = 0; 
let sum_2 = 0;

// looping through the array without caching the variables
//----------------------------------------------------
const loopArray_no_cached = (arr_toLoop)=>
{
    for (let i = 0; i < arr_toLoop.length; i++)
    {
        sum_1 += arr_toLoop[i];
    }

    console.log(`sum no cached arr is  : ${sum_1}`);
}


// looping through the array caching the variables
//----------------------------------------------------
const loopArray_cached = (arr_toLoop)=>
{
    for (let i = 0 , len = arr_toLoop.length; i < len ; i++)
    {
        sum_2 += arr_toLoop[i];
    }

    console.log(`sum cached arr is  : ${sum_2}`);
}



// test no chached arr
console.time("execution time for no cached arr is: ");
loopArray_no_cached(test_arr);
console.timeEnd("execution time for no cached arr is: ");


// test chached arr
console.time("execution time for cached arr is: ");
loopArray_cached(test_arr);
console.timeEnd("execution time for cached arr is: ");







//let's test with an object now
//----------------------------------------------------
let test_obj = 
{
    cnt : 1000000,
    sum_no_cached : 0,
    sum_cached : 0,
    sum_obj_no_cached :
    {
        total_val: 0
    },
    sum_obj_cached :
    {
        total_val: 0
    }
}


//----------------------------------------------------
const loopObj_no_cached = (obj_toLoop, has_child_obj = false)=>
{
    //this IF is for testing purposes only
    if(has_child_obj)
    {   
        // this is awful lol!
        for (let i = 0; i < obj_toLoop.cnt; i++)
        {
            obj_toLoop.sum_obj_no_cached.total_val += i;
        }

        console.log(` obj_toLoop.sum_obj_no_cached.total_val is  : ${obj_toLoop.sum_obj_no_cached.total_val}`);
    }
    else
    {
        for (let i = 0; i < obj_toLoop.cnt; i++)
        {
            obj_toLoop.sum_no_cached += i;
        }

        console.log(` obj_toLoop.sum_no_cached is  : ${obj_toLoop.sum_no_cached}`);
    }  
}


//----------------------------------------------------
const loopObj_cached = (obj_toLoop, has_child_obj = false)=>
{
    if(has_child_obj)
    {
        let total_val = obj_toLoop.sum_obj_cached.total_val;

        for (let i = 0 , len = obj_toLoop.cnt; i < len; i++)
        {
            total_val += i;
        }

        obj_toLoop.sum_obj_cached.total_val = total_val;
        console.log(` obj_toLoop.sum_obj_cached.total_val is  : ${obj_toLoop.sum_obj_cached.total_val}`);
    }
    else
    {
        let sum_cached = obj_toLoop.sum_cached;

        for (let i = 0 , len = obj_toLoop.cnt; i < len; i++)
        {
            sum_cached += i;
        }

        obj_toLoop.sum_cached = sum_cached;
        console.log(` obj_toLoop.sum_cached is  : ${obj_toLoop.sum_cached}`);
    } 
}



//----------------------------------------------------
//----------------------------------------------------

// test no chached obj
console.time("execution time for no cached obj is: ");
loopObj_no_cached(test_obj);
console.timeEnd("execution time for no cached obj is: ");


// test chached obj
console.time("execution time for cached obj is: ");
loopObj_cached(test_obj);
console.timeEnd("execution time for cached obj is: ");








//----------------------------------------------------
//----------------------------------------------------

// test no chached obj
console.time("execution time for no cached nested obj is: ");
loopObj_no_cached(test_obj, true);
console.timeEnd("execution time for no cached nested obj is: ");


// test chached obj
console.time("execution time for cached nested obj is: ");
loopObj_cached(test_obj,true);
console.timeEnd("execution time for cached nested obj is: ");

