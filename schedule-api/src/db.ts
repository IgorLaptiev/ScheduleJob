import { connect } from 'mongoose';

export async function run(DB_HOST: string): Promise<void> {
  // 4. Connect to MongoDB
  await connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}