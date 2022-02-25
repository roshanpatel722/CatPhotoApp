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
class Engraving extends AndroidPhone {
    constructor(AndroidPhone) {
        super();
        this.AndroidPhone = AndroidPhone;
    }

    getCost() {
        return this.AndroidPhone.getCost() + 200;
    }
}

// Decorator 3
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
mb = new Engraving(mb);
mb = new Insurance(mb);

// Outputs: 1522
console.log(mb.getCost());

// Outputs: 11.6
console.log(mb.getScreenSize());