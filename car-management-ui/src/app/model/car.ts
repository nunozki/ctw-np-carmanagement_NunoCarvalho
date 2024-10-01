import { EngineType } from '../car/enginetype/engine-type.enum';
export interface Car {
    id: string,
    brand: string,
    model: string,
    engineType: EngineType;
}
