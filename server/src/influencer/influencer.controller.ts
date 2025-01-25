import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { UpdateInfluencerDto } from './dto/update-influencer.dto';

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}

  @Post()
  create(@Body() createInfluencerDto: CreateInfluencerDto) {
    return this.influencerService.create(createInfluencerDto);
  }

  @Get()
  findAll() {
    return this.influencerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.influencerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInfluencerDto: UpdateInfluencerDto) {
    return this.influencerService.update(+id, updateInfluencerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.influencerService.remove(+id);
  }
}
