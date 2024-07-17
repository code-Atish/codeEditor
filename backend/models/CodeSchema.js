const mongoose = require("mongoose");

const sampleInputOutputSchema = mongoose.Schema({
	input: {
		type: String,
		required: true,
	},
	output: {
		type: String,
		required: true,
	},
});
const codeSchema = mongoose.Schema(
	{
		objective: {
			type: String,
			required: true,
		},
		task: {
			type: String,
			required: true,
		},
		inputFormat: {
			type: String,
			required: true,
		},
		outputFormat: {
			type: String,
			required: true,
		},
		sampleInputOutput: {
			type: [sampleInputOutputSchema],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Code", codeSchema);
