export interface Result {
    planet: string;
    rockets: { type: string; count: number }[];
}

export interface RocketType {
    type : string,
    chargeCapacity : number,
}

export interface Charge {
    planet: string,
    weight: number,
}