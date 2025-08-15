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