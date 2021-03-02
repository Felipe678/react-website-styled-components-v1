import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../globalStyles'
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLink,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights,
    SocialIcon
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive memberships to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Carrers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Carrers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                    
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Carrers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Carrers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href={'https://www.youtube.com/?gl=BR&tab=w1'} target="_blank" aria-label="Youtube" rel="noopenernoreferrer">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons> 
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
