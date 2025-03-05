let user = {
    name: 'John',
};

const member = [user];

user = null;

console.log(member);

/*
It's not null because:
When we created the member array, we stored a reference to the object { name: 'John' } in it, not a reference to the user variable.

Setting user = null only changes what the user variable points to. It doesn't affect the object that was created earlier or the reference to that object stored in the member array.
*/

// method chaining

const cal = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    subtract(a) {
        this.total -= a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    divide(a) {
        this.total /= a;
        return this;
    },
};

cal.add(10).subtract(2).multiply(2).divide(2);

console.log(cal.total);
