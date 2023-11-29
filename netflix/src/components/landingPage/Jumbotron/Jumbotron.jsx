import {Container, Pane, Title, SubTitle, Image, Inner, Video, Item } from './JumbotronStyled'

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}


Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Titel = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}

Jumbotron.Video = function JumbotronVideo({ children, ...restProps }) {
  return <Video autoPlay loop muted {...restProps}> {children} </Video>
}


export default Jumbotron; 