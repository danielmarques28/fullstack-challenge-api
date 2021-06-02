import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface BookAttributes {
  id: number;
  title: string;
  description: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

interface BookInstance extends Model<BookAttributes, BookCreationAttributes>, BookAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Book = sequelize.define<BookInstance>(
  'Book',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    title: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }
);

export default Book;
