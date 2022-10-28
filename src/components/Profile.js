import React from 'react'

import uju from '../images/uju.jpeg'
import { ProfileStyle, ProfileTextStyle, SlackStyle } from './ProfileStyle.js'

function Profile() {
  return (
    <div>
    <ProfileStyle>
        <img src={uju} alt="myPics" id='profile__img' />
        <ProfileTextStyle id = 'twitter'>@Uj_silvia</ProfileTextStyle>
    </ProfileStyle>
    <SlackStyle id='slack'>@Uj_silvia</SlackStyle>

    </div>
  )
}

export default Profile
