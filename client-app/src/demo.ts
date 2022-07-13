export interface Duck{
    name: string;
    num: number;
    makesound: () => void;
}

const duck1: Duck ={
    name: 'a',
    num: 0,
    makesound: () => console.log("a")
}
export const ducks = [duck1]