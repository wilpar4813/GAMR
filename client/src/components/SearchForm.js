import React, {useState} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import SearchResult from './SearchResult';
import api from '../utils/api';

const SearchForm = (props) => {

  const [query, setQuery] = useState('final fantasy');
  const [results, setResults]=useState([]);

  async function handleSubmit(event) {
    //alert('clicked');
    event.preventDefault();
    // this.getGames();
    api.search(query)
    .then(function(res){
      setResults(res.data);
    })
  }

  async function handleOnChange(event) {
    const { name, value } = event.target;
    setQuery((value));
  }

  return(
    <Container className='py-3'>
    <Row>
    <Col sm='12'>
    <Form>
      <FormGroup>
        <Label for="search">Search</Label>
        <Input
        type="text"
        name="query"

        onChange={handleOnChange}
        id="search"
        placeholder="Search for games" />
      </FormGroup>






      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
    </Col>
    </Row>
    <Row>
    <SearchResult results={results} />
    </Row>
    </Container>
  )
}

export default SearchForm;
