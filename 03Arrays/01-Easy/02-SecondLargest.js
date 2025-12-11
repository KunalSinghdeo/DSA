// Given an array of integers nums, return the second-largest element in the array. 
// If the second-largest element does not exist, return -1.


// Examples:
// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

// Explanation:

// The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]

// Output: -1

// Explanation:

// The only value in nums is 10, so there is no second largest value, thus -1 is returned

function secondLargest(nums){
    let greatest = nums[0];
    let secondGreatest = -1;

    for (const num of nums){
        if (num > greatest){
            secondGreatest = greatest;
            greatest = num;
        }
        else if ( num > secondGreatest &&  num < greatest){
            secondGreatest = num;
        }
    }
    return secondGreatest;
}