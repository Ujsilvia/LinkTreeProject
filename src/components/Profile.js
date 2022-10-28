import React from 'react'

import uju from '../images/uju.jpeg'
import { ProfileStyle, ProfileTextStyle } from './ProfileStyle'

function Profile() {
  return (

    <ProfileStyle>
        <img src={uju} alt="myPics" id='profile__img' />
        <ProfileTextStyle id = 'twitter'>@Uj_silvia</ProfileTextStyle>
    </ProfileStyle>
    
  )
}

export default Profile
