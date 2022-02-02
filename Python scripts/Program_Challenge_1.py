# Import database
import random

# Variables
randy = random.randrange(1,10)
shelly = random.randrange(1,10)
total = randy + shelly
print('Value of the first int:')
print(randy)
print('Value of the second int:')
print(shelly)

if randy > shelly:
    print("Randy wins!")
elif randy < shelly:
    print("Shelly wins!")
elif randy == shelly:
    print("It is a tie!")
else:
    print("Something went wrong")
print("The total of the pot is: ")
print(total)