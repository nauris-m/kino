import {Request, Response} from 'express';
import {DUMMY_DATA} from './dummy-data';

export function getAllDummyData(req: Request, res: Response) {
  res.status(200).json({payload: Object.values(DUMMY_DATA)});
}
