function minusFive(potato) {
    console.log(potato - 5);
}

minusFive(10, 10, 12, 34, 4, 5, 6, 7);

const calculator = {

    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    multi: function (a, b) {
        console.log(a * b);
    },
    
    division: function (a, b) {
        console.log(a / b);
    }, 
    squared: function (a, b) {
        console.log(a ** b);
    },
    
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.multi(5, 1);
calculator.division(5, 1);
calculator.squared(5,2);