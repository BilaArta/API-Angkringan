import mongoose from 'mongoose';

type TInput = {
  dbURI: string;
}
export default ({dbURI}: TInput) => {
  
  const connect = () => {
    mongoose
      .connect(
        dbURI
      )
      .then(() => {
        return console.info(`Successfully connected to ${dbURI}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};