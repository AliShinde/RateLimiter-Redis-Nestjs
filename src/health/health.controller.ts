import { Controller, Get } from '@nestjs/common';
import Redis from 'ioredis';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthDto } from './health.dto';

@Controller('health')
export class HealthController {
  private readonly redisClient: Redis;
  constructor(private readonly prisma: PrismaService) {
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
      enableOfflineQueue: false,
    });
  }
  @Get()
  async checkHealth() {
    // Check db level
    const dto = new HealthDto();
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      dto.db = 'ok';
    } catch (error) {
      dto.db = 'not ok';
    }
    // Redis check
    try {
      const pong = await this.redisClient.ping();
      if (pong === 'PONG') {
        dto.redis = 'ok';
      } else {
        dto.redis = 'not ok';
      }
    } catch (error) {
      throw new Error(error);
    }
    const info = await this.redisClient.info('server');
    const matchSeconds = info.match(/uptime_in_seconds:(\d+)/)?.[1] ?? '0';
    dto.uptime_in_seconds = matchSeconds;
    const newIso = new Date().toISOString();
    dto.timestamp = newIso;
    return dto;
  }
}
