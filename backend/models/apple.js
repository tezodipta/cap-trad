import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    date: Date,
    Open: Number,
    High: Number,
    Low: Number,
    Close: Number,
    Volume: Number,
    Tomorrow: Number,
    Target: Number,
});

const apple = mongoose.model("apples", DataSchema);

export default apple;
