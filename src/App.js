export default function App() {
  return (
    <div className='ml-5 mt-4'>
      <h4>Environment testing</h4>
      <p>NODE_ENV: {process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_FIREBASE_AUTHDOMAIN}</p>
      <p>{process.env.REACT_APP_BACKEND_URI}</p>
    </div>
  );
}
