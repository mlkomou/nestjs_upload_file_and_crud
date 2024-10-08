import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Column()
  email: string;
  @Column()
  password: string;

  constructor(id: number, fullname: string, email: string, password: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
}
