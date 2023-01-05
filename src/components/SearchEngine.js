import './SearchEngine.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

export default function SearchEngine(props) {
  return (
    <div className="SearchEngine">
      <form onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
              onChange={props.updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      {/* <Form>
        <Form.Group className="mb-3">
          <Form.Control type="search" placeholder="Enter a city ..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form> */}
    </div>
  );
}
