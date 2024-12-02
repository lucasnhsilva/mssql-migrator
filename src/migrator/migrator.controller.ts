import { Controller } from '@nestjs/common';
import { MigratorService } from './migrator.service';

@Controller('migrator')
export class MigratorController {
  constructor(private readonly migratorService: MigratorService) {}
}
