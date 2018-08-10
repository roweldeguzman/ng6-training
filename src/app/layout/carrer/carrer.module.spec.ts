import { CarrerModule } from './carrer.module';

describe('CarrerModule', () => {
  let carrerModule: CarrerModule;

  beforeEach(() => {
    carrerModule = new CarrerModule();
  });

  it('should create an instance', () => {
    expect(carrerModule).toBeTruthy();
  });
});
