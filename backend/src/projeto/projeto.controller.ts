import { Controller, Get } from '@nestjs/common';
import { ProjetoProvider } from './projeto.prisma';

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly proj:ProjetoProvider) { }
    @Get()
    async obterTodos() {
        return await this.proj.obterTodos();
    }
    @Get('destaques')
    async obterDestaques() {
        return await this.proj.obterDestaque();
    }
    @Get('iniciantes')
    async obterIniciantes() {
        return await this.proj.obterIniciante();
    }
    @Get('intermediarios')
    async obterIntermediarios() {
        return await this.proj.obterIntermediario();
    }
    @Get('avancados')
    async obterAvancados() {
        return await this.proj.obterAvancado();
    }
    @Get('experientes')
    async obterExperientes() {
        return await this.proj.obterExperiente();  
    }
}
