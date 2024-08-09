// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  /*   let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }; */

  return (
    /*     <div>
      { <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> 
      }
    </div> */
    /*     <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div> */
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  ); // <ListGroup /> is simplified version of <ListGroup></ListGroup>
} // A second element will have its own statement

export default App;
