import mongoose from 'mongoose';

var guildParameters = new mongoose.Schema({
    guild_id: [{ type: String, required: true }],
    delete_command: [{ type: Boolean, required: true }]
});

interface IGuildParameters {
    guild_id: string;
    delete_command: boolean;
}

export interface IGuildParametersDocument extends IGuildParameters, mongoose.Document { }

export interface IGuildParametersModel extends mongoose.Model<IGuildParametersDocument> { }

export const GuildParameters = mongoose.model<IGuildParametersDocument>('guildParameters', guildParameters);
