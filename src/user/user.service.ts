import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOneById(id: string): Promise<User> {
    return await this.userRepository.findOneOrFail(id);
  }

  async getOneByName(dto: UserDTO): Promise<User> {
    return await this.userRepository.findOneOrFail({
      where: { firstName: dto.firstName, lastName: dto.lastName }
    });
  }

  async create(user: User) {
    return this.userRepository.save(user);
  }

  async update(user: User) {
    return this.userRepository.save(user);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete({ id: id });
  }
}
