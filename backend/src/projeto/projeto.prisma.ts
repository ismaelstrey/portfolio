import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Projeto } from '@/core';

@Injectable()
export class ProjetoProvider {
    constructor( private readonly prisma: PrismaProvider ) { }
    async obterTodos():Promise<Projeto[]> {
        return this.prisma.projeto.findMany() as any;
    }
    async obterDestaque():Promise<Projeto[]>  {
        return this.prisma.projeto.findMany({
            where: { destaque: true }
        })as any
    }
    async obterUm(id: number):Promise<Projeto>  {
        return this.prisma.projeto.findUnique({
            where: { id }
        }) as any
    }
    async obterIniciante():Promise<Projeto[]> {
        return this.prisma.projeto.findMany({
            where: {
               nivel:1
            }
        })as any
    }
    async obterIntermediario():Promise<Projeto[]> {
        return this.prisma.projeto.findMany({
            where: {
               nivel:2
            }
        }) as any
    }
    async obterAvancado():Promise<Projeto[]> {
        return this.prisma.projeto.findMany({
            where: {
               nivel:3
            }
        })as any
    }
    async obterExperiente():Promise<Projeto[]> {
        return this.prisma.projeto.findMany({
            where: {
               nivel:4
            }
        })as any
    }
}
