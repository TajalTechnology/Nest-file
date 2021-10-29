import { Controller, Post, UploadedFile, UploadedFiles } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiFileFields } from './api-file-fields.decorator';
import { ApiFile, ApiImageFile, ApiPdfFile } from './api-file.decorator';
import { ApiFiles } from './api-files.decorator';
import { FilesService } from './files.service';
import { ParseFile } from './parse-file.pipe';
import { fileMimetypeFilter } from './file-mimetype-filter';

import { createReadStream } from 'fs';
import { join } from 'path';
import csv from "fast-csv";

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post('avatar')
  @ApiImageFile('avatar', true)
  uploadAvatar(@UploadedFile(ParseFile) file: Express.Multer.File) {
    try {
      let tutorials = [];

      createReadStream(file.originalname)
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => {
          throw error.message;
        })
        .on("data", (row) => {
          console.log(row)
          tutorials.push(row);
        })
        .on("end", () => {
          // Tutorial.bulkCreate(tutorials)
          //   .then(() => {
          //     res.status(200).send({
          //       message:
          //         "Uploaded the file successfully: " + req.file.originalname,
          //     });
          //   })
            // .catch((error) => {
            //   console.log(error)
            // });
        });
    } catch (error) {

    }

    console.log(file.originalname);
  }

  @Post('document')
  @ApiPdfFile('document', true)
  uploadDocument(@UploadedFile(ParseFile) file: Express.Multer.File) {
    console.log(file);
  }

  @Post('uploads')
  @ApiFiles('files', true)
  uploadFiles(@UploadedFiles(ParseFile) files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @Post('uploadFields')
  @ApiFileFields([
    { name: 'avatar', maxCount: 1, required: true },
    { name: 'background', maxCount: 1 },
  ])
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
  }
}
