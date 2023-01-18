import { Test, TestingModule } from '@nestjs/testing';
import { TtdownloaderService } from './ttdownloader.service';

describe('TtdownloaderService', () => {
  let service: TtdownloaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TtdownloaderService],
    }).compile();

    service = module.get<TtdownloaderService>(TtdownloaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
