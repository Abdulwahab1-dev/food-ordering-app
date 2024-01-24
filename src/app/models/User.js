import { Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (pass) => pass?.length >= 5,
        message: "Password must be at least 5 characters",
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const notHashedpassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedpassword, salt);
  // Store hash in your password DB.

//   user.password = hashedPassword;
});

export const User = models?.User || model("User", UserSchema);
