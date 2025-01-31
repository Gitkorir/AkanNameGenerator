# Akan Name Generator

A beautiful web application that calculates your Akan name based on your birthdate and gender, following Ghanaian naming traditions.

## Description

The Akan Name Generator is a web application that takes a user's birthday and calculates the day of the week they were born. Based on this calculation and their gender, it outputs their Akan name following Ghanaian cultural traditions where children are given their first name as a 'day name' corresponding to the day of the week they were born.

## Features

> Beautiful, responsive user interface
> Real-time input validation
> Detailed display of all possible Akan names
>Interactive form with clear feedback
> Cultural context and information

## Technologies Used

 > Html
 > Java script
 > CSS



## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## BDD (Behavior Driven Development)

1. Input Form:
   > User enters their birth day (1-31)
   > User enters their birth month (1-12)
   > User enters their birth year
   > User selects their gender

2. Validation:
   > System checks if the day is valid (1-31)
   > System checks if the month is valid (1-12)
   > System ensures all fields are filled

3. Processing:
   > System calculates the day of the week using the formula:
     ```
     Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
     ```
   > System matches the result with the corresponding Akan name based on gender

4. Output:
   > System displays the user's Akan name
   > If there are any errors, system displays appropriate error messages

## Author

Arnold Kiprop Korir

## Contact Information

> EMAIL:arnoldkorir201@gmail.com
> GITHUB: Gitkorir

## License

MIT License

Copyright (c) (2025) (Arnold Korir)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
