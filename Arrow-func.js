// const square = function (x) {
//     return x * x;
// };


// const square = (x) => {
//         return x * x;
// };


// const square = (x) => x * x;
// console.log(square(7));


const myEvent = {
    name: 'Birthday Party',
    guestList: ['Snehomoy', 'Rupomoy'],
    printGuestlist() {
        console.log("Guests are coming in my " + this.name + '.');

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending the " + this.name);
        })
    }


};

myEvent.printGuestlist();

