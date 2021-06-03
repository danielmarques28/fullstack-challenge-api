import { Request, Response } from 'express';
import { FindManyOptions, getRepository, Like } from 'typeorm';
import { Author } from '../entity/Author';
import { Book } from '../entity/Book';
import { paginate } from '../utils/pagination';

export const list = async (req: Request, res: Response) => {
  try {
    const { page, limit: total, search } = req.query;

    const { offset, limit } = paginate(
      Number(page),
      total ? Number(total) : 9
    );

    const bookRepo = getRepository(Book);

    const options = {
      where: search
        ? {
            name: Like(`%${String(search).toLowerCase()}%`),
          }
        : undefined,
      take: limit,
      skip: offset,
      relations: ['author'],
    } as FindManyOptions<Book>;

    const books = await bookRepo.findAndCount(options);

    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const bookRepo = getRepository(Book);
    const book = await bookRepo.findOne(req.params.id, {
      relations: ['author'],
    });

    if (!book) return res.status(404).send({ msg: 'Not found' });

    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description, authorId } = req.body;

    const authorRepo = getRepository(Author);
    const author = await authorRepo.findOne(authorId);

    if (!author) throw new Error('Author not found');

    const bookRepo = getRepository(Book);
    const book = bookRepo.save({ name, description, author } as Book);

    return res.status(201).send(book);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
