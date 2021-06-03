import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuthor1622746289262 implements MigrationInterface {
  name = 'CreateAuthor1622746289262';

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "author" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)'
    );
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "author"');
  }
}
