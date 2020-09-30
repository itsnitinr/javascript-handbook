// @input:      Array 
// @output:     Array sorted in ascending / descending order
// @time-cplx:  O(n2)
// @spc-cplx:   O(1)


// ITERATIVE APPROACH

function bubbleSort(ar){     //  This function sorts in ascending order
    
    for (var i = ar.length-1; i > 0; i--) {
        var element = ar[i], pos = i;
        
        for(var j = 0; j < i; j++){
            if(ar[j] > element){
                element = ar[j];
                pos = j;
            }
        }
    
        var tmp = ar[i];
        ar[i] = ar[pos];
        ar[pos] = tmp;
    }
}