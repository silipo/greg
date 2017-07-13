# greg
A generic rule-checking restful API for statistical microdata
## Facts
* Request and response are in JSON format
* Request contains 2 url, one retrieves the data, the other the checking rules
* Checking rules are written in javascript language
* Data file in csv format with '|' pipe char as separator
* Each Rule checks data row by row and returns true if any rule is violated otherwise false if the row passes the check
* If the Rule is violated, an Action is executed ( evaluated )
