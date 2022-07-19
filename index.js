// The Fortune Teller

function tellFortune(a, b, c, d) {
  console.log(
    `You will be a ${a} in ${b}, and married to ${c} with ${d} kids.`
  );
}

tellFortune("Teacher", "Bremen", "Tania", 2);
tellFortune("Pilot", "Germany", "Alexa", 3);
tellFortune("Doctor", "Berlin", "David", 1);

// The Puppy Age Calculator

function calculateDogAge(Age, conversion) {
  const calcAge = Age * conversion;
  console.log(`Your doggie is ${calcAge} years old in dog years!`);
}

calculateDogAge(5, 7);
calculateDogAge(10, 2);
calculateDogAge(7, 3);

// The Lifetime Supply Calculator

function calculateSupply(age, amountPerDay) {
  const maxAge = 65;
  let remainingAge = maxAge - age;
  console.log(remainingAge);
  let supply = Math.round(remainingAge * amountPerDay * 365.25);
  console.log(
    `You will need ${supply} to last you until the ripe old age of ${maxAge}`
  );
}

calculateSupply(25, 1.25);

// The Geometrizer

function calcCircumfrence(radius) {
  let circumference = 2 * Math.PI * radius;

  console.log(`The circumference is ${circumference}`);
}

calcCircumfrence(2);

function calcArea(radius) {
  let area = Math.PI * radius ** 2;
  console.log(`The area is ${area}`);
}

calcArea(2);

// The Temperature Converter

function celsiusToFahrenheit(celcius) {
  let celciusConverted = (celcius / 5) * 9 + 32;
  // Divide by 5, then multiply by 9, then add 32
  console.log(`${celcius}°C is ${celciusConverted}°F`);
}

celsiusToFahrenheit(0);

function fahrenheitToCelsius(fahrenheit) {
  let fahrenheitConverted = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F is ${fahrenheitConverted}°C.`);
}

fahrenheitToCelsius(32);
