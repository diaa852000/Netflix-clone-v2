import { Accordion, OptForm } from "../components/landingPage";
import faqsData from '../fixtures/faqs.json';

export const AccordionContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <div className="mx-auto mt-2">
                <OptForm text={'Try Now'} ClassName={'mb-2'}/>
                <p className="text-base font-normal text-white text-center">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
            </div>
        </Accordion>
    )
}

export default AccordionContainer