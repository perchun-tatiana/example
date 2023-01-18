import { Test, TestingModule } from '@nestjs/testing';
import { WithoutWatermarkController } from './without-watermark.controller';

describe('WithoutWatermarkController', () => {
  let controller: WithoutWatermarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithoutWatermarkController],
    }).compile();

    controller = module.get<WithoutWatermarkController>(WithoutWatermarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
