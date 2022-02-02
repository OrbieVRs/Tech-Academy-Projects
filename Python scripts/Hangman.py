import random
print("Welcome to Hangman")
print("The goal is to guess the word")

def Start():
    playerName = input('What is your name? ')
    secretWords = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", 
    "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", 
    "duplex", "dwarves", "embezzle", "equip", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", 
    "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", 
    "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", 
    "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", 
    "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", 
    "queue", "quips", "quixotic", "quiz", "quizzes", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", 
    "stronghold", "stymied", "subway", "swivel", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", 
    "vodka", "voodoo", "vortex", "voyeurism", "walkway", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wyvern", "xylophone", 
    "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"]
    indexOfWords = random.randrange(0,len(secretWords))
    wordOfTheDay = secretWords[indexOfWords]
    guesses = ''
    turnsLeft = 11
    while turnsLeft > 0:
        wrongAnswers = 0
        for letter in wordOfTheDay:
            if letter in guesses:
                print(letter, end = '')
            else:
                print('_', end = '')
                wrongAnswers += 1
        if wrongAnswers == 0:
            print('\nYOU WIN! You guessed my word: ' + wordOfTheDay + '!!!!!')
            break
        guess = input('\nGuess a letter here: ').lower()
        guesses += guess

        if guess not in wordOfTheDay:
            turnsLeft -= 1
            print('Oops! That letter is not in my word. Try again!')
            print('You have ' + str(turnsLeft) + ' more guesses left!')
            if turnsLeft == 0:
                print('GAME OVER')
                print('The word was ' + wordOfTheDay)

    def PlayAgain():
        Again = input('Would you like to play again? ').lower()
        if Again == 'no':
            quit()
        elif Again == 'yes':
            Start()
        else:
            print('Internal Exception: Try again')
            PlayAgain()
    PlayAgain()
Start()