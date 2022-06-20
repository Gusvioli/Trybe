// arquivo Order.js
import React from 'react';

class UserProfile extends React.Component {
  render() {
    const { id, name, email, avatar } = this.props.user;
    return (
      <div>Seu id é {id}, seu nome é {name}, seu e-mail é {email} e seu avatar é <img src={avatar} alt='Avatar' className='tamAvatar' /></div>
    );
  }
}

export default UserProfile;