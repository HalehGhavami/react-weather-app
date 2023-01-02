import './SearchEngine.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <Form>
          <Form.Group className="mb-3">
            <Form.Control type="search" placeholder="Enter a city ..." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>

    
    </div>
  );
}
