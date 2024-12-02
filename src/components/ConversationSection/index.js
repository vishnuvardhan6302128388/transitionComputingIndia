import {IoMdClose} from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
import {BsThreeDots} from 'react-icons/bs'
import {IoMdSend} from 'react-icons/io'
import {LuLink} from 'react-icons/lu'

import {
  ConversationContainer,
  TopContainer,
  Content,
  SubContent,
} from './styledComponents'

import './index.css'

const ConversationSection = () => {
  const TopSection = () => (
    <TopContainer>
      <div className="topcontainer">
        <h1 className="option">Conversation</h1>
      </div>
      <div className="topcontainer">
        <h1 className="option">Address Update</h1>
        <IoMdClose size={15} />
      </div>
      <div className="topcontainer">
        <h1 className="option">Fee Reversal</h1>
        <IoMdClose size={15} />
      </div>
      <div className="topcontainer">
        <h1 className="option">Retail Onboarding</h1>
        <IoMdClose size={15} />
      </div>
      <button type="button" className="btn8">
        Escalate
      </button>
    </TopContainer>
  )

  const ContentSection = () => (
    <Content>
      <div className="contentContainer">
        <h1 className="contentHeader">Conversation</h1>
        <h1 className="contentHeader">Attachment</h1>
      </div>
      <hr className="hrLine" />

      <SubContent>
        <img
          src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733102813/eqfpmxvoqla4lcsendek.png"
          alt="time-line"
        />
        <div className="chatContainer">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
            aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
          </p>
          <div className="name-container2">
            <p className="cb">CB</p>
            <div className="profile-container2">
              <h1 className="namecb">Rachel Adams</h1>
              <p className="time">
                9:08 PM Received By WhatsApp <TiTick size={40} color="green" />
              </p>
            </div>
            <BsThreeDots className="dots" size={20} />
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
            aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
            Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum.
            Molestie nam morbi id arcu volutpat arcu.
          </p>

          <div className="name-container2">
            <p className="cb">HK</p>
            <div className="profile-container2">
              <h1 className="namecb">You</h1>
              <p className="time2">
                27Jul, 2024 9:08 PM Sent By WhatsApp{' '}
                <TiTick size={40} color="green" />
              </p>
            </div>
            <BsThreeDots className="dots" size={20} />
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
            aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
            Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum.
            Molestie nam morbi id arcu volutpat arcu.
          </p>
          <hr className="hrLine" />
          <div className="inputContainer">
            <div className="radiobox-container">
              <input type="checkbox" id="sms" />
              <label htmlFor="sms" className="label">
                SMS
              </label>
              <input type="checkbox" id="whatsapp" />
              <label htmlFor="whatsapp" className="label">
                WhatsApp
              </label>
              <input type="checkbox" id="email" />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
            <div className="message-container">
              <input
                type="text"
                placeholder="Type a Message..."
                className="inputEl"
              />
              <LuLink className="media" size={30} />
              <button type="button" className="btn10">
                <IoMdSend size={30} />
                Send
              </button>
            </div>
          </div>
        </div>
      </SubContent>
    </Content>
  )

  return (
    <ConversationContainer>
      <TopSection />
      <ContentSection />
    </ConversationContainer>
  )
}

export default ConversationSection
