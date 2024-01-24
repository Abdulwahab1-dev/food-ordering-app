import mongoose from "mongoose";
import { User } from "../../models/User";

export async function POST(req) {
    const body = await req.json();
    if (mongoose.connection.readyState !== 1) {
        try {
            await mongoose.connect("mongodb+srv://FoodWebApp:70BWLwNwtM3u3Rcz@foodwebapp.q3niq0p.mongodb.net/")
            // await mongoose.connect(process.env.MONGO_URL)
            console.log("Connected to the database");
        } catch (error) {
            console.error("Error connecting to the database:", error.message);
            return Response.json({ error: "Failed to connect to the database" });
        }
    }

    const createdUser = await User.create(body);
    return Response.json(createdUser);
}
