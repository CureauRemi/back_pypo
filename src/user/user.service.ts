import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
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
      where: { firstName: dto.firstName, lastName: dto.lastName },
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

  async addPatientToAUser(idPatient: string, idCurrentUser: string) {
    const current = await this.userRepository.findOneOrFail({
      where: { id: idCurrentUser },
      relations: ['patients'],
    });

    const patient = await this.userRepository.findOneOrFail({
      where: { id: idPatient },
    });

    console.log('patients', current);
    if (current.patients == null) {
      current.patients = [];
    }
    current.patients.push(patient);
    console.log('patients', current);
    return this.userRepository.save(current);
  }

  async removePatientToAUser(idPatient: string, idCurrentUser: string) {
    const current = await this.userRepository.findOneOrFail({
      where: { id: idCurrentUser },
    });

    for (let i = 0; i < current.patients.length; i++) {
      if (current.patients[i].id === idPatient) {
        current.patients.splice(i, 1);
      }
    }
  }
}
