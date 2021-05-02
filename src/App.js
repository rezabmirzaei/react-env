require('dotenv').config()

export default function App() {
  return (
    <div className='m-4'>
      <p><small>proecss.env.NODE_ENV: <b>{process.env.NODE_ENV}</b></small></p>
      <p><small>process.env.REACT_APP_NOT_SECRET_CODE (user env. var): <b>{process.env.REACT_APP_NOT_SECRET_CODE}</b></small></p>
      <p><small>process.env.ENV_VAR_KEY (.env file var): <b>{process.env.ENV_VAR_KEY}</b></small></p>
    </div>
  );
}
