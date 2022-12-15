import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/SMTPMail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    { provide: MailService, useClass: SMTPMailService },
  ],
})
export class AppModule {}