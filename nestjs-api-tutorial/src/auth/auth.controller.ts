import { Controller, Post, Req} from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { Request } from "express";
;
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller ()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto:AuthDto) {       
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}