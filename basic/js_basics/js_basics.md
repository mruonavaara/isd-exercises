# JavaScript basics

Reading a form field, writing to an HTML page, assignment statement and calculation, formatting a decimal number.

## Setting up the Environment

1.  Create a new working folder on your computer for this assignment.
2.  Copy the files from folder `templates` to the folder.

## Tasks

### 1. Travel allowance

Write a program that asks for the driven kilometers, calculates and displays the travel allowance. The allowance is 0.42 euros/kilometer.

> ![](media/travel_allowance.png)

The logic of the program is to write a function that will be called when the user clicks button. The idea of the function is:

```
function calculate() {
  read the value from the kilometers field in the form
  calculate the kilometer compensation
  write the answer to the HTML page
}
```

Assign the value of the form field to a variable:

```
let km = document.getElementById("distance").value;
```

The form field on the html page looks like this:
```
<input type="text" name="distance" id="distance" size="5" />
```

Write the answer to the HTML page (`allowance` is variable containing the sum):

```
document.getElementById("answer").innerHTML = "<p>Payable " + allowance.toFixed(2) + " euros</p>";
```

You can format the number with two decimals using the `toFixed(2)` method.

### 2. Discount

Write a program that calculates the discounted price of a product. The program asks for the original price of the product and the discount percentage. The program outputs the discounted price.

> ![](media/discount.png)

The discounted price is calculated: price * (100.0 - discount percentage) / 100.

You can align the fields to start at the same position

```
<style>
  label {
    display: block;
    width: 8em;
    float: left;
  }
</style>
```

### 3. Wage

Write a program that asks for the hours worked and the hourly wage, and calculates the total wage. The answer is formatted with two decimal places.

> ![](media/wage.png)

### 4. Hours and minutes

On a trip to the cottage, you stop for a break. During the break, the travelers want to practice their mental arithmetic skills. The task is to calculate the time spent on the trip in hours and minutes, as well as rounded up to the nearest hour, when the time spent is given in minutes. 

Write a program that gives the correct answers.

> ![](media/hours_minutes.png)

- You can get the minutes using the % (modulo) operator.
- You can get the integer part of the division using the Math.floor() method.
- You can round up the division using the Math.ceil() method.

### 5. Party cost

Write a program to calculate the costs of a party. The program asks for the number of invited guests, the price of a single bottle of sparkling wine, and the price of catering per guest. One bottle yields 7 glasses.

> ![](media/party.png)

- You can round up the number of bottles to the next whole integer using the Math.ceil() method.
- Element `<br>` creates a line break on an HTML page.