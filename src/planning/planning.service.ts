import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Planning } from './planning.entity';

@Injectable()
export class PlanningService {
  constructor(
    @InjectRepository(Planning)
    private readonly planningRepository: Repository<Planning>,
  ) {}
  async getAll(): Promise<Planning[]> {
    return await this.planningRepository.find();
  }
  async getAllOfOneUser(user: User) {
    return await this.planningRepository.find({ where: { owner: user } });
  }

  async getOneEventOfOneUser(user: User, idPlanning: string) {
    return await this.planningRepository
      .createQueryBuilder('planning')
      .where('planning.owner = :id', { id: user.id })
      .andWhere('planning.id = :idplanning', { idplanning: idPlanning })
      .getOne();
  }

  async createEventInPlanning(planning: Planning) {
    return await this.planningRepository.save(planning);
  }

  async updateEventInPlanning(planning: Planning) {
    return await this.planningRepository.save(planning);
  }

  async deleteEventInPlanning(id: string) {
    return await this.planningRepository.delete(id);
  }
}
