import React, { Component } from 'react';
import Box from './children';

export default class ArticleBox extends Component {
    render() {
        let { title, author, date, children } = this.props;
        return (
            <section>
                <h2>
                    {title}
                </h2>
                <p>
                    <em>
                        Escrito por {author}
                    </em>
                </p>
                <Box>{date}</Box>
                <article>{children}</article>
            </section>
        )
    }
}