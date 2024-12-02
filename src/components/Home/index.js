import {MdKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineAudit} from 'react-icons/ai'
import {FaLink} from 'react-icons/fa'
import {ImTree} from 'react-icons/im'
import {CgProfile} from 'react-icons/cg'
import {DiNetbeans} from 'react-icons/di'
import {RiParentFill} from 'react-icons/ri'
import {PiNumberSquareOneLight} from 'react-icons/pi'
import {PiNumberSquareTwoLight} from 'react-icons/pi'
import {VscTools} from 'react-icons/vsc'

import {FiGift} from 'react-icons/fi'

import ProfileSection from '../ProfileSection'
import ConversationSection from '../ConversationSection'
import TemplateSection from '../TemplateSection'

import {
  HomeContainer,
  NavContainer,
  Container,
  SubHomeContainer,
  SubHomeContainer2,
} from './styledComponents'

import './index.css'

import Header from '../Header'

const Home = () => {
  const NavBar = () => (
    <NavContainer>
      <img
        src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733025386/hbe36bpx8wsm7fvbeqef.png"
        alt="pic-1"
        className="pic1"
      />
      <Container>
        <img
          src="https://res.cloudinary.com/dg3ufv9bj/image/upload/v1733025565/tp5l3u5ouaxddgjdd0rj.png"
          alt="audit"
          className="pic2"
        />
        <p className="des2">Internal Audit</p>
        <MdKeyboardArrowRight size={20} />
      </Container>
      <Container>
        <AiOutlineAudit size={30} />
        <p className="des2">UAT Testing</p>
      </Container>
      <Container>
        <FaLink size={27} />
        <p className="des2">Queue</p>
      </Container>
      <Container>
        <ImTree size={30} />
        <p className="des2">Workflow</p>
      </Container>
      <Container>
        <CgProfile size={30} />

        <p className="des2">Admin</p>
      </Container>
      <Container>
        <DiNetbeans size={30} />
        <p className="des2">Asset</p>
      </Container>
      <Container>
        <RiParentFill size={30} />
        <p className="des2">Parent</p>
      </Container>
      <Container>
        <PiNumberSquareOneLight size={30} />
        <p className="des2">Option One</p>
      </Container>
      <Container>
        <PiNumberSquareTwoLight size={30} />
        <p className="des2">Option Two</p>
      </Container>
      <Container>
        <VscTools size={30} />
        <p className="des2">All Accessories</p>
      </Container>
      <Container>
        <AiOutlineAudit size={30} />
        <p className="des2">Internal Audit</p>
      </Container>
      <Container>
        <p className="des2">Decorating</p>
      </Container>
      <Container>
        <FiGift size={30} />
        <p className="des2">Presenting</p>
      </Container>
    </NavContainer>
  )
  return (
    <HomeContainer>
      <NavBar />
      <SubHomeContainer>
        <Header />
        <SubHomeContainer2>
          <ProfileSection />
          <ConversationSection />
          <TemplateSection />
        </SubHomeContainer2>
      </SubHomeContainer>
    </HomeContainer>
  )
}

export default Home
