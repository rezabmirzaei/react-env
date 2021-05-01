function App() {
  return (
    <div>
      <p><small>This application is running in <b>{process.env.NODE_ENV}</b> mode.</small></p>
      <p><small>Env var for testing has value: <b>{process.env.REACT_APP_NOT_SECRET_CODE}</b></small></p>
      {/* <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form> */}
    </div>
  );
}

export default App;
