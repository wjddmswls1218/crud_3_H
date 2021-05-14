import mongoose from "mongoose";

const Schema = mongoose.Schema;

const crud2 = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    isDelete: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`crud2`, crud2, `crud2`);
