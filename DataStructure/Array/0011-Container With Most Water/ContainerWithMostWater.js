/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // find Max and Min value 
    var maxV = Math.max.apply(height);
    var minV = Math.min.apply(height);
    
    var maxArea = 0;
    var start = 0;
    var end = height.length;
    while (start < end) {
        var width = end - start;
        var high = 0;
        if (height[start] < height[end]) {
            high = height[start];
            start++;
        } else {
            high = height[end];
            end--;
        }
        var area = width*high;
        if (area > maxArea) {
            maxArea = area;
        }
    }
    
    return maxArea;
};


