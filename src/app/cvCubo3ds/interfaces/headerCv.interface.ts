
export interface HeaderCvInterface{
    img ? : string;
    level ? : 'principiante' | 'medio' | 'avanzado' | 'experto';
    conctactos: Conctactos;
    nombre?:string;
    puesto?:string;
}

export interface Conctactos{
    email : string;
    phone : number;
    other : string;
}