import mongoose from 'mongoose';

var questions = new mongoose.Schema({
    theme: [{ type: String, required: true }],
    validated: [{ type: Boolean, required: true }],
    question: [{ type: String, required: true }],
    answer: [{ type: String, required: true }],
    false_answer: [{ type: [String], required: true }]
});

interface IQuestions {
    theme: string;
    validated: boolean;
    question: string;
    answer: string;
    false_answer: Array<string>;
}

export interface IQuestionsDocument extends IQuestions, mongoose.Document { }

export interface IQuestionsModel extends mongoose.Model<IQuestionsDocument> { }

export const Questions = mongoose.model<IQuestionsDocument>('Questions', questions);
