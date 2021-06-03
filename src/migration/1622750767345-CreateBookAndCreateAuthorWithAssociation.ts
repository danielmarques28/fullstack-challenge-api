import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBookAndCreateAuthorWithAssociation1622750767345 implements MigrationInterface
{
  name = 'CreateBookAndCreateAuthorWithAssociation1622750767345';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "book" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" text NOT NULL, "authorId" integer)'
    );
    await queryRunner.query(
      'CREATE TABLE "author" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)'
    );
    await queryRunner.query(
      'CREATE TABLE "temporary_book" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" text NOT NULL, "authorId" integer, CONSTRAINT "FK_66a4f0f47943a0d99c16ecf90b2" FOREIGN KEY ("authorId") REFERENCES "author" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)'
    );
    await queryRunner.query(
      'INSERT INTO "temporary_book"("id", "name", "description", "authorId") SELECT "id", "name", "description", "authorId" FROM "book"'
    );
    await queryRunner.query('DROP TABLE "book"');
    await queryRunner.query('ALTER TABLE "temporary_book" RENAME TO "book"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "book" RENAME TO "temporary_book"');
    await queryRunner.query(
      'CREATE TABLE "book" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" text NOT NULL, "authorId" integer)'
    );
    await queryRunner.query(
      'INSERT INTO "book"("id", "name", "description", "authorId") SELECT "id", "name", "description", "authorId" FROM "temporary_book"'
    );
    await queryRunner.query('DROP TABLE "temporary_book"');
    await queryRunner.query('DROP TABLE "author"');
    await queryRunner.query('DROP TABLE "book"');
  }
}
