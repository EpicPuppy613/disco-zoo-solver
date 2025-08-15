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
    element: HTMLTableCellElement;
}

class Animal {
    id: string;
    index: number;
    found: boolean = false;
    cells: [number, number][] = [];

    constructor(id: string, index: number) {
        this.id = id;
        this.index = index;
    }
}

let grid: GridCell[][];
let animals: Animal[];

function reset() {
    grid = new Array(5);
    for (let i = 0; i < 5; i++) {
        grid[i] = new Array(5).fill(0).map(e => new GridCell());
    }
    animals = [];
}

// First time init
reset();
const gridTable = document.getElementById("grid-table") as HTMLTableElement;
const gridRows: HTMLTableRowElement[] = [];
for (let i = 0; i < 5; i++) {
    gridRows.push(document.createElement("tr"));
    gridTable.appendChild(gridRows[i]);
}
for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        grid[x][y].element = document.createElement("td");
        gridRows[y].appendChild(grid[x][y].element);
        grid[x][y].element.innerHTML = `<strong class="best">0.0%</strong><br><span>Pig: 0.0%</span><br><span>Sheep: 0.0%</span>`;
    }
}