import { Test, TestingModule } from '@nestjs/testing';
import { MigratorController } from './migrator.controller';
import { MigratorService } from './migrator.service';

describe('MigratorController', () => {
  let controller: MigratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MigratorController],
      providers: [MigratorService],
    }).compile();

    controller = module.get<MigratorController>(MigratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
