// models/Settings.ts
import mongoose, { Schema, model, models } from "mongoose";

const settingsSchema = new Schema(
  {
    siteName: { type: String, default: "MMholidays" },
    logoUrl: { type: String, default: "" },
    backgroundImageUrl: { type: String, default: "" },
    heroText: { type: String, default: "" },
    heroSubText: { type: String, default: "" },
  },
  { timestamps: true }
);

const Settings = models.Settings || model("Settings", settingsSchema);
export default Settings;
