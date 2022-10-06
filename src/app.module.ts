import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { VendaModule } from './venda/venda.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ProductsModule, VendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
