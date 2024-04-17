import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());  // JSON 요청 본문을 파싱하기 위한 미들웨어
app.use('/api/users', userRoutes);  // userRoutes를 '/api/users' 경로에 연결

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
