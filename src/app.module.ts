import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { User } from "./user/entities/user.entity";
import { UploadFileModule } from './upload-file/upload-file.module';
import { MulterModule } from "@nestjs/platform-express";
import { DownloadModule } from './download/download.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "*mlkomouml7711ori",
      database: "nestdb",
      entities: [User],
      synchronize: true
      // autoLoadEntities: true,
    }),
    UserModule,
    UploadFileModule,
    DownloadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
