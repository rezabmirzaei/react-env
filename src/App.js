require('dotenv').config()

export default function App() {
  return (
    <div className='ml-5 mt-4'>
      <p>{process.env.REACT_APP_AUTH_DOMAIN}</p>
    </div>
  );
}
