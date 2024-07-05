const Group = require('../models/groupModel');
//const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// exports.setUserIds = (req, res, next) => {
//   //Allow nested routes
//   if (!req.body.group) req.body.group = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

exports.getAllGroup = factory.getAll(Group);
exports.getGroup = factory.getOne(Group);
exports.createGroup = factory.createOne(Group);
// exports.deleteGroup = factory.deleteOne(School);
// exports.updateGroup = factory.updateOne(School);
