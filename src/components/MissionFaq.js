import React, { useState  } from 'react'
import Mission from "./Mission";
import Faq from "./Faq";
import Title from './Title';

function MissionFaq () {
    const [faqs, setfaqs] = useState([
            {
                question: 'How many programmers does it take to screw in a lightbulb?',
                answer: 'None. We don\'t address hardware issues.',
                open: true
            },
            {
                question: 'Who is the most awesome person?',
                answer: 'You. The Viewer.',
                open: false
            },
            {
                question: 'How many questions does it take to make a successful FAQ Page?',
                answer: 'This many.',
                open: false
            }
        ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }

        return (
            <section className="Fondmission">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <Mission />
                        </div>
                        <div className="col-md-4">
                        <Title title="OUR FAQs"/>
                            <div className="faqs">
                                {faqs.map((faq, i) => (
                                <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>
        )
}
export default MissionFaq;