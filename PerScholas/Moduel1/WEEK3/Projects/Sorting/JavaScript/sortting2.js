// bubble sort
// check back
let bubbleSort = (arr) => {
    let num = [5, 3, 8, 4, 6];
let swap = false;
for (let i = 0; num.length; i++) {
    if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        swap = true;
        arr[i] = arr[i + 1];
        arr[i + 1]=temp;
        
    }
} do {
    bubbleSort(arr);
} while (swap);
return arr;
}
console.log(bubbleSort);
