import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  album: { type: String, required: true },
  image: { type: String, required: true },
  file: { type: String, required: true },
  duration: { type: String, required: true },
});

const songModel = mongoose.models.song || mongoose.model("song", songSchema);

export default songModel;
// If the "song" model already exists, it assigns it to the `songModel` variable.
// Otherwise, it creates a new model named "song" using the provided `songSchema` and assigns it to the `songModel` variable.
// This approach ensures that the application uses a single instance of the model throughout its execution,
// avoiding the potential issue of redefining the model multiple times.
// Explanation:
// Checking for `mongoose.models.song` first serves a crucial purpose in maintaining efficiency and preventing errors.
// - Avoids Redefinition: Mongoose models should only be defined once within an application. If you try to redefine
//   a model with the same name, Mongoose will throw an error. By checking `mongoose.models.song` first, the code ensures
//   that the existing model is reused, avoiding the potential issue of redefining the model.
// - Memory Efficiency: Creating a new model instance consumes memory and resources. Reusing an existing model helps in
//   conserving memory and computational resources, which is particularly important in larger applications or when dealing
//   with a high number of models.
// - Consistency: Ensures that the application consistently uses the same model instance throughout its lifecycle. This is
//   important for maintaining the integrity of the application's data and operations, as multiple instances of the same
//   model could lead to unexpected behavior or conflicts.
// - Initialization Order: There might be multiple files or modules in an application that need to access the same model. By
//   checking for the existing model, the code ensures that the model is initialized only once, even if multiple modules require it.
