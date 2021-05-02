export default function App() {
  return (
    <div className='m-4'>
      <p><small>This application is running in <b>{process.env.NODE_ENV}</b> mode.</small></p>
      <p><small>Env var for testing has value: <b>{process.env.REACT_APP_NOT_SECRET_CODE}</b></small></p>
    </div>
  );
}
