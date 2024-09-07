import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UploadFileService } from "./upload-file.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import e from "express";
export const uniqueSuffixe =  Date.now() + '_' + Math.round(Math.random() * 1e9);
@Controller('upload-file')
export class UploadFileController {

  constructor(private readonly uploadFileService: UploadFileService) {}


  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage(
      {
        destination: "C:/Users/pc/Documents/Projets/Nest_Project/files",
        filename: (req: e.Request, file: Express.Multer.File, callback: any) => {
          // const uniqueSuffixe = Date.now() + '_' + Math.round(Math.random() * 1e9);
          let extArray = file.mimetype.split("/");
          let extension = extArray[extArray.length - 1];
          let filename = `${file.originalname}-${uniqueSuffixe}.${extension}`;
          callback(null, filename);
      }
      }
    )
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File,
             @Body() paramDatas: any) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    return "File " + extension + " Created !";
  }
}