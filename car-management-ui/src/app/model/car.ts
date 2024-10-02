import { EngineType } from '../car/enginetype/engine-type.enum';
export interface Car {
    id: string,
    brand: string,
    model: string,
    engineType: EngineType;
}

export class CarImpl implements Car {
  id: string;
  brand: string;
  model: string;
  engineType: EngineType;

  constructor() {
    this.id = '';
    this.brand = '';
    this.model = '';
    this.engineType = EngineType.UNKNOWN; // or some other default value
  }
}
