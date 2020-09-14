import React from 'react';
import { Container, Navbar, Form, FormControl, Row } from 'react-bootstrap';
import { fetchTutorials, fetchTutorialByDescription } from '../Services/TutorialService';
import TutorialItem from '../Home/TutorialItem';
import './Tutorial.css'

const Tutorial = () => {
    const [tutorials, setTutorials] = React.useState([]);
    const [search, setSearch] = React.useState([]);

    React.useEffect(() => {
        fetchTutorials().then(data => {
            setTutorials(data);
        })
    }, [])
    const onSearch = React.useCallback((evt) => {
        evt.preventDefault();
        fetchTutorialByDescription(search).then(data => {
            setTutorials(data);
        })
    });
    const onChangeSearchInput = React.useCallback((evt) => {
        setSearch(evt.target.value);
    });

    return (<Container  fluid>
        <Row>
            <Navbar className="navbar" variant="dark" bg="dark">
                <Navbar.Brand>Tutoriales</Navbar.Brand>
            </Navbar>
        </Row>
        <Form onSubmit={onSearch}>
            <FormControl onChange={onChangeSearchInput} type="text" placeholder="Buscar por título" className=" mr-sm-2" />
            <ul>
                {tutorials.map(t => 
                <li>
                   <TutorialItem data={t} />
                </li>)
                }
            </ul>
        </Form>


    </Container>);
}
export default Tutorial;