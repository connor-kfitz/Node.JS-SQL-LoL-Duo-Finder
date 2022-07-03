const dateDisplay = document.querySelector('#dateDisplay');
dateDisplay.addEventListener('click', formatDate);

dateDisplay.innerHTML = dayjs().format("MMMM DD, YYYY");

var count = 0;

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

