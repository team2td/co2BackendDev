// const mongoose = require('mongoose');
const Donation = require('../models/donationModel');
//const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const {
  populateGroupReference,
} = require('../middlewares/tranformGroupIdInObj');

// exports.setUserIds = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.group) req.body.group = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

// Middleware per convertire userId in ObjectId
// exports.convertUserIdToObjectId = (req, res, next) => {
//   console.log('req.body.userId test: ', req.body.userId);

//   //   console.log('req.body.userId dopo: ', req.body.userId);
//   next();
// };
exports.getAllDonation = factory.getAll(Donation);
exports.getDonation = factory.getOne(Donation);
exports.createDonation = factory.createOne(Donation);
// exports.deleteGroup = factory.deleteOne(School);
// exports.updateGroup = factory.updateOne(School);

// Middleware per popolare groupId con riferimento a Group
exports.setGroupReference = populateGroupReference;
