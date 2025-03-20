import { Module } from '@nestjs/common';
import { ProjetoProvider } from './projeto.prisma';
import { ProjetoController } from './projeto.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [ProjetoProvider],
  controllers: [ProjetoController],
  exports: [ProjetoProvider],
  imports: [DbModule],
})
export class ProjetoModule {}
