// @input:      Array 
// @output:     Array sorted in ascending / descending order
// @time-cplx:  O(n2)
// @spc-cplx:   O(1)


// ITERATIVE APPROACH

function insertionSort(ar){     //  This function sorts in ascending order
    
    for (let i = 1; i < ar.length; i++) {
        var element = ar[i];

        var j = i-1;
        while(j >= 0){
            if(ar[j] > element)
            ar[j+1] = ar[j];

            else break;
            j--;
        }
        ar[j+1] = element;
    }
}