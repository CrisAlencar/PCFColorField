# PCFColorField
Control that allow you change the font color and/or background color from a field inside form on Model Driven App
The main configuration is the Settings Properties. It allows you change the font color and/or background color from a field depending on the Setting chosen.

- **Max Value**: Change the field color if its value is >= the target value.
- **Min Value**: Change the field color if its value is <= the target value.
- **Between:** Change the field color if its value is <= Max target value and >= Min target value
- **Not Between:** Change the field color if its value is  >= Max target value or <= Min target value

### Examples Below:

**Settings**: _Max Value_
_Scenario_: Change the field font color and background color when the Monthly Expenditure is greater or equal your Monthly Income

**Configuration:**

![maxvalue_settings](https://user-images.githubusercontent.com/79730384/109370516-8cf28c00-7898-11eb-8dd1-58f7a2a7fb09.png)

**Screen:**

![maxvalue_screenshot](https://user-images.githubusercontent.com/79730384/109370525-97ad2100-7898-11eb-916b-56114060241a.png)

**Settings**: _Min Value_
_Scenario_: Change the field background color when the the Water amount taken is less than the Water Intake daily Target

**Configuration:**

![minvalue_settings](https://user-images.githubusercontent.com/79730384/109370740-87e20c80-7899-11eb-9c43-c28c86165971.png)

**Screen:**

![minvalue_screenshot](https://user-images.githubusercontent.com/79730384/109370744-8adcfd00-7899-11eb-98c2-df5b8fda4066.png)

**Settings**: _Between_
_Scenario_: Change the field font color when My BMI is between the BMI Max and BMI Min values

**Configuration:**

![betweenvalue_settings](https://user-images.githubusercontent.com/79730384/109370753-96302880-7899-11eb-8e60-e49268e0348b.png)


**Screen:**

![betweenvalue_screenshot](https://user-images.githubusercontent.com/79730384/109370754-97615580-7899-11eb-9f3c-74fb50ae19cb.png)

**Settings**: _Not Between_
_Scenario_: Change the field font color and the field background color if the age informed is from a child or from an adult (<= Min or >= Max)

**Configuration:**

![notbetweenvalue_settings](https://user-images.githubusercontent.com/79730384/109370770-a6e09e80-7899-11eb-87d4-c20530ddf29d.png)

**Screen:**

![notbetweenvalue_screenshot](https://user-images.githubusercontent.com/79730384/109370773-a811cb80-7899-11eb-8d52-ea93746156c2.png)







