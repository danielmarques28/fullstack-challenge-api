import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBook1622745654174 implements MigrationInterface {
  name = 'CreateBook1622745654174';

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "book" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" text NOT NULL)'
    );
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "book"');
  }
}
