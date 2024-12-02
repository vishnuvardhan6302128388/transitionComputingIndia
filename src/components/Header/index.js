import {HiOutlineHome} from 'react-icons/hi'
import {IoSettingsOutline} from 'react-icons/io5'
import {FaArrowRight} from 'react-icons/fa'
import {TiMessages} from 'react-icons/ti'
import {MdKeyboardArrowRight} from 'react-icons/md'

import {
  HeaderContainer,
  FirstButtonContainer,
  SecondButtonContainer,
  ThirdContainer,
  SubHeaderContainer,
  SecondHeaderContainer,
  HeadContainer,
} from './styledComponents'

import './index.css'

const Header = () => {
  const SecondHeader = () => (
    <SecondHeaderContainer>
      <div className="firstOne">
        <h1 className="head2">CB</h1>
        <p className="des1">Cheyenne Bergson</p>
      </div>
      <div className="firstOne">
        <h1 className="head1">CB</h1>
        <p className="des1">Jonathan Higgins</p>
      </div>
      <div className="firstOne">
        <h1 className="head1">CB</h1>
        <p className="des1">Capt. Trunk</p>
      </div>
      <div className="firstOne">
        <h1 className="head1">CB</h1>
        <p className="des1">Hannibal Smi..</p>
      </div>
      <div className="firstOne">
        <h1 className="head1">CB</h1>
        <p className="des1">Capt. Trunk</p>
      </div>
      <div className="firstOne">
        <h1 className="head1">CB</h1>
        <p className="des1">Hannibal Smi..</p>
      </div>
      <div className="firstOne firstTwo">
        <TiMessages size={30} />
        <p className="des1">Messaging</p>
        <MdKeyboardArrowRight size={30} />
      </div>
    </SecondHeaderContainer>
  )
  return (
    <HeadContainer>
      <HeaderContainer>
        <p className="chat">Chat / Feed Chat</p>
        <SubHeaderContainer>
          <FirstButtonContainer>
            <HiOutlineHome size={30} />
            <button type="button" className="btn1">
              Process Owner HOD
            </button>
          </FirstButtonContainer>
          <SecondButtonContainer>
            <button type="button" className="btn2">
              Admin
            </button>
            <p className="chat2">Palak Bansal</p>
            <img
              src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733014471/gduwpfztbnpfhhqe6zdl.png"
              alt="profile"
              width="30px"
            />
          </SecondButtonContainer>
          <ThirdContainer>
            <IoSettingsOutline size={20} />
            <FaArrowRight size={15} />
            <button type="button" className="btn4">
              Logout
            </button>
          </ThirdContainer>
        </SubHeaderContainer>
      </HeaderContainer>
      <SecondHeader />
    </HeadContainer>
  )
}

export default Header
