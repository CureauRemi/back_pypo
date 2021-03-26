import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
      ) {}
      async getAllCategorie(): Promise<Category[]>{
        return await this.categoryRepository.find();
      }
     async createCategoryinCategory(category: Category) {
        return await this.categoryRepository.save(category);
      }
}
