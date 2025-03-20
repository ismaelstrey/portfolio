import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoProvider {
    constructor( private readonly prisma: PrismaProvider ) { }
    async obterTodos() {
        return this.prisma.projeto.findMany();
    }
    async obterDestaque() {
        return this.prisma.projeto.findMany({
            where: { destaque: true }
        });
    }
    async obterUm(id: number) {
        return this.prisma.projeto.findUnique({
            where: { id }
        });
    }
    async obterIniciante(){
        return this.prisma.projeto.findMany({
            where: {
               nivel:1
            }
        });
    }
    async obterIntermediario(){
        return this.prisma.projeto.findMany({
            where: {
               nivel:2
            }
        });
    }
    async obterAvancado(){
        return this.prisma.projeto.findMany({
            where: {
               nivel:3
            }
        });
    }
    async obterExperiente(){
        return this.prisma.projeto.findMany({
            where: {
               nivel:4
            }
        });
    }
}
