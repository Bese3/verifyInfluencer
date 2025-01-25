import { Injectable } from '@nestjs/common';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { UpdateInfluencerDto } from './dto/update-influencer.dto';

@Injectable()
export class InfluencerService {
  create(createInfluencerDto: CreateInfluencerDto) {
    return 'This action adds a new influencer';
  }

  findAll() {
    return `This action returns all influencer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} influencer`;
  }

  update(id: number, updateInfluencerDto: UpdateInfluencerDto) {
    return `This action updates a #${id} influencer`;
  }

  remove(id: number) {
    return `This action removes a #${id} influencer`;
  }
}
