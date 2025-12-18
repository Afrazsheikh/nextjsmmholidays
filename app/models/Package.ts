import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: false, default: 0 },
    duration: { type: String, required: true },
    imageUrl: { type: String, required: false },
    desc: { type: String, required: false },
    rating: { type: String, required: false },
  },
  { timestamps: true }
);

// Avoid model overwrite
export default mongoose.models.Package ||
  mongoose.model("Package", PackageSchema);
