function App() {
  return (
    <div>
      <small>This application is running in <b>{process.env.NODE_ENV}</b> mode.</small>
      {/* <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form> */}
    </div>
  );
}

export default App;
