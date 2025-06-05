import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Render,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly task: TaskService) {}
  @Get()
  getTasks() {
    return this.task.getTasks();
  }
  @Get('create')
  @Render('createForm')
  getCreateForm() {}

  @Post()
  postTask(@Body() dto: TaskDto) {
    return this.task.createTasks(dto);
  }
  @Delete(':id')
  deleteOneTask(@Param('id', ParseIntPipe) id: number) {
    return this.task.deleteTasks(id);
  }
}
