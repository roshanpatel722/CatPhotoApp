// The Decorator Pattern

// The constructor to decorate
class AndroidPhone {
    constructor() {
        this.cost = 997;
        this.screenSize = 5.9;
    }
    getCost() {
        return this.cost;
    }
    getScreenSize() {
        return this.screenSize;
    }
}

// Decorator 1
class Memory extends AndroidPhone {
    constructor(AndroidPhone) {
        super();
        this.AndroidPhone = AndroidPhone;
    }

    getCost() {
        return this.AndroidPhone.getCost() + 75;
    }
}

// Decorator 2
class Insurance extends AndroidPhone {
    constructor(AndroidPhone) {
        super();
        this.AndroidPhone = AndroidPhone;
    }

    getCost() {
        return this.AndroidPhone.getCost() + 250;
    }
}

// init main object
let mb = new AndroidPhone();

// init decorators
mb = new Memory(mb);
mb = new Insurance(mb);

// Outputs: 1322
console.log(mb.getCost());

// Outputs: 5.9
console.log(mb.getScreenSize());

// In the above example, our Decorators are overriding the AndroidPhone() 
// super-class objects .cost() function to return the current price of
//  the AndroidPhone plus the cost of the upgrade being specified.
// It's considered a decoration as the original AndroidPhone objects constructor methods
//  which are not overridden (e.g. screenSize()) as well as any other properties which
//  we may define as a part of the AndroidPhone remain unchanged and intact.