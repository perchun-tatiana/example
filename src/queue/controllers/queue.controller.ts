import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Response } from 'express';
import { ILink } from '../../interfaces/link.interface';

@Controller('download')
export class QueueController {
  constructor(@InjectQueue('queue') private readonly queueQueue: Queue) {}

  @Post()
  async download(@Res() res: Response, @Body() linkObj: ILink) {
    console.log('link', linkObj);
    let link = linkObj.link;
    let watermark = linkObj.watermark;
    try {
      const job = await this.queueQueue.add({
        link: link,
        watermark: watermark,
      });
      res.json(job.id);
    } catch (error) {
      console.log('error', error);
      res.json('error');
    }
  }
}
