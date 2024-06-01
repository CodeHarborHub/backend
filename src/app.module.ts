import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SupabaseService } from './supabase.service';

@Module({
  imports: [CoursesModule, UserModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
  exports: [SupabaseService]
})
export class AppModule {}