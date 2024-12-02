import {MdArrowDropDown} from 'react-icons/md'
import {PiCopyLight} from 'react-icons/pi'
import {IoMdEye} from 'react-icons/io'
import {IoSend} from 'react-icons/io5'
import {CiCirclePlus} from 'react-icons/ci'
import {TbPinned} from 'react-icons/tb'

import {
  TemplateSectionContainer,
  CardContainer1,
  ActionLauncerContainer,
  FavoriteContainer,
} from './styledComponents'

import './index.css'

const TemplateSection = () => {
  const GreetingSection = () => (
    <div className="greetingsContainer">
      <div className="firstContainer1">
        <h1 className="head3">Ask Catura</h1>
        <div className="sub1">
          <h1 className="media2">WhatsApp</h1>
          <MdArrowDropDown size={30} color="#0F8BFD" />
        </div>
        <div className="sub1">
          <MdOutlineEmail size={20} />
          <h1 className="media2">Greetings</h1>
          <MdArrowDropDown size={30} color="#0F8BFD" />
        </div>
      </div>
      <hr className="hrLine" />
      <CardContainer1>
        <p className="greet">Greeting Template</p>
        <div className="preview-container">
          <p className="copy">
            <PiCopyLight />
            Copy to Send
          </p>
          <p className="preview">
            <IoMdEye />
            Preview
          </p>
        </div>
      </CardContainer1>
      <div className="btnsContainer">
        <input
          type="text"
          placeholder="Type a Message..."
          className="inputEl"
        />
        <button type="button" className="btn11">
          ::
          <IoSend />
        </button>
      </div>
    </div>
  )

  const ActionLauncer = () => (
    <ActionLauncerContainer>
      <h1 className="head5">Action Launcher</h1>
      <hr className="hrLine" />
      <input type="text" className="inputEl2" placeholder="Search Actions" />
      <div className="actionsContainer">
        <button type="button" className="btn12">
          <CiCirclePlus />
          Add Action
        </button>
        <button type="button" className="btn13">
          Fee Reversal
        </button>
        <button type="button" className="btn13">
          Fee Reversal
        </button>
        <button type="button" className="btn13">
          Address Update
        </button>
      </div>
    </ActionLauncerContainer>
  )

  const FavoriteSection = () => (
    <FavoriteContainer>
      <div className="fav-container">
        <TbPinned size={40} color="blue" />
        <h1 className="head6">Case Favorite</h1>
      </div>
      <hr className="hrLine" />
      <p className="desc5">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt{' '}
      </p>
      <p className="desc5">Photo</p>
      <p className="desc5">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt{' '}
      </p>
    </FavoriteContainer>
  )

  return (
    <TemplateSectionContainer>
      <GreetingSection />
      <ActionLauncer />
      <FavoriteSection />
    </TemplateSectionContainer>
  )
}

export default TemplateSection
