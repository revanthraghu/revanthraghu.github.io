import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.section`
 border-top: 1px solid black;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 line-height: 1.7rem;
 padding: 0px;
 background: #252934;
 h1 {
  font-size: 33px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
   Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  margin: 15px 0px 15px 0px;
 }

 h2 {
  font-size: 19px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
   Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
 }

 p {
  max-width: 550px;
  text-align: center;
  color: white;
  font-family: 'Roboto';
  font-size: 18px;
 }
`;

const ContactWrapper = styled.div`
 display: flex;
 width: 100%;
 padding: 30px 0px;
 justify-content: center;
 align-items: center;
 color: white;
 flex-direction: row;
 max-width: 700px;
 min-width: 300px;
 flex-wrap: wrap;

 div {
  margin-right: 20px;
  margin-left: 20px;
  font-family: 'sans-serif';
  font-size: 18px;
 }

 div > i {
  color: white;
  margin-right: 15px;
 }
`;

function Contact() {
 return (
  <MainWrapper id="contact">
   <ContactWrapper>
    <div>
     <i className="fas fa-map-marker-alt"></i>
     Bangalore, India
    </div>
    <div>
     <i className="fas fa-phone-alt"></i>
     +91 914 811 5695
    </div>
    <div>
     <i className="fas fa-envelope"></i>
     revabob@gmail.com
    </div>
   </ContactWrapper>
  </MainWrapper>
 );
}

export default Contact;
