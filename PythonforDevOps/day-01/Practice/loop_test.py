from datetime import date, datetime, timedelta

# for loop user input loop to test multiple times - prod, test and staging
for i in range(3):
        env = input("Enter environment name: ")
        today = date.today().weekday()
        dayName = date.today().strftime("%A")
        friday = date.today() - timedelta(days=2)
        checkFriday = friday.weekday()

        print("Environment name is:", env)
        print("Today's date is:", date.today())
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

#while loop to check for Friday
today = date.today()

while today.weekday() != 4:
        print("Today is not Friday yet.")
        today = today + timedelta(days=1)
print("Today is Friday!")