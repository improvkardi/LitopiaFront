export * from './candidatureProcess.service';
import { CandidatureProcessService } from './candidatureProcess.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './minecraftUsers.service';
import { MinecraftUsersService } from './minecraftUsers.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [CandidatureProcessService, DefaultService, MinecraftUsersService, UsersService];
