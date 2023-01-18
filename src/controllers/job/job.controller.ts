import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Controller('job')
export class JobController {
  constructor(@InjectQueue('queue') private queueQueue: Queue) {}

  @Get(':id')
  async getJob(@Res() res: Response, @Param('id') id: number) {
    let job = await this.queueQueue.getJob(id);
    if (job.returnvalue) {
      res.json(job.returnvalue);
    } else {
      res.json('not_finished');
    }
  }
}
