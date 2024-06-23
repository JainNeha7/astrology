import mongoose from 'mongoose';

export async function connect() {
    try {
        // mongoose.connect(process.env.MONGO_URI);
        mongoose.connect("mongodb+srv://kausleshjst:WgnVZPccTnkRM5Zp@cluster0.tv7xeav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}