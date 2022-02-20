class Support {
    name;
    role = 'support Web Dev';
    address = 'BD'
    // constructor is a function
    constructor(fullname, home) {
        this.name = fullname
        this.address = home
    }
    startSession() {
        console.log(this.name = 'start a suuport session')
    }
}

const aamir = new Support('Amir Khan', 'ind');
const salman = new Support('Salman Khan', 'dubai');
aamir.startSession()
salman.startSession()

// console.log(aamir);
// console.log(salman);
