import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import { CCard, CCardBody,CCardText, CCardImage,CCol,CRow,CCardTitle } from '@coreui/react'

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/hr-handshaking.webp'
              text='Talentfleet provides our clients with services to
              identify and fine-tune their hiring requirements, as
              well as to recruit the best talent. From the beginning
              to the end of the hiring process, our team offers you
              personalized guidance.
              Using our 1to1 approach to understanding the critical
              needs of CFOs and CHROs, we help them identify the best
              finance talent with our expertise.'
              label='Placements'
              path='/services'
            />
            <CardItem
              src='images/selecting-people.webp'
              text='At Esar Solutions we make sure your organization is backed by the
              right employees at the right time even for short term projects & work.
              Our temporary staffing solution is an on-demand service that
              ensures reduced hiring cost, greater flexibility, selective & competent
              hiring as and when required by your organization'
              label='Temp Staffing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Picture11.webp'
              text='As long-term staffing experts for finding the right amount of talents,
              we handle the entire process for our Clients, from identifying the need
              for long-term staffing to recruiting, to coordinating HR matters, to
              ultimately transferring talent to our Clients.
              When you rely on the expertise of our staffing company, you can
              scale up your workforce easily and flexibly. Our service provides you
              with the flexibility you need to meet your requirements.'
              label='Long Term Staffing'
              path='/services'
            />
            <CardItem
              src='images/cropped-colleagues-generating-business-ideas.webp'
              text='We are experts in handling HR process matters with the highest
              commitment to process quality at Esar Solutions. In addition to
              helping you understand your business needs from a long-term
              perspective, we support you in building a strong HR function that
              supports the business strategy through supporting documentation
              and formats.
              Expert services are provided to our clients using our research and
              knowledge. We take pride in our tailored approach, expert knowhow, and excellent interaction with clients.'
              label='HR consulting'
              path='/products'
            />
            <CardItem
              src='images/close-up-businesswoman-pointing-digital-tablet.webp'
              text='Our clients benefit from some of the most innovative solutions
              available on the market. HR as a service and payroll is outsourced to
              reduce costs and help manage immediate service delivery.
              By utilizing our HR Outsourcing Service, we can give a clear
              understanding of what needs to be done and where to implement
              the new services in your organization.'
              label='HR Outsourcing'
              path='/sign-up'
            />
            {/* <CCard className="mb-3" style={{ maxWidth: '540px' }}>
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage src="/images/react400.jpg" />
    </CCol>
    <CCol md={8}>
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
        <CCardText>
          <small className="text-medium-emphasis">Last updated 3 mins ago</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
