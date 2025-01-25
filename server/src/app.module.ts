import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfluencerModule } from './influencer/influencer.module';
import { ClaimModule } from './claim/claim.module';
import { ResearchModule } from './research/research.module';

@Module({
  imports: [InfluencerModule, ClaimModule, ResearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
