
binarySearch("Manan",names);
function binarySearch(value, names) {
    const names = ["Anubhav","Arpit","Dhruv","Manan","Rishu","Saurabh"]
        let first = 0;    //left endpoint
        let last = names.length - 1;   //right endpoint
        let position = -1;
        let found = false;
        let middle;
    
        while (found == false && first <= last) {
            middle = Math.floor((first + last)/2);
            if (names[middle] == value) {
                found = true;
                position = middle;
            } else if (names[middle] > value) {  //if in lower half
                last = middle - 1;
            } else {  //in in upper half
                first = middle + 1;
            }
        }
        position = position+1;
        return value;
    }
    console.log(binarySearch("Manan",names));