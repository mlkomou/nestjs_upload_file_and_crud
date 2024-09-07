import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
              readonly useRepository: Repository<User>) {
  }
  create(createUserDto: CreateUserDto) {
    console.log('userDto', createUserDto);
    return this.useRepository.save(createUserDto);
  }

  createParams(createUserDto: CreateUserDto) {
    return this.useRepository.save(createUserDto);
  }

  findAll() {
    return this.useRepository.find();
  }

  findOne(id: number) {
    return this.useRepository.findOneBy({id: id});
  }

  remove(id: number) {
    return this.useRepository.delete(id);
  }
}
