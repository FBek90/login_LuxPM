import React from 'react'
import {useHistory} from 'react-router-dom'
import {auth} from '../../firebase/firebase'
import './Activity.css'
import Logo from '../../assets/img/gradation.svg'
import Joe from '../../assets/img/joe.jpeg'
import {signOut} from 'firebase/auth'
import {data} from '../../mock/activity'

export default function Login() {
  const history = useHistory()

  async function handleLogout() {
    try {
      await signOut(auth)
      history.push('/')
    } catch {
      alert('로그아웃 실패')
    }
  }

  return (
    <div className="container_activity">
      {/* header */}
      <div className="logout_p">
        <button className="btn_logout" onClick={handleLogout}>
          로그아웃
        </button>
      </div>

      <div className="active_header">
        <div className="image_active">
          <img src={Logo} alt=" Logo" />
        </div>
        <div className="user">
          <img className="user_photo" src={Joe} alt="user" />
          <p className="name">Joe</p>
        </div>
        {/* main */}
      </div>
      <section className="main_activity">
        <h4 className="text-start mb-4 activity_title">활동</h4>
        <h6 className="text-start mb-4 activ_data">February 7, 2021</h6>
        {data.map(({id, comp_img, title, price, time, icon, action}) => {
          return (
            <div className="activity_info" key={id}>
              <div className="company_logo">
                <img src={comp_img} alt="logo" className="company" />
              </div>
              <div className="activity_details">
                <div className="investment">
                  <div className="act_title">{title}</div>
                  <div className="act_price">{price}</div>
                </div>
                <div className="time_d">
                  <div className="act_icon">
                    {' '}
                    {icon} <span>{action}</span>
                  </div>
                  <div className="timer">{time}</div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
