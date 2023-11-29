import {Container, Row, Column, Footerlink, Title, Text, Break} from './FooterStyled';

const Footer = ({children, ...restProps}) => {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Footer.Row = function FooterRow({children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
};

Footer.Column = function FooterColumn({children, ...restProps}) {
  return <Column {...restProps}>{children}</Column>
};

Footer.FooterLink = function FooterLink({children, ...restProps}) {
  return <Footerlink {...restProps}>{children}</Footerlink>
};

Footer.Title = function FooterTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
};

Footer.Text = function FooterText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
};

Footer.Break = function FooterBreak({children, ...restProps}) {
  return (<Break {...restProps}>{children}</Break>)
}

export default Footer;