from datetime import date, datetime, timedelta

env = input("Enter environment name: ")
print("Environment name is:", env)

"""a= int(input("Enter num 1: "))
b= int(input("Enter num 2: "))

print("The type of a is:", type(a))
print("The type of a is:", type(b))
print("The sum of", a, "and", b, "is:", a + b)
print("The sum of", a, "and", b, "is:", a - b)
print("The sum of", a, "and", b, "is:", a * b)
print("The sum of", a, "and", b, "is:", a / b) """

print("Today's date is:", date.today())
today = date.today().weekday()
dayName = date.today().strftime("%A")

friday = date.today() - timedelta(days=2)
checkFriday = friday.weekday()

print("Friday was on weekday number:", checkFriday, friday.strftime("%A"))
print("The name of the day is:", dayName)
print("The day of the week is:", today)

if today > 4 and env.lower() == "prod":
    print("pls do not deploy on weekends in ", env, " environments")
elif today < 4 and env.lower() == "prod":
    print("proceed with ", env, " deployment")
else:
    print("you are in non-prod environment, proceed with deployment")
# This is my first Python file for DevOps practice

