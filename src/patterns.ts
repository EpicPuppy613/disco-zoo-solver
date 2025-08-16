import p from './patterns.json';

export interface AnimalPattern {
    id: string;
    name: string;
    size: [number, number];
    cells: number;
    pattern: string[][];
}

export const patterns = p as unknown as {[key: string]: {[key: string]: AnimalPattern}};