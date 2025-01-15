import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-sesion.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto:PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
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
