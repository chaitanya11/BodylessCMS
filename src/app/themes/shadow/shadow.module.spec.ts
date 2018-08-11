import { ShadowModule } from './shadow.module';

describe('ShadowModule', () => {
  let shadowModule: ShadowModule;

  beforeEach(() => {
    shadowModule = new ShadowModule();
  });

  it('should create an instance', () => {
    expect(shadowModule).toBeTruthy();
  });
});
