import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueController } from './controllers/queue.controller';
import { QueueProcessor } from './queue.processor';
import { TtdownloaderService } from '../services/ttdownloader/ttdownloader.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'queue',
    }),
  ],
  controllers: [QueueController],
  providers: [QueueProcessor, TtdownloaderService],
  exports: [BullModule],
})
export class QueueModule {}
