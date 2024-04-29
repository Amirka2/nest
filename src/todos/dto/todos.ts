import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'todos' })
export class TodoModel extends Model<TodoModel> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  text: string;

  @Column({
    field: 'ischecked',
  })
  isChecked: boolean;
}
