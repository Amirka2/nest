import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'todos' })
export class TodoModel extends Model<TodoModel> {
  @ApiProperty({ example: 1 })
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ApiProperty({ example: 'Сделать уроки(' })
  @Column
  text: string;

  @ApiProperty({ example: 'Жоское описанние' })
  @Column
  description?: string;

  @ApiProperty({ example: false })
  @Column({
    field: 'is_checked',
  })
  isChecked: boolean;
}
