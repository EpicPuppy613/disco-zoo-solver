import raw from './patterns.json';

export interface AnimalPattern {
    id: string;
    name: string;
    size: [number, number];
    cells: number;
    pattern: string[][];
}

const p: any = {};
const r: any = {};
for (const [region, animals] of Object.entries(raw)) {
    for (const [animal, pattern] of Object.entries(animals)) {
        p[animal] = pattern;
    }
    r[region] = Object.keys(animals);
}

export const patterns = p as unknown as {[key: string]: AnimalPattern};
export const regions = r as {[key: string]: string[]}