import { Request, Response } from 'express';

const get404 = (_request: Request, response: Response) => {
  response.status(404).render('404', { pageTitle: 'Page Not Found' });
};

export const errorControler = { get404 };
