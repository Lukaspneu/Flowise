import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import CompanyProfile from '../models/CompanyProfile.js';

const router = express.Router();

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
}

router.post('/', auth, async (req, res) => {
  const profile = await CompanyProfile.create(req.body);
  await User.findByIdAndUpdate(req.user.id, { companyProfile: profile._id });
  res.json(profile);
});

router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate('companyProfile');
  res.json(user.companyProfile);
});

export default router;
