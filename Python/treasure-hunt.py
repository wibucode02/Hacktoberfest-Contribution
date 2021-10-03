print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____/__
*******************************************************************************
''')


print(''' 
     Welcome to Treasure Island.
Youre mission is to find the treasure.
''')
print('''Youre're at a cross road. Where do you want to go? Type "left" or "right":''')
a=input()
if a.lower()=='right':
     print("There is a dragon and it's eat you, You dead.")
     print("Game Over!!")
elif a.lower()=="left":
     print('''You came to a lake.There is an island in the middle of the lake.Type "wait" to wait for boat.Type "swim" to swim ocross.''') 
     b=input()   
     if b.lower()=="swim":
          print("In the lake there is many cocodiles , they eat you ,You dead")
          print("Game Over!!")
     elif b.lower()=='wait':
          print("You arrive at the island .There is a house with 3 doors.One red ,one yellow, and one blue. Which color do you choose?" )
          c=input()
          if c.lower()=="red":
               print("You fell into a hole. Game Over")
          elif c.lower()=="yellow":
               print("You enter the room full of treasure. You Win")
          elif c.lower()=="blue":
               print("You enter a room of beasts.Game Over!!")


               
print("for exit press enter")
input()





