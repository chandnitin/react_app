import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
export default function MainComtainer() {
    return (
        <Fragment>
            <Header/>
            <Container>
                <Content/>
            </Container>
            <Footer key="2"/>
       </Fragment>
    )
}
