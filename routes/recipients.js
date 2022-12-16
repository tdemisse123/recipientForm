const router = require("express").Router();
const Recipient = require("../model/Recipient");

/* ADD RECIPIENT */

router.post("/addrecipient", async (req, res) => {
  const newRecipient = new Recipient({
   FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    City: req.body.City,
    State: req.body.State,
    Country: req.body.Country,
    PhoneNumber: req.body.PhoneNumber,
    MemberId: req.body.MemberId,
  });
  try {
    const savedRecipient = await newRecipient.save();
    res.status(200).json(savedRecipient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

/* GET RECIPIENT */

router.get("/allrecipient", async (req, res) => {
  try {
    const result = await Recipient.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* UPDATE RECIPIENT */

// router.put("/:id", async (req, res) => {
//   try {
//     const updateRecipient = await Recipient.findOneAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updateRecipient);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


