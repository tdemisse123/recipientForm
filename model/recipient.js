const mongoose = require("mongoose");

const RecipientSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      //required: true,
    },
    LastName: {
      type: String,
      //required: true,
    },
    Email: {
      type: String,
      //required: true,
    },
    City: {
      type: String,
      //required: true,
    },
    State: {
      type: String,
      //required: true,
    },
    Country: {
      type: String,
      //required: true,
    },
    PhoneNumber: {
        type: Number,
        //required: true,
    },
    MemberId: {
        type: Number,
        //required: true,
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("Recipient", RecipientSchema);
