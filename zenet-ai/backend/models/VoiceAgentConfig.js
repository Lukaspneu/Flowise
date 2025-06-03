import mongoose from 'mongoose';

const voiceAgentConfigSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  agentName: String,
  voice: String,
  tone: String,
  language: { type: String, default: 'cs' }
});

export default mongoose.model('VoiceAgentConfig', voiceAgentConfigSchema);
