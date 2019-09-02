// Arcade > Intro > 23
// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral!
// You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers.
// The algorithm distorts the input image in the following way:
// Every pixel x in the output image has a value equal to the average value of the pixel values from the
// 3 × 3 square that has its center at x, including x itself.
// All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Ex
// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// => boxBlur(image) = [[1]]
// ^To get the value of the middle pixel in the input 3 × 3 square:
// (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1.
// The border pixels are cropped from the final result.

// image = [[7, 4, 0, 1], 
//          [5, 6, 2, 2], 
//          [6, 10, 7, 8], 
//          [1, 4, 2, 0]]
// => boxBlur(image) = [[5, 4],
//                      [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output.
// To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5.
// The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

function sum(image, i, x) { //helper function that takes the same image input, a row i, and starting column x - returns the sum of three adjacent elements
    let s=0
    for (let q=x; q<x+3; q++) s+=image[i][q]
    return s
}

function boxBlur(image) {
    let blur=[]
    for (let i=0; i<image.length-2; i++) {
        blur.push([])
        for (let j=0; j<image[0].length-2; j++) {
            let a= sum(image, i, j)
            let b= sum(image, i+1, j)
            let c= sum(image, i+2, j)
            blur[i].push(Math.floor((a+b+c)/9))
        }
    }
    return blur
}