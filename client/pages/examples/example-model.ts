export interface IExample {
    _id: string;
    name: string;
    file: string;
    integer: number;
    number: number;
}

export interface IExampleFormValues {
    _id?: string;
    name: string;
    file: string;
    integer: number;
    number: number;
}


export class ExampleFormValues {
    _id?: string = '';
    name: string = '';
    file: string = '';
    integer: number = 0;
    number: number = 0;

    constructor(init?: IExample){
        Object.assign(this, init);
    }
}