import Faq from 'react-faq-component'
import faqInfo from './faq.json'
//import './FaqStyle.css'


const FaqComponent = () => {
  const data = {
    title: faqInfo.title,
    rows: [
      {
        title: faqInfo.questions[0].question,
        content: faqInfo.questions[0].answer
      },
      {
        title: faqInfo.questions[1].question,
        content: faqInfo.questions[1].answer
      },
      {
        title: faqInfo.questions[2].question,
        content: faqInfo.questions[2].answer
      }
    ]
  }

  const styles = {

    bgColor: '#e8e8e8',
    titleTextColor: 'black',
    rowTitleColor: 'Black',
    rowContentColor: 'Black',
    arrowColor: 'Black'


  }

  const config = {
    animate: true,
    arrowIcon: 'V',
    tabFocus: true
  }

  return (
    <>
      <div className='faq-style-wrapper'>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </>
  )
}

export default FaqComponent
