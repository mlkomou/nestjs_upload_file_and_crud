import { Injectable } from '@nestjs/common';
import { createReadStream, readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class DownloadService {
  imageBuffer() {
    return readFileSync(join('C:/Users/pc/Documents/Projets/Nest_Project/files', 'Sans titre-1.png-1725714425730_266476018.png'));
  }

  imageStream() {
    return createReadStream(join('C:/Users/pc/Documents/Projets/Nest_Project/files', 'Sans titre-1.png-1725714425730_266476018.png'));
  }

  fileStream() {
    return createReadStream(join('C:/Users/pc/Documents/Projets/Nest_Project/files', 'Sans titre-1.png-1725714425730_266476018.png'));
  }
}
