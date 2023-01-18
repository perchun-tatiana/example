import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { Response } from 'express';
import { TikTok } from 'social-downloader-cherry';
import { ILink } from '../../interfaces/link.interface';

@Controller('without-watermark')
export class WithoutWatermarkController {
  @Post()
  async download(@Res() res: Response, @Body() linkObj: ILink) {
    let link = linkObj.link;
    const resVideo = await TikTok.getVideo(link);
    if (resVideo.data.body) {
      let url = resVideo.data.body.video.url;
      res.json(url);
    } else {
      res.json('error');
    }
  }
}
