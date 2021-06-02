import { Request, Response } from 'express';
import Book from '../models/book';

export const get = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).send({ msg: 'Not found' });

    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
