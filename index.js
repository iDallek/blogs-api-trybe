const express = require('express');

const userRouter = require('./src/routes/userRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const categoriesRouter = require('./src/routes/categoryRoutes');
const postRouter = require('./src/routes/postRoutes');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});