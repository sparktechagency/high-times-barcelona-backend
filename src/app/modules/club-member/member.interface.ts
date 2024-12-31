import { ObjectId } from 'mongoose';

export type IMember = {
      name: string;
      email: string;
      contact: string;
      club: ObjectId;
      numberOfVisitors: number;
      date: Date;
};
