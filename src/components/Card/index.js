import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    padding: 0.5em;
    background-color: #fff;
    border-radius: 5px;
`

const Image = styled.img` 
    width: 160px;
    height: 120px;
    border-radius: 5px;
    border: ${props => props.active ? '2px solid #00C884' : 'none'};
`

const Title = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #181818;
    margin-top: 8px;
`

const Subtitle = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #838786;
`

const Price = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;
    color: #00C884;
    padding-top: 6px;
    padding-bottom: 6px;
`


const Card = ({
    title,
    subtitle,
    price,
    url,
    onSelect
}) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        if(onSelect) {
            onSelect()
        }
        setActive(!active)
    }

    return (
        <>
            <Container onClick={() => handleClick()}>
                {url ?
                    <Image
                        src={url}
                        alt={title || ''}
                        width={160}
                        height={120}
                        active={active}
                    />
                    :
                    <Image
                        src={url}
                        alt={title || ''}
                        width={160}
                        height={120}
                        active={active}
                    />
                }

                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Price>{price}</Price>
            </Container>
        </>
    )
}

export default Card
