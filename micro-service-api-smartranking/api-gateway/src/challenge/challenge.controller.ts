import { Body, Controller, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxySmartRanking } from 'src/proxymq/client-proxy';
import { CreateChallengeDto } from './dto/create-challenge.dto';

@Controller('api/v1/challenges')
export class ChallengeController {

    private logger = new Logger(ChallengeController.name)
    private clientAdminBackEnd = this.proxy
    .getClientProxyAdminBackEndInstance()


    constructor(private proxy: ClientProxySmartRanking){}

    @Post()
    @UsePipes(ValidationPipe)
    save(@Body() dto: CreateChallengeDto){
        this.logger.log(`create challenge: ${JSON.stringify(dto)}`)

        this.clientAdminBackEnd.emit('save-challenge', dto)

    }
}
