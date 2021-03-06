import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RootConfigModule } from './config/config.root';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    UserModule,
    AuthModule,

    // configs
    RootConfigModule,
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
    ),
    TokenModule,
  ],
})
export class AppModule { }
