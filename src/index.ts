import { AnimalPattern, patterns } from "./patterns";
import "./style.css";

enum CellAnimal {
    Unknown,
    Nothing = -1
}

class GridCell {
    current: CellAnimal = CellAnimal.Unknown;
    totalChances: number = 0;
    animalChances: number[] = [];
    element: HTMLDivElement;
    select: HTMLSelectElement;
}

class Animal {
    id: string;
    index: number;
    cells: number = 0;
    found: boolean = false;

    constructor(id: string, index: number) {
        this.id = id;
        this.index = index;
    }
}

function iterateGrid(w: number, h: number, fn: (x: number, y: number) => void) {
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            fn(x, y);
        }
    }
}

const animal1 = (document.getElementById("animal1") as HTMLSelectElement);
const animal2 = (document.getElementById("animal2") as HTMLSelectElement);
const animal3 = (document.getElementById("animal3") as HTMLSelectElement);

let grid: GridCell[][];
let region: string = "farm";
let animals: Animal[];

function changeRegion() {
    region = (document.getElementById("area") as HTMLSelectElement).value;
    
    let select = `<option value="">None</option>`;
    for (const animal of Object.keys(patterns[region])) {
        select += `<option value="${animal}">${patterns[region][animal].name}</option>`;
    }
    animal1.innerHTML = select;
    animal2.innerHTML = select;
    animal3.innerHTML = select;
    reset();
}

function reset() {
    grid = new Array(5);
    for (let i = 0; i < 5; i++) {
        grid[i] = new Array(5).fill(0).map(e => new GridCell());
    }
    animals = [];
    if (animal1.value) {
        animals.push(new Animal(animal1.value, animals.length));
    }
    if (animal2.value) {
        animals.push(new Animal(animal2.value, animals.length));
    }
    if (animal3.value) {
        animals.push(new Animal(animal3.value, animals.length));
    }
    const gridTable = document.getElementById("grid-table") as HTMLTableElement;
    gridTable.innerHTML = "";
    const gridRows: HTMLTableRowElement[] = [];
    for (let i = 0; i < 5; i++) {
        gridRows.push(document.createElement("tr"));
        gridTable.prepend(gridRows[i]);
    }
    iterateGrid(5, 5, (x, y) => {
        const cell = document.createElement("td");
        gridRows[y].appendChild(cell);
        const select = document.createElement("select");
        cell.appendChild(select);
        select.id = `cell${x}${y}`;
        select.innerHTML = `<option value="">???</option>`;
        select.addEventListener("change", updateCell.bind(null, select, x, y));
        grid[x][y].select = select;
        const data = document.createElement("div");
        cell.appendChild(data);
        data.innerHTML = `<strong>0.0%</strong>`;
        grid[x][y].element = data;
        grid[x][y].animalChances = new Array(animals.length).fill(0);
    });
    if (animals.length > 0) updateBoard();
}

function updateBoard() {
    iterateGrid(5, 5, (x, y) => {
        const cell = grid[x][y];
        cell.totalChances = 0;
        cell.animalChances.fill(0);
    });
    let totalPossible = 0;
    let animalPossible = new Array(animals.length).fill(0);
    // Algorithm Explanation
    // 1. Iterate through each not found animal
    // 2. For each possible location the animal fits on the grid:
    //  a. Check each square of the animal's pattern and see if it matches what's currently on the grid
    //  b. If it does fit, iterate through each square of the animal and increase that cell's count
    for (const animal of animals) {
        const pattern = patterns[region][animal.id];
        iterateGrid(6 - pattern.size[0], 6 - pattern.size[1], (x1, y1) => {
            let valid = true;
            let cells = 0;
            iterateGrid(pattern.size[0], pattern.size[1], (x2, y2) => {
                if (!pattern.pattern[x2][y2]) return;
                if (grid[x1 + x2][y1 + y2].current != CellAnimal.Unknown && grid[x1 + x2][y1 + y2].current != animal.index + 1) {
                    valid = false;
                }
                if (grid[x1 + x2][y1 + y2].current == animal.index + 1) {
                    cells++;
                }
            });
            if (cells < animal.cells || !valid) return;
            totalPossible++;
            animalPossible[animal.index]++;
            iterateGrid(pattern.size[0], pattern.size[1], (x2, y2) => {
                if (!pattern.pattern[x2][y2]) return;
                grid[x1 + x2][y1 + y2].totalChances++;
                grid[x1 + x2][y1 + y2].animalChances[animal.index]++;
            });
        });
    }
    let bestOverall = 0;
    let bestAnimals = new Array(animals.length).fill(0);
    iterateGrid(5, 5, (x, y) => {
        const cell = grid[x][y];
        if (cell.current != CellAnimal.Unknown) return;
        bestOverall = Math.max(bestOverall, cell.totalChances);
        for (let i = 0; i < animals.length; i++) {
            bestAnimals[i] = Math.max(bestAnimals[i], cell.animalChances[i]);
        }
    });
    iterateGrid(5, 5, (x, y) => {
        const cell = grid[x][y];
        let text = `<strong${cell.totalChances == bestOverall ? ' class="best"' : ''}>${(cell.totalChances / totalPossible * 100).toFixed(1)}%</strong>`;
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].found) continue;
            text += `<br><span${cell.animalChances[i] == bestAnimals[i] ? ' class="best"' : ''}>${patterns[region][animals[i].id].name}: ${(cell.animalChances[i] / animalPossible[i] * 100).toFixed(1)}%</span>`;
        }
        let options = '<option value="">???</option><option value="-1">Nothing</option>';
        for (const animal of animals) {
            if (animal.found) continue;
            options += `<option value="${animal.index + 1}">${patterns[region][animal.id].name}</option>`;
        }
        if (cell.current == CellAnimal.Unknown) {
            cell.element.innerHTML = text;
            cell.select.innerHTML = options;
        } else {
            cell.element.innerHTML = "";
            cell.select.disabled = true;
        }
    });
}

function updateCell(select: HTMLSelectElement, x: number, y: number) {
    const input = select.value;
    if (input == "") return;
    const value = parseInt(input);
    const cell = grid[x][y];
    cell.current = value;
    if (value > 0) {
        const animal = animals[value - 1];
        animal.cells++;
        if (animal.cells >= patterns[region][animal.id].cells) {
            animal.found = true;
        }
    }
    updateBoard();
}

// First time init
changeRegion();
reset();

(document.getElementById("area") as HTMLSelectElement).addEventListener("change", changeRegion);
(document.getElementById("reset") as HTMLButtonElement).addEventListener("click", reset);