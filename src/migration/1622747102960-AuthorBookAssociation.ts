import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AuthorBookAssociation1622747102960 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'book',
      new TableForeignKey({
        columnNames: ['authorId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'author',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('book', 'authorId');
  }
}
