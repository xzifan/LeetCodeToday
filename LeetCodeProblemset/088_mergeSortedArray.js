/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m+n

    while (n>0&&m>0){
        // console.log(i,m,n)
        // console.log(nums1)
        nums1[--i]=nums1[m-1]>nums2[n-1]?nums1[--m]:nums2[--n]
        // if(nums1[m-1]>nums2[n-1]){
        //     nums1[i-1]=nums1[m-1]
        //     m--
        // }
        // else {
        //     nums1[i-1] = nums2[n-1]
        //     n--
        // }
        // i--
    }

    while (n>0){
        nums1[--i] = nums2[--n] // 注意：如果直接返回nums2，leetcode仍会报错。因为只检验nums1的最终值
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([1,2,3,0,0],3,[2,5],2))
console.log(merge([0,0],0,[3,5],2))
console.log(merge([0],0,[1],1))
console.log(merge([1],1,[],0))
