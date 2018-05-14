Scenario : User successfully enters his details and registers

Given John opens a home page ({website_name}/register)
When he enters all required registration fields (First Name, Last Name, Phone Number, Country) and clicks on a submit button
Then an account is created for him with a successful message ('Your account has been created')


General Guidelines:

1) This should be built using Angular

2) Field validations:
   First Name/ Last Name are mandatory/required text fields and should be greater than 5 characters
   Phone number are mandatory/required and should be a numeric field
   Country is mandatory/required and should be a dropdown
   Validation errors should be placed below each field

3) There is no need to create any backend services (mock is sufficient)

4) Include tests as you see fit

5) Use angular + html (ex: no angular-materials) and no css styling required

6) Add a “Read Me” file which instructs how to run the application
