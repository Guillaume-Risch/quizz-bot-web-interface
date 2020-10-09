import mongoose from 'mongoose';

var scores = new mongoose.Schema({
    user_id: [{ type: String, required: true }],
    guild_id: [{ type: String, required: true }],
    score: [{ type: Number, required: true }]
});

interface IScores {
    user_id: string;
    guild_id: string;
    score: number;
}

export interface IScoresDocument extends IScores, mongoose.Document { }

export interface IScoreModel extends mongoose.Model<IScoresDocument> { }

export const Scores = mongoose.model<IScoresDocument>('Scores', scores);
