import React from 'react';
import './movieContent.css';

function MovieContent() {
    return (
        <div className="content active">
            <img src="" alt="Movie Title" className="movie-title" />
            <h4>
                <span>Year</span>
                <span>
                    <i>age</i>
                </span>
                <span>lenght</span>
                <span>category</span>
            </h4>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </p>
            <div className="button">Button</div>
        </div>
    );
}

export default MovieContent;
