import { Footer } from "../components/landingPage"

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Title>Question? Contact us.</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.FooterLink href='#'>FAQ</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Investor Relations</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Ways to Watch</Footer.FooterLink>
                    <Footer.FooterLink href='#'>coporate Information</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Netflix Originals</Footer.FooterLink>
                </Footer.Column>

                <Footer.Column>
                    <Footer.FooterLink href='#'>Help</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Jobs</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Terms of Use</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Contact Us</Footer.FooterLink>
                </Footer.Column>

                <Footer.Column>
                    <Footer.FooterLink href='#'>Account</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Redeem Gift Cars</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Privacy</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Speed Test</Footer.FooterLink>
                </Footer.Column>

                <Footer.Column>
                    <Footer.FooterLink href='#'>Media Center</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Buy Gift Cards</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Cookie Preferences</Footer.FooterLink>
                    <Footer.FooterLink href='#'>Legal Notices</Footer.FooterLink>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}

export default FooterContainer;