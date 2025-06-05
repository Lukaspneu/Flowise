import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: String,
  stripeCustomerId: String,
  active: { type: Boolean, default: false }
});

export default mongoose.model('Subscription', subscriptionSchema);
