import React from 'react';
import styled from 'styled-components'


function StartSearch(props) {

    const createImg = () => {
        const img = [];
        for (let i = 1; i <= props.number; i++){
            img.push(<a href='#' key={i}><img src={'https://raw.githubusercontent.com/swwayam/hotstar/main/public/images/'+i+'.webp'} alt='hi' /></a>)
        }
        return img;
    }

    return (
        
        <ContentShow>
            {createImg()}
            {createImg()}
            {createImg()}
            {createImg()}
        </ContentShow>
  );
}

export default StartSearch;

const ContentShow = styled.div`
    img{
        width:50%;
        padding:10px 10px;
        border-radius: 15px;
    }
`