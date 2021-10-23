import { Body, Controller, Get, Post } from '@nestjs/common';
import {CreateJogadorDto} from './dtos/create-jogador.dto'
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService){  }

    @Post()
    async createUpdateJogador(@Body() dto: CreateJogadorDto) {
        await this.jogadoresService.createUpdateJogador(dto)
    }

    @Get()
    async getJogador(): Promise<Jogador[]> {
        return this.jogadoresService.getJogadores()
    }
}
