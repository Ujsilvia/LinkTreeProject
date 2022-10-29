import React from 'react'

import uju from '../images/uju.jpeg'
import mobile from '../images/mobileshare.svg'
import web from '../images/webshare.svg'
import { ButtonStyle, ProfileStyle, ProfileTextStyle, SlackStyle } from './ProfileStyle.js'

function Profile() {
  return (
    <div>
    <ProfileStyle>
        <ButtonStyle>
        <img src={mobile} alt="mobile" id='mobile' />
        <img src={web} alt="web" id='web' />
        </ButtonStyle>
        <img src={uju} alt="myPics" id='profile__img' />
        <ProfileTextStyle id = 'twitter'>Ujsilvia</ProfileTextStyle>
    </ProfileStyle>
    <SlackStyle id='slack'>@Uj_silvia</SlackStyle>

    </div>
  )
}

export default Profile
