function printEvens() {
  for (let i = 2; i <= 20; i += 2) {
    println(i);
  }
}

function fromOneTo(to) {
  for (let i = 1; i <= to; i++) {
    println(i);
  }
}

function fromTo(from, to) {
  for (let i = from; i <= to; i++) {
    println(i);
  }
}

function printStars(count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += "*";
  }
  println(result);
}

function printSquare(sideLength) {
  for (let i = 0; i < sideLength; i++) {
    printStars(sideLength);
  }
}

function printRectangle(width, height) {
  for (let i = 0; i < height; i++) {
    printStars(width);
  }
}

function printTriangle(size) {
  for (let i = 1; i <= size; i++) {
    printStars(i);
  }
}

function sumSeries(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function runAll() {
  println("Even Numbers");
  printEvens();

  println("From One to 5");
  fromOneTo(5);

  println("From 2 to 6");
  fromTo(2, 6);

  println("Print Stars (8)");
  printStars(8);

  println("Print Square (7)");
  printSquare(7);

  println("Print Rectangle (5x3)");
  printRectangle(5, 3);

  println("Sum Series (100)");
  println(sumSeries(100));

  println("Factorial (10)");
  println(factorial(10));
}

function recursiveSum(n) {
  if (n > 0) {
    return recursiveSum(n - 1) + n;
  } else {
    return n;
  }
}

function recursiveFactorial(n) {
  if (n > 0) {
    return n * recursiveFactorial(n - 1);
  } else {
    return 1;
  }
}