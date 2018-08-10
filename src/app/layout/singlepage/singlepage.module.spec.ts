import { SinglepageModule } from './singlepage.module';

describe('SinglepageModule', () => {
  let singlepageModule: SinglepageModule;

  beforeEach(() => {
    singlepageModule = new SinglepageModule();
  });

  it('should create an instance', () => {
    expect(singlepageModule).toBeTruthy();
  });
});
