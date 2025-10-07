# Arrays

You can find HTML-templates for the exercises in folder `templates`.

## 1. Cars

The array to be used is:

```js
let cars = ["Nissan", "Opel", "Peugeot", "Renault", "Audi", "Volvo", "Opel", "Audi"];
```

### a) Create a program that lists the cars in the array

> ![](./media/image1.png)

- Declare the array inside a script element.
- List the array using a for loop.

    ```js
    // Declare a variable to collect the cars in the array
    let text = "";

    // Iterate through the array and collect the cars into the text variable
    for (let i = 0; i < cars.length; i++) {
        text = text + cars[i] + "<br>";
    }
    ```

- Write the result to an HTML page.

### b) Create a program that tells how many times a specific car appears in the array.

> ![](./media/image2.png)

- The search is done using a for loop, where each car in the array is compared to the value of the input field using `if (cars[i] == searchValue)`.

- Declare a `count` variable (initialize it to zero) above the loop to store the number of occurrences.

- If the loop finds that the car in the array matches the value of the input field, increment the `count` variable by one.

```js
let count = 0;

// Iterate through the array and collect the values into the text variable
for (let i = 0; i < cars.length; i++) {
    // If the value in the array matches the value of the input field
    if (cars[i] == searchValue) {
        count = count + 1;
    }
}
```

### c) Create a program to add a new car to the array

> ![](./media/image3.png)

## 2. Courses

Create a program that displays the course codes for the first semester.

The array is:

```
let courses = ["STU001HH1A", "ICB001HH1A", "COM001HH1A", "DIG001IT1A", "SOF001IT1A", "ICI001IT1A", "ICB001IT1A"];
```

> ![](./media/image4.png)

## 3. Rainfall

Create a program that calculates the annual rainfall in Helsinki.

> <img src="./media/image5.png" />

Below is an array containing the rainfall for each month.

```js
let rainfall = [47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8, 65.4, 69.7, 66.1, 54.6];
```

The code is conceptually:

```js
let total = 0;
for (let i = 0; i < rainfall.length; i++) {
  // total = total + the value at index i in the array
}

// write the result
```

## 4. Temperatures

Create a program that displays the average monthly temperatures in Helsinki and their average.

> <img src="./media/image6.png"/>

Below is an array containing the average temperature for each month.

```js
let temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8, 16.3, 11.5, 6.6, 1.6, -2.0];
```

<!--
The code is conceptually:

```js
let text = "";
let total = 0;

for (let i = 0; i < temperatures.length; i++) {
  // text = text + (i+1) + ". " + the value at index i in the array
  // total = total + the value at index i in the array
}

let average = total / temperatures.length; // why?

// write the result
```
-->

__Hints__

- The `toFixed(1)` method can be used to format the result to one decimal place.


## 5. Electricity prices

Below are the hourly electricity prices for a certain day from 0-12 o'clock. 

```javascript
let hourlyPrices = [6.91, 3.26, 1.62, 0.66, 0.91, 0.99, 3.13, 5.01, 16.45,
23.23, 17.32, 8.29, 3.77];
```

Write a program that lists the hourly prices, and the lowest and highest electricity price for the period.

>![](media/electricity_prices1.png)


## 6. Gift wishes

Create a program that asks for gift wishes, lists them, and tells how many wishes have been given.

Requirements:
- Clear the input field after adding a wish.
- Prevent empty wishes from being added to the array. An empty wish means when nothing or only spaces are entered in the wish field.

>![](media/wishes1.png)

__Hints__

- You can implement the list as an HTML unordered list (`<ul>`).

__Bonus task__
- Set the mouse cursor (focus) into the wish field after adding a wish.


## 7. Comma-separated values

CSV is a format where data is in a string, with each piece of information (field) separated by a delimiter.

Use the JavaScript string method `split` to split a csv-record into individual fields and use the field values to build the output.

```javascript
let studentRecord = "Jane Doe;12/24/1990;Helsinki;Haaga-Helia University of Applied Sciences";
";
```
>![](media/csv1.png)

## 8. Lottery

Create a program that draws 7 different lottery numbers between 1-40. No lottery number may appear more than once!

>![](media/lottery1.png)


__Bonus tasks__
- Sort the numbers in ascending order. Note that method `sort` does not work for number arrays as one might expect.
- Style the numbers using the CSS rules in the template.

>![](media/lottery2.png)
