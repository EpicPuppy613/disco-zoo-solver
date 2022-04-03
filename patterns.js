const G = {};
G.patterns = {
    "farm": {
        "animals": {
            "pig": {
                "id": "fp",
                "name": "Pig",
                "size": [2, 2],
                "pattern": [
                    ["X", "X"],
                    ["X", "X"]
                ]
            },
            "sheep": {
                "id": "fs",
                "name": "Sheep",
                "size": [4, 1],
                "pattern": [
                    ["X"], ["X"], ["X"], ["X"]
                ]
            },
            "rabbit": {
                "id": "fr",
                "name": "Rabbit",
                "size": [1, 4],
                "pattern": [
                    ["X", "X", "X", "X"]
                ]
            },
            "cow": {
                "id": "fc",
                "name": "Cow",
                "size": [3, 1],
                "pattern": [
                    ["X"], ["X"], ["X"]
                ]
            },
            "horse": {
                "id": "fh",
                "name": "Horse",
                "size": [1, 3],
                "pattern": [
                    ["X", "X", "X"]
                ]
            },
            "unicorn": {
                "id": "fu",
                "name": "Unicorn",
                "size": [3, 2],
                "pattern": [
                    [" ","X"],
                    ["X"," "],
                    ["X"," "]
                ]
            }
        }
    },
    "outback": {
        "animals": {
            "kangaroo": {
                "id": "okg",
                "name": "Kangaroo",
                "size": [4, 4],
                "pattern": [
                    [" ", " ", " ", "X"],
                    [" ", " ", "X", " "],
                    [" ", "X", " ", " "],
                    ["X", " ", " ", " "]
                ]
            },
            "platypus": {
                "id": "op",
                "name": "Platypus",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    ["X", "X"],
                    ["X", " "]
                ]
            },
            "crocodile": {
                "id": "oce",
                "name": "Crocodile",
                "size": [4, 1],
                "pattern": [
                    ["X"], ["X"], ["X"], ["X"]
                ]
            },
            "koala": {
                "id": "oka",
                "name": "Koala",
                "size": [2, 2],
                "pattern": [
                    [" ", "X"],
                    ["X", "X"]
                ]
            },
            "cockatoo": {
                "id": "oco",
                "name": "Cockatoo",
                "size": [2, 3],
                "pattern": [
                    [" ", " ", "X"],
                    ["X", "X", " "]
                ]
            },
            "tiddalik": {
                "id": "ot",
                "name": "Tiddalik",
                "size": [3, 2],
                "pattern": [
                    ["X", " "],
                    [" ", "X"],
                    ["X", " "]
                ]
            }
        }
    },
    "savanna": {
        "animals": {
            "zebra": {
                "id": "sz",
                "name": "Zebra",
                "size": [3, 3],
                "pattern": [
                    [" ", "X", " "],
                    ["X", " ", "X"],
                    [" ", "X", " "]
                ]
            },
            "hippo": {
                "id": "sh",
                "name": "Hippo",
                "size": [3, 3],
                "pattern": [
                    ["X", " ", "X"],
                    [" ", " ", " "],
                    ["X", " ", "X"]
                ]
            },
            "giraffe": {
                "id": "sge",
                "name": "Giraffe",
                "size": [1, 4],
                "pattern": [
                    ["X", "X", "X", "X"]
                ]
            },
            "lion": {
                "id": "sl",
                "name": "Lion",
                "size": [3, 1],
                "pattern": [
                    ["X"], ["X"], ["X"]
                ]
            },
            "elephant": {
                "id": "se",
                "name": "Elephant",
                "size": [2, 2],
                "pattern": [
                    ["X", "X"],
                    [" ", "X"]
                ]
            },
            "gryphon": {
                "id": "sgn",
                "name": "Gryphon",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    ["X", " "],
                    [" ", "X"]
                ]
            }
        }
    },
    "northern": {
        "animals": {
            "bear": {
                "id": "nbr",
                "name": "Bear",
                "size": [2, 3],
                "pattern": [
                    [" ", " ", "X"],
                    ["X", "X", "X"]
                ]
            },
            "skunk": {
                "id": "nsk",
                "name": "Skunk",
                "size": [3, 2],
                "pattern": [
                    ["X", " "],
                    ["X", "X"],
                    [" ", "X"]
                ]
            },
            "beaver": {
                "id": "nbv",
                "name": "Beaver",
                "size": [3, 3],
                "pattern": [
                    [" ", "X", " "],
                    [" ", "X", " "],
                    ["X", " ", "X"]
                ]
            },
            "moose": {
                "id": "nm",
                "name": "Moose",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    ["X", " "],
                    [" ", "X"]
                ]
            },
            "fox": {
                "id": "nf",
                "name": "Fox",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    [" ", "X"],
                    ["X", " "]
                ]
            },
            "sasquatch": {
                "id": "nsh",
                "name": "Sasquatch",
                "size": [1, 2],
                "pattern": [
                    ["X", "X"]
                ]
            }
        }
    },
    "polar": {
        "animals": {
            "penguin": {
                "id": "pp",
                "name": "Penguin",
                "size": [3, 3],
                "pattern": [
                    ["X", " ", " "],
                    [" ", "X", "X"],
                    ["X", " ", " "]
                ]
            },
            "seal": {
                "id": "ps",
                "name": "Seal",
                "size": [4, 3],
                "pattern": [
                    [" ", " ", "X"],
                    [" ", "X", " "],
                    ["X", " ", " "],
                    [" ", "X", " "]
                ]
            },
            "muskox": {
                "id": "pm",
                "name": "Muskox",
                "size": [3, 2],
                "pattern": [
                    ["X", "X"],
                    [" ", "X"],
                    ["X", " "]
                ]
            },
            "pbear": {
                "id": "pb",
                "name": "Polar Bear",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    [" ", " "],
                    ["X", "X"]
                ]
            },
            "walrus": {
                "id": "pw",
                "name": "Walrus",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    ["X", " "],
                    ["X", " "]
                ]
            },
            "yeti": {
                "id": "py",
                "name": "Yeti",
                "size": [1, 3],
                "pattern": [
                    ["X", " ", "X"]
                ]
            }
        }
    },
    "jungle": {
        "animals": {
            "monkey": {
                "id": "jm",
                "name": "Monkey",
                "size": [4, 2],
                "pattern": [
                    [" ", "X"],
                    ["X", " "],
                    [" ", "X"],
                    ["X", " "]
                ]
            },
            "toucan": {
                "id": "jt",
                "name": "Toucan",
                "size": [2, 4],
                "pattern": [
                    [" ", " ", "X", " "],
                    ["X", "X", " ", "X"]
                ]
            },
            "gorilla": {
                "id": "jg",
                "name": "Gorilla",
                "size": [3, 2],
                "pattern": [
                    ["X", "X"],
                    [" ", " "],
                    ["X", "X"]
                ]
            },
            "panda": {
                "id": "jpa",
                "name": "Panda",
                "size": [3, 3],
                "pattern": [
                    [" ", "X", " "],
                    [" ", " ", " "],
                    ["X", " ", "X"]
                ]
            },
            "tiger": {
                "id": "jt",
                "name": "Tiger",
                "size": [4, 1],
                "pattern": [
                    ["X"], [" "], ["X"], ["X"]
                ]
            },
            "phoenix": {
                "id": "jpx",
                "name": "Phoenix",
                "size": [3, 3],
                "pattern": [
                    [" ", " ", "X"],
                    [" ", " ", " "],
                    ["X", " ", " "]
                ]
            }
        }
    },
    "jurassic": {
        "animals": {
            "diplodocus": {
                "id": "ddp",
                "name": "Diplodocus",
                "size": [3, 3],
                "pattern": [
                    [" ", " ", "X"],
                    ["X", "X", " "],
                    [" ", "X", " "]
                ]
            },
            "stegosaurus": {
                "id": "ds",
                "name": "Stegosaurus",
                "size": [4, 2],
                "pattern": [
                    ["X", " "],
                    [" ", "X"],
                    [" ", "X"],
                    ["X", " "]
                ]
            },
            "raptor": {
                "id": "dr",
                "name": "Raptor",
                "size": [3, 3],
                "pattern": [
                    [" ", " ", "X"],
                    [" ", "X", "X"],
                    ["X", " ", " "]
                ]
            },
            "trex": {
                "id": "dtx",
                "name": "T-Rex",
                "size": [2, 3],
                "pattern": [
                    ["X", " ", "X"],
                    ["X", " ", " "]
                ]
            },
            "triceratops": {
                "id": "dtr",
                "name": "Triceratops",
                "size": [3, 3],
                "pattern": [
                    ["X", " ", "X"],
                    [" ", " ", " "],
                    [" ", "X", " "]
                ]
            },
            "dragon": {
                "id": "ddr",
                "name": "Dragon",
                "size": [3, 2],
                "pattern": [
                    [" ", "X"],
                    [" ", " "],
                    ["X", " "]
                ]
            }
        }
    },
    "ice": {},
    "city": {},
    "mountain": {},
    "moon": {},
    "mars": {}
}