import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  async getTasks() {
    const allTasks = await this.prisma.tasks.findMany();
    return allTasks;
  }
  async createTasks(dto: TaskDto) {
    console.log(dto);
    try {
      const task = await this.prisma.tasks.create({
        data: {
          title: dto.title,
        },
      });
      return `${dto.title} is created successfully`;
    } catch (error) {
      console.log(error);
      throw new Error('Could not create your task');
    }
  }
  async deleteTasks(id: number) {
    try {
      const deleteById = await this.prisma.tasks.delete({
        where: { id },
      });
      return 'Delete Successful';
    } catch (error) {
      console.log(error);
      throw new Error('Record does not exist');
    }
  }
}
