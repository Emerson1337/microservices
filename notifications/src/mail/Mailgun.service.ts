import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class MailgunService implements MailService {
  sendMail(): string {
    return 'Mailgun Services';
  }
}
