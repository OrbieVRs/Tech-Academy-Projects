import time, sys, curses

def Start():
    print('This is my Rock Paper Sissors Game!')
    playerOne = input('What is your name Player One? ').lower()
    playerOneCap = playerOne.capitalize()
    playerTwo = input('What is your name Player Two? ').lower()
    playerTwoCap = playerTwo.capitalize()
    itemsRPS = ['rock', 'paper', 'scissors']

    def string_append(s, n):
        op = ''
        i = 0
        while i < n:
            op += s + '-'
            i = i + 1
        return op

    def Choices(playerOneChoice, playerTwoChoice):
        if playerOneChoice == itemsRPS[0] and playerTwoChoice == itemsRPS[1]:
            return('Paper covers Rock! ' + playerTwoCap + ' wins!')
        elif playerOneChoice == itemsRPS[1] and playerTwoChoice == itemsRPS[0]:
            return('Paper covers Rock! ' + playerOneCap + ' wins!')
        elif playerOneChoice == itemsRPS[2] and playerTwoChoice == itemsRPS[1]:
            return('Scissors cut Paper! ' + playerTwoCap + ' wins!')
        elif playerOneChoice == itemsRPS[1] and playerTwoChoice == itemsRPS[2]:
            return('Scissors cut Paper! ' + playerOneCap + ' wins!')
        elif playerOneChoice == itemsRPS[0] and playerTwoChoice == itemsRPS[2]:
            return('Rock smashes Scissors! ' + playerOneCap + ' wins!')
        elif playerOneChoice == itemsRPS[2] and playerTwoChoice == itemsRPS[0]:
            return('Rock smashes Scissors! ' + playerTwoCap + ' wins!')
        elif playerOneChoice == playerTwoChoice:
            return(playerOneCap + ' and ' + playerTwoCap + ' tied!')
        else:
            return('Error: StringException Something went wrong')
    
    
    backspace = '\b'
    playerOneCompare = 'nothing'
    
    def PlayerOne(playerOneRPS):
        curses.nocbreak()
        playerOneRPS = input('Does ' + playerOneCap + ' choose Rock, Paper or Scissors? ').lower()
        
        if playerOneRPS == itemsRPS[0] or playerOneRPS == itemsRPS[1] or playerOneRPS == itemsRPS[2]:
            playerOneFormat = string_append(backspace, len(playerOneRPS))
            print(playerOneFormat)
            playerOneCompare = playerOneRPS
            return playerOneCompare
        else:
            print(playerOneRPS)
            PlayerOne()
    PlayerOne(playerOneCompare)
    print("\033[F" + playerOneCompare)
    
    """while playerOneCompare != itemsRPS[0] or playerOneCompare != itemsRPS[1] or playerOneCompare == itemsRPS[2]:
        playerOneChoose = input('Does ' + playerOneCap + ' choose Rock, Paper or Scissors? ')
        playerOneCompare = playerOneChoose.lower()
        print("\033[A".format(len(playerOneChoose) + len(playerOneCap) + 38))
        #time.sleep(0.5)
        #print(".", end = " ")
        #time.sleep(0.25)
        #print(".", end = " ")
        #time.sleep(0.25)
        #print(".", end = " ")
        print("Something" + playerOneCompare)
        time.sleep(1)
        if playerOneCompare == itemsRPS[0] or playerOneCompare == itemsRPS[1] or playerOneCompare == itemsRPS[2]:
            playerOneFormat = string_append(backspace, len(playerOneCompare))
            print(playerOneFormat)"""


    input("hit enter to continue")
    playerTwoCompare = 'nothing'
    print(Choices(playerOneCompare,playerTwoCompare))

    def PlayAgain():
        Again = input('Would you like to play again? ').lower()
        if Again == 'no':
            quit()
        elif Again == 'yes':
            Start()
        else:
            print('Internal Exception: Try again')
            PlayAgain()
Start()