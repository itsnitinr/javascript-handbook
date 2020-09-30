// @input:      Array 
// @output:     Array sorted in ascending / descending order
// @time-cplx:  O(n2)
// @spc-cplx:   O(1)


// ITERATIVE APPROACH

function selectionSort(ar){     //  This function sorts in ascending order
    
    for (var i = 0; i < ar.length; i++) {
        var element = ar[i], pos = i;

        for (let j = i+1; j < ar.length; j++) {
            if(ar[j] < element){
                element = ar[j];
                pos = j;
            }            
        }

        var tmp = ar[i];
        ar[i] = ar[pos];
        ar[pos] = tmp;
    }
}

