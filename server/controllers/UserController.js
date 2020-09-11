const AddAddress = require("../SchemaModal/UserAddress");
const Cart = require("../SchemaModal/Cart");
const Order = require("../SchemaModal/Order");
const User = require("../SchemaModal/User");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcryptjs");
const config = require("config");
const client =require("twilio")
const jwt = require("jsonwebtoken");







exports.UserRegister= catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body)
  const { name, email, password } = req.body;

  //validation for email & password
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields " });
  }

  //check existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exist" });

    const newUser = new User({
      name,
      email,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 100000 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

exports.Login = catchAsync(async (req, res) => {
  const { number } = req.body;
console.log(req.query.number)
  client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12055095742',
     to: `+${req.query.number}`
   })
  .then(message => res.status(200).json(message));
  
  // const { email, password } = req.body;

  // //validation for email & password
  // if (!email || !password) {
  //   return res.status(400).json({ msg: "please enter all fields " });
  // }

  // //check existing user
  // User.findOne({ email }).then(user => {
  //   console.log(email, password);
  //   if (!user) {
  //     console.log(user);
  //     return res.status(400).json({ msg: "User doesn't exist" });
  //   }

  //   // validate password
  //   bcrypt.compare(password, user.password, function(err, isMatch) {
  //     if (isMatch) {
  //       jwt.sign(
  //         { id: user.id },
  //         config.get("jwtSecret"),
  //         { expiresIn: 100000 },
  //         (err, token) => {
  //           if (err) throw err;

  //           res.json({
  //             token,
  //             user: {
  //               id: user.id,
  //               name: user.name,
  //               email: user.email
  //             }
  //           });
  //         }
  //       );
  //     } else {
  //       return res.status(400).json({ msg: "password is incorrect" });
  //     }
  //   });
  // });
  //   .catch(err => {
  //     console.log(err);
  //     return res.status(400).json({ msg: err });
  //   });
});
exports.Verify = catchAsync(async (req, res) => {
  client
        .verify
        .verificationChecks
        .create({
          to:`+91${req.query.number}`,
          code:req.query.code
        }).then(data=>res.status(200).send(data))
})

exports.Auth=catchAsync(async(req, res,next) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});
 
exports.UpdateAddress=catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body);
  //const vender = await feature.query;
  const Address = await AddAddress.findOneAndUpdate({_id:req.params.id},req.body);
  console.log("update");
  console.log(Address);
  //send response
  res.json(Address);
});


exports.PostAddress = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body);
  //const vender = await feature.query;
  const Address = await AddAddress.create(req.body);
  console.log("lpddddddddddppo");
  console.log(Address);
  //send response
  res.json(Address);
});

exports.GetAddress = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  // console.log(req.body);
  //const vender = await feature.query;
  console.log(req.params.id)
  const Address = await AddAddress.find({UserID:req.params.id});
  console.log("lpddddddddddppo");
  console.log(Address);
  //send response
  res.json(Address);
});

exports.PostCart = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body);
  //const vender = await feature.query;
  if (req.body.days == 3) {
    req.body.price = 70;
  }else if(req.body.days == 6){
    req.body.price=148;
  }else if(req.body.days == 14){
    req.body.price=300;
  }else if(req.body.days == 28){
    req.body.price=500;
  }

  const cart = await Cart.create(req.body);
  console.log("cartttt");
  console.log(cart);
  //send response
  res.json(cart);
});

exports.GetCart = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log("itemsCart");
  //const vender = await feature.query;
  const cart = await Cart.findById(req.params.id);
  console.log("cartttt");
  console.log(cart);
  //send response
  res.json(cart);
});

exports.UpdateCart = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body, "jjijijijij");
  //const vender = await feature.query;
  const cart = await Cart.findOneAndUpdate(req.params.id, req.body);
  console.log("updatecartttt");
  console.log(cart);
  //send response
  res.json(cart);
});

exports.Order=catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body, "jjijijijij");
  //const vender = await feature.query;
  const order = await Order.create(req.body);
  console.log("order");
  console.log(order);
  //send response
  res.json(order);
})

exports.GetOrders=catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body, "jjijijijij");
  //const vender = await feature.query;
  const order = await Order.find({});
  console.log("order");
  console.log(order);
  //send response
  res.json(order);
})



exports.UpdateOrder=catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.params.id)
  console.log(req.body, "jjijijijij");
  //const vender = await feature.query;
  const order = await Order.findOneAndUpdate(req.params.id, req.body);
  console.log("Updateorder");
  console.log(order);
  //send response
  res.json(order);
})