import {GrLocation} from 'react-icons/gr'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FiPlusCircle} from 'react-icons/fi'

import {ProfileContainer, BoxData} from './styledComponents'

import './index.css'

const ProfileSection = () => (
  <ProfileContainer>
    <div className="profile-container">
      <h1 className="profile-head">CB</h1>
      <div className="sub-profile-container">
        <h1 className="profile-name">Hannibal Smith</h1>
        <div className="address-container">
          <GrLocation size={30} />
          <p className="address">1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>
    </div>
    <BoxData>
      <div className="id-container">
        <p className="id">Customer ID</p>
        <div className="number-container">
          <p className="number">12345</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <hr className="hrLine" />
      <div className="id-container">
        <p className="id">Email Address</p>
        <div className="number-container">
          <p className="number">rachel@sample.com</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <hr className="hrLine" />
      <div className="id-container">
        <p className="id">Phone Number</p>
        <div className="number-container">
          <p className="number">8051298905</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>

      <button type="button" className="btn5">
        <FiPlusCircle />
        <span>Add</span>
      </button>
    </BoxData>
    <BoxData>
      <div className="id-container">
        <p className="id">Loyalty Tier</p>
        <div className="number-container">
          <p className="number">Silver</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <hr className="hrLine" />
      <div className="id-container">
        <p className="id">Segment</p>
        <div className="number-container">
          <p className="number">Sleepy Customer</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <button type="button" className="btn5">
        <FiPlusCircle />
        <span>Add</span>
      </button>
    </BoxData>

    <BoxData>
      <div className="id-container">
        <p className="id">Lifetime Value</p>
        <div className="number-container">
          <p className="number">$ 1M</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <hr className="hrLine" />
      <div className="id-container">
        <p className="id">Propensity to Purchase</p>
        <div className="number-container">
          <p className="number clr">75%</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <button type="button" className="btn5">
        <FiPlusCircle />
        <span>Add</span>
      </button>
    </BoxData>
    <BoxData>
      <div className="id-container">
        <p className="id">Engagement Score</p>
        <div className="number-container">
          <BiSolidCircleThreeQuarter className="clr2" size={25} />
          <p className="number clr2">80%</p>
          <BsThreeDotsVertical size={25} />
        </div>
      </div>
      <button type="button" className="btn5">
        <FiPlusCircle />
        <span>Add</span>
      </button>
    </BoxData>
    <button type="button" className="btn5 btn6">
      Assign other Agent
    </button>
    <button type="button" className="btn5 btn7">
      Add New Widget
    </button>
  </ProfileContainer>
)

export default ProfileSection
