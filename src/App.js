export default function App() {
  return (
    <div className='ml-5 mt-4'>
      <h3>Env. testing</h3>
      <p>{process.env.REACT_APP_FIREBASE_AUTHDOMAIN}</p>
      <p>{process.env.REACT_APP_BACKEND_URI}</p>
    </div>
  );
}
