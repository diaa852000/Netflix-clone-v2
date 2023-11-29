import jumboData from '../fixtures/jumbo.json'
import { Jumbotron } from "../components/landingPage"

export const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Titel>{item.title}</Jumbotron.Titel>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <div className="relative overflow-hidden">
              <Jumbotron.Image className="mix-blend-lighter" src={item.image} alt={item.alt} />
              <Jumbotron.Video autoPlay loop muted className={`absolute w-full z-[-1] 
                ${item.id === 3 ? 'last-video top-[35%] left-[50%] w-[30%] h-2/5 md:w-[60%] md:h-2/3 -translate-x-[50%] -translate-y-[50%]' : 'top-0 left-0'}`}>
                <source src={item.video} type={item.type} />
              </Jumbotron.Video>
            </div>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}

export default JumbotronContainer;
