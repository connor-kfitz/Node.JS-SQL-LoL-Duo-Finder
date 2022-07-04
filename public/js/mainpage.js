// Date display using dayJs
const dateDisplay = document.querySelector('#dateDisplay');
dateDisplay.addEventListener('click', formatDate);

dateDisplay.innerHTML = dayjs().format("MMMM DD, YYYY");

// Count to keep track of current date style
var count = 0;

// Format date based on count input, incrementing on each click
function formatDate(){
    if(count == 0){
        dateDisplay.innerHTML = dayjs().format("MMMM-DD-YYYY");;
        count++;
        return;
    } else if (count == 1) {
        dateDisplay.innerHTML = dayjs().format("MM-DD-YYYY");;
        count++;
        return;
    } else if (count == 2) {
        dateDisplay.innerHTML = dayjs().format("MM-DD-YY");;
        count++;
        return;
    } else if (count == 3) {
        dateDisplay.innerHTML = dayjs().format("MM-D-YY");;
        count++;
        return;
    } else if (count == 4) {
        dateDisplay.innerHTML = dayjs().format("M-D-YY");;
        count = 0;
        return;
    }

}

