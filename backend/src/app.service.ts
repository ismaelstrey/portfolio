import { Injectable } from '@nestjs/common';
import {meuNome}from '@/core'

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! ${meuNome}` ;
  }
}
