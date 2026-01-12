import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    type: String,
    userAgent: String,
    ip: String,
  },
  { timestamps: true } // 🔑 REQUIRED
);

export default mongoose.models.Analytics ||
  mongoose.model("Analytics", AnalyticsSchema);
