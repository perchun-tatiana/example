import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { ILink } from '../../interfaces/link.interface';
import { TTScraper } from 'tiktok-scraper-ts';
import { Response } from 'express';

@Controller('with-watermark')
export class WithWatermarkController {
  @Post()
  async download(@Res() res: Response, @Body() linkObj: ILink) {
    let link = linkObj.link;

    const TikTokScraper = new TTScraper();
    try {
      const fetchVideo = await TikTokScraper.video(link, false); // second argument set to true to fetch the video without watermark

      if (fetchVideo) {
        let url = fetchVideo['downloadURL'];
        if (url) {
          res.json(url);
        } else {
          res.json('error');
        }
      }
    } catch (error) {
      console.log('error', error);
      res.json('error');
    }
  }
}
