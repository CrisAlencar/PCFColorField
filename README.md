# PCFColorField
Control that allow you change the font color and/or background color from a field inside form on Model Driven App

* The color could either be the Name of the Color in English or the Color Hexa code. 
* You can set the color when the value is true and another color when the condition is false

The main configuration is the Settings Properties. It allows you to change the font color and/or background color from a field depending on the Setting chosen.

- **Max Value**: Change the field color if its value is >= the target value.
- **Min Value**: Change the field color if its value is <= the target value.
- **Between:** Change the field color if its value is <= Max target value and >= Min target value
- **Not Between:** Change the field color if its value is  >= Max target value or <= Min target value

### Examples Below:

**Settings**: _Max Value_: value >= Max Value

**Configuration:**

![maxvalue_settings](https://user-images.githubusercontent.com/79730384/109394234-e3ee7480-791d-11eb-94b6-27cd72ca233f.png)


**Screen:**

![maxvalue_screenshot](https://user-images.githubusercontent.com/79730384/109394239-e81a9200-791d-11eb-9483-f9373fed7332.png)


**Settings**: _Min Value_ : value <= minValue

**Configuration:**

![minvalue_settings](https://user-images.githubusercontent.com/79730384/109394245-ecdf4600-791d-11eb-8a82-1b5fce481336.png)


**Screen:**

![minvalue_screenshot](https://user-images.githubusercontent.com/79730384/109394248-f072cd00-791d-11eb-8f3a-1cc691d4b074.png)


**Settings**: _Between_: value <= maxValue and value >= minValue

**Configuration:**

![betweenvalue_settings](https://user-images.githubusercontent.com/79730384/109394249-f5d01780-791d-11eb-9a2f-ccb829964bd5.png)


**Screen:**

![betweenvalue_screenshot](https://user-images.githubusercontent.com/79730384/109394252-fa94cb80-791d-11eb-9fa0-36a920dbf833.png)


**Settings**: _Not Between_: value >= maxValue or value <= minValue

**Configuration:**

![notbetweenvalue_settings](https://user-images.githubusercontent.com/79730384/109394256-ff597f80-791d-11eb-89cf-f6f129da0a59.png)


**Screen:**

![notbetweenvalue_screenshot](https://user-images.githubusercontent.com/79730384/109394259-02547000-791e-11eb-92a8-1778365364b4.png)








