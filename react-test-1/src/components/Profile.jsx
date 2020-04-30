import React from 'react';
import './Navbar.module'

const Profile = () => {
    return (
        <div className='content'>
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/3cyalJewn4k4FVN_zoVzKa2mE7veGIMWGqe1KZVgkINOpoc0N9NfDjIHe1ThKIHP84N98NBeDHebFkUmXeUFv2loyWekTetpFw" alt=""/>
        </div>
        <div>
          avatar + description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            view posts
            <div>
              post1
            </div>
            <div>
              post2
            </div>
            <div>
              post3
            </div>
            <div>
              post4
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;