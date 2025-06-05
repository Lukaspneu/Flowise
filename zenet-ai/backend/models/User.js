import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'CompanyProfile' }
});

export default mongoose.model('User', userSchema);
