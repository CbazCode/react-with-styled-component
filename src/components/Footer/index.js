import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to = "/signin"> How it works</FooterLink>
                            <FooterLink to = "/signin"> Testimonials</FooterLink>
                            <FooterLink to = "/signin"> Careers</FooterLink>
                            <FooterLink to = "/signin"> Investors</FooterLink>
                            <FooterLink to = "/signin"> Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to = "/signin"> Submit Video</FooterLink>
                            <FooterLink to = "/signin"> Ambassadors</FooterLink>
                            <FooterLink to = "/signin"> Agency</FooterLink>
                            <FooterLink to = "/signin"> Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Constact us</FooterLinkTitle>
                            <FooterLink to = "/signin"> Contact</FooterLink>
                            <FooterLink to = "/signin"> Support</FooterLink>
                            <FooterLink to = "/signin"> Destionations</FooterLink>
                            <FooterLink to = "/signin"> Sponsorships</FooterLink>
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to = "/signin">Instagram</FooterLink>
                            <FooterLink to = "/signin"> Facebook</FooterLink>
                            <FooterLink to = "/signin"> Youtube</FooterLink>
                            <FooterLink to = "/signin"> Twitter</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}
