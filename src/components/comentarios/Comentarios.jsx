import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './Comentarios.module.css';

const Comentarios = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://66672edfa2f8516ff7a6a1e1.mockapi.io/coments')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Debug: Check fetched data
                setComments(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const chunkedComments = [];
    for (let i = 0; i < comments.length; i += 2) {
        chunkedComments.push(comments.slice(i, i + 2));
    }

    if (comments.length === 0) {
        return <div>Loading...</div>; // Show a loading state
    }

    return (
        <div className={style.container}>
            <div className={style.divTitulo}>
                <h1>Comentários</h1>
            </div>
            <div id={style.areaComentarios}>
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop useKeyboardArrows className={style["carrousel"]}>
                    {chunkedComments.map((chunk, index) => (
                        <div key={index} className={style.slide}>
                            {chunk.map(comment => (
                                <div key={comment.id} className={style['review-card']}>
                                    <div className={style['review-header']}>
                                        <div className={style['avatar']}>
                                            <img src={comment.avatar} alt={`${comment.name}'s avatar`} />
                                        </div>
                                        <div className={style['name']}>{comment.name}</div>
                                    </div>
                                    <div className={style['review-body']}>
                                        <p>{comment.desc}</p>
                                    </div>
                                    <div className={style['review-footer']}>
                                        <span>Avaliação:</span> <span className={style['rating']}>{comment.avaliacao}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Comentarios;
