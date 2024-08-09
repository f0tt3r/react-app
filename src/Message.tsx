function Message() {
  const name = "";
  if (name) {
    return <h1>Hello {name}!</h1>; // we can use variables directly
  }
  return <h1>Hello Stranger!</h1>;
}

export default Message; // export as default module
