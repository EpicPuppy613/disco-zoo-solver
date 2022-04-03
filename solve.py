import json

data = open('patterns.json', 'r')
patterns = json.load(data)
data.close()

grid = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "]
]

area = "outback"
animals = ["tiddalik"]
solved = False
found = {}

for animal in animals:
    found[patterns[area]["animals"][animal]["id"]] = []

while not solved:
    probability = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    for a in animals:
        animal = patterns[area]["animals"][a]
        for x in range(6 - animal["size"][0]):
            for y in range(6 - animal["size"][1]):
                test = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
                ]
                invalid = False
                for xa in range(animal["size"][0]):
                    for ya in range(animal["size"][1]):
                        if not (grid[x + xa][y + ya]) in [" ", animal["id"]] or invalid:
                            if animal["pattern"][xa][ya] == "X":
                                invalid = True
                            continue
                        if animal["pattern"][xa][ya] != "X":
                            continue
                        test[x + xa][y + ya] += 1
                if len(found[animal["id"]]) != 0:
                    for coords in found[animal["id"]]:
                        if test[coords[0]][coords[1]] == 0:
                            invalid = True
                if not invalid:
                    for xb in range(5):
                        for yb in range(5):
                            if len(found[animal["id"]]) != 0:
                                probability[xb][yb] += test[xb][yb] * 5
                            else:
                                probability[xb][yb] += test[xb][yb]
    total = 0
    for x in range(5):
        for y in range(5):
            if grid[x][y] in [" ", "n"]:
                total += probability[x][y]
            else:
                continue
    highest = 0
    for x in range(5):
        for y in range(5):
            if probability[x][y] > highest and grid[x][y] == " ":
                highest = probability[x][y] 
    for y in range(5):
        for x in range(5):
            if probability[x][4-y] == highest:
                print("\u001b[32m", end="")
            if not grid[x][4-y] in [" ", "n"]:
                print("\u001b[34m{:6.2f}%".format(100), end="\u001b[0m ")
            else:
                print("{:6.2f}%".format(probability[x][4-y]/total*100), end=" ")
            print("\u001b[0m", end="")
        print()
    gx = int(float(input("X: "))) - 1
    gy = int(float(input("Y: "))) - 1
    print("n: nothing\nq: quit")
    for animal in animals:
        print("{}: {}".format(patterns[area]["animals"][animal]["id"], animal))
    guess = input("Result: ")
    if guess == "q":
        break
    if guess != "n":
        rescue = input("Did you rescue it? (y/n): ")
    else:
        rescue = "n"
    grid[gx][gy] = guess
    if not guess in [" ", "n"]:
        found[guess].append([gx, gy])
    if rescue == "y":
        for animal in animals:
            if patterns[area]["animals"][animal]["id"] == guess:
                animals.remove(animal)
                if len(animals) == 0:
                    solved = True
                    break
