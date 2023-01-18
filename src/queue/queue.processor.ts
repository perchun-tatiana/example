import { Process, Processor, OnQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
import { TtdownloaderService } from 'src/services/ttdownloader/ttdownloader.service';

@Processor('queue')
export class QueueProcessor {
  constructor(private ttdownloaderService: TtdownloaderService) {}

  @Process()
  async handleTranscode(job: Job) {
    let link = job.data.link;
    let watermark = job.data.watermark;
    let url;
    let data = await this.ttdownloaderService.tiktokdownload(link);

    if (data['nowm']) {
      if (watermark) {
        url = data['wm'];
      } else {
        url = data['nowm'];
      }
    } else {
      return 'error';
    }
    return url;
  }
}
