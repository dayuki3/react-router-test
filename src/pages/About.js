import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const { color } = query;

    return (
        <div>
            <h2 style={{color}}>어바웃'ㅁ'/</h2>
            <p>
                안녕하세요. {match.params.name}은 리액트 라우터를 공부하고있습니다~~
            </p>
        </div>
    );
};

export default About;