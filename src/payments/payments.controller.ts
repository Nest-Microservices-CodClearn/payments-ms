import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return this.paymentsService.createPaymentSession();
  }

  @Get('success')
  succes() {
    return {
      ok: true,
      message: 'Payment Successful',
    };
  }

  @Get('cancel')
  cancel() {
    return {
      ok: true,
      message: 'Payment Successful',
    };
  }

  @Post('webhook')
  async stripeWebHook(){
    return 'stripe WebHook'
  }
}
