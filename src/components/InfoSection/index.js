import React from 'react'
import { Button } from 'react-scroll'
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

export const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to = 'home'/>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}
