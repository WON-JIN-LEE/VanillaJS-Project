```javascript
//계산기
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

  devide: function (a, b) {
    console.log(a / b);
  },
  squared: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.multi(5, 1);
calculator.devide(5, 1);
calculator.squared(5, 2);

//한국나이 계산
const age = 27;
function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);
console.log(krAge);
```
