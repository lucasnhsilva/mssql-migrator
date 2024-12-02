import { Module } from '@nestjs/common';
import { MigratorModule } from './migrator/migrator.module';

@Module({
  imports: [MigratorModule]
})
export class AppModule {}
