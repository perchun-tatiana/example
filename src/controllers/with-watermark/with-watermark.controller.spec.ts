import { Test, TestingModule } from '@nestjs/testing';
import { WithWatermarkController } from './with-watermark.controller';

describe('WithWatermarkController', () => {
  let controller: WithWatermarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithWatermarkController],
    }).compile();

    controller = module.get<WithWatermarkController>(WithWatermarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
