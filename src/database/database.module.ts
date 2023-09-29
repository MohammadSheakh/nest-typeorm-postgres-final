import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';

@Module({
  providers: [...DatabaseProvider],
  exports : [...DatabaseProvider] // 😢 ei line ta bujhi nai 
})
export class DatabaseModule {}
