import React from 'react'
import { Button } from '../Button/ButtonElement'
import { 
    InfoContainer, 
    InfoRow, 
    Heading, 
    TextWrapper, 
    InfoWrapper, 
    Subtitle, 
    TopLine, 
    Column2,
    Column1, 
    BtnWrap, 
    Img, 
    ImgWrap 
} from './InfoElements'

export const InfoSection = ({
    lightBg, 
    id, 
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt
}) => {
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headline}</Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button primary = 'false' dark = 'true'to = 'home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src = {img} alt = {alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}
