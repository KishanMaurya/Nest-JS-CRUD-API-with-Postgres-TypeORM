import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Kishan@1234',
    database: 'products',
    autoLoadEntities: true,
    synchronize: true,
  }),
  ProductsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
