import mongoose from 'mongoose';

const analyticsDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  callsAnswered: { type: Number, default: 0 },
  bookingsMade: { type: Number, default: 0 },
  feedbackCollected: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('AnalyticsData', analyticsDataSchema);
