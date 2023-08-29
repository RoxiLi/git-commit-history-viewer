import app from './app';

const PORT = process.env.PORT || 3000; // Puedes cambiar 3000 al número de puerto que prefieras

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
