import mongoose from 'mongoose';

const companyProfileSchema = new mongoose.Schema({
  businessName: String,
  contactEmail: String,
  logoUrl: String
});

export default mongoose.model('CompanyProfile', companyProfileSchema);
