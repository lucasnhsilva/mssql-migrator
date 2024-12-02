import { Test, TestingModule } from '@nestjs/testing';
import { MigratorService } from './migrator.service';

describe('MigratorService', () => {
  let service: MigratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MigratorService],
    }).compile();

    service = module.get<MigratorService>(MigratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
