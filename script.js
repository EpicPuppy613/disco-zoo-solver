G.grid = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "]
];

G.current = [];
G.locations = {};
G.area = null;
G.animals = null;

function UpdateArea() {
    area = document.getElementById("area").value;
    G.animals = G.patterns[area].animals;

    var select = '<option value="">None</option>';
    for (const a in G.animals) {
        select += '<option value="' + a + '">' + G.animals[a].name + '</option>';
    }
    document.getElementById("animal1").innerHTML = select;
    document.getElementById("animal2").innerHTML = select;
    document.getElementById("animal3").innerHTML = select;
}
UpdateArea();

function Main() {
    var probability = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    for (a of G.current) {
        animal = G.animals[a];
        for (var x = 0; x < 6 - animal.size[0]; x++) for (var y = 0; y < 6 - animal.size[1]; y++) {
            var test = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
            var invalid = false;
            for (var xa = 0; xa < animal.size[0]; xa++) for (var ya = 0; ya < animal.size[1]; ya++) {
                if (animal.pattern[xa][ya] != "X") continue;
                if ((G.grid[x + xa][y + ya] != " " && G.grid[x + xa][y + ya] != animal.id) || invalid) {
                    invalid = true;
                    continue;
                }
                test[x + xa][y + ya] += 1;
            }
            if (G.locations[animal.id].length != 0) {
                for (const coord of G.locations[animal.id]) if (test[coord[0]][coord[1]] == 0) {invalid = true;}
            }
            if (invalid) {continue;}
            for (var xa = 0; xa < 5; xa++) for (var ya = 0; ya < 5; ya++) {
                if (G.locations[animal.id].length != 0 && G.grid[xa][ya] == ' ') {
                    probability[xa][ya] += test[xa][ya] * 10;
                } else if (G.grid[xa][ya] == ' ') {
                    probability[xa][ya] += test[xa][ya];
                }
            }
        }
    }
    var total = 0;
    var highest = 0;
    for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) {
        total += probability[x][y];
        if (probability[x][y] > highest && G.grid[x][y] == " ") highest = probability[x][y];
    }
    for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) {
        var element = document.getElementById("c" + x + y);
        if (probability[x][y] == highest) {
            element.style.color = "lime";
        } else {
            element.style.color = "white";
        }
        element.innerHTML = (probability[x][y]/total*100).toFixed(2) + "%";
        if (G.grid[x][y] != " " && G.grid[x][y] != "n") {
            element.style.color = "cyan";
            element.innerHTML = "100.00%";
        }
    }
}

function Reset () {
    G.grid = [
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "]
    ];
    G.current = [];
    G.locations = {};
    var select = '<option value="n">Nothing</option>';
    for (var a = 1; a <= 3; a++) {
        var animal = document.getElementById("animal" + a).value;
        if (animal == "") continue;
        G.current.push(animal);
        G.locations[G.animals[animal].id] = [];
        select += '<option value="' + animal + '">' + G.animals[animal].name + '</option>';
    }
    document.getElementById("guess").innerHTML = select;
    document.getElementById('solved').style.display = 'none';
    for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) document.getElementById("c" + x + y).disabled = false;
    Main();
}

function Input (x, y) {
    document.getElementById("c" + x + y).disabled = true;
    var animal = document.getElementById("guess").value;
    if (animal == "n") {
        G.grid[x][y] = "n";
    } else {
        G.grid[x][y] = G.animals[animal].id;
    }
    if (document.getElementById("rescue").value == 'y' && animal != '') {
        index = G.current.indexOf(animal);
        if (index != -1) G.current.splice(index, 1);
        var select = '<option value="n">Nothing</option>';
        for (const a of G.current) { 
            if (a == "") continue;
            select += '<option value="' + a + '">' + G.animals[a].name + '</option>';
        }
        document.getElementById("guess").innerHTML = select;
    }
    if (animal != 'n') {
        G.locations[G.animals[animal].id].push([x, y]);
    }
    if (G.current.length != 0) {
        Main();
    } else {
        document.getElementById('solved').style.display = '';
        document.getElementById('c' + x + y).style.color = 'cyan';
        document.getElementById('c' + x + y).innerHTML = '100.00%';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyR') {
        document.getElementById('rescue').value = 'y';
    }
    else if (e.code == 'KeyE') {
        document.getElementById('rescue').value = 'n';
    }
    else if (e.code == 'KeyW') {
        var guess = document.getElementById('guess').value;
        var index = G.current.indexOf(guess);
        if (index != G.current.length - 1) {
            document.getElementById('guess').value = G.current[index + 1];
        }
        else {
            document.getElementById('guess').value = 'n';
        }
    }
})