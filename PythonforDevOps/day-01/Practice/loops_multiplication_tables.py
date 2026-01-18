#while loop
quit = input("press 'q' to quit the loop:")

while quit.lower() != 'q':
        num = int(input("Enter the number for multiplication table: "))
        print(f"Multiplciation for {num} is as below:")
        #for loop
        for i in range(1,13):
                print(f"{num} X {i} = {num*i}") #string formatting
        quit = input("press 'q' to quit the loop:")
        
        