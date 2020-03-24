import React, { Component } from "react";
import Book from "../components/Book";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        this.getSavedBooks();
    }
    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res =>
            this.setState({
                books: res.data
            })
        )
        .catch(err => console.log(err));
    };
    handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    };
    render() {
        return (
            <Container>

                <Row>
                    <Col size="md-15">
                        <Jumbotron>
                            <h1 className="text-absolute">
                                <strong> Google Books Search</strong>
                            </h1>
                            <h2 className="text-absolute"> Search for more books and save them! </h2>
                        </Jumbotron>
                    </Col>
                </Row>
                
                <Row>
                    <Col size="md-15">
                        <Card title="Saved Books" icon="download">
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <Book
                                            key= {book._id}
                                            title= {book.title}
                                            subtitle={book.subtitle}
                                            link={book.link}
                                            authors={book.authors.join(", ")}
                                            description={book.description}
                                            image={book.image}
                                            Button={() => (
                                                <button
                                                onClick={() => this.handleBookDelete(book._id)}
                                                className="btn btn-danger ml-2"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className="text-absolute"> No Saved Books </h2>
                            )}
                        </Card>
                    </Col>
                </Row>
              <Footer />
            </Container>
        );
    }
}

export default Saved;