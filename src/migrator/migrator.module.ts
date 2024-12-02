import { Module } from '@nestjs/common';
import { MigratorService } from './migrator.service';
import { MigratorController } from './migrator.controller';

@Module({
  controllers: [MigratorController],
  providers: [MigratorService],
})
export class MigratorModule {}
