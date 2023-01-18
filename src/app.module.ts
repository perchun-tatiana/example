import { Module } from '@nestjs/common';
import { WithWatermarkController } from './controllers/with-watermark/with-watermark.controller';
import { WithoutWatermarkController } from './controllers/without-watermark/without-watermark.controller';
import { ConfigModule } from '@nestjs/config';
import { QueueModule } from './queue/queue.module';
import { BullModule } from '@nestjs/bull';
import { JobController } from './controllers/job/job.controller';
import { TtdownloaderService } from './services/ttdownloader/ttdownloader.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QueueModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [
    WithWatermarkController,
    WithoutWatermarkController,
    JobController,
  ],
  providers: [TtdownloaderService],
})
export class AppModule {}
