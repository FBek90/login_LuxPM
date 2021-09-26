import React, {useState} from 'react'
import './ForgotPW.css'
import {auth} from '../../firebase/firebase'
import Logo from '../../assets/img/gradation.svg'
import {sendPasswordResetEmail} from 'firebase/auth'
import {Link, useHistory} from 'react-router-dom'

export default function ForgotPW() {
  const [email, setEmail] = useState('')
  const history = useHistory()

  async function resetPw() {
    try {
      await sendPasswordResetEmail(auth, email)
      history.push('/')
      alert(
        '이메일을 확인해주세요. 비밀번호를 재설정하려면 이메일에 있는 링크를 따라가세요.'
      )
      setEmail('')
    } catch {
      alert('비밀번호 재설정 실패')
      setEmail('')
    }
  }

  return (
    <div className="container">
      <div className="image">
        <img src={Logo} alt=" Logo" />
      </div>
      <h2 className="text-center mb-4 form_title">
        비밀번호를 잊어 버려셨나요?
      </h2>
      <h6 className="text-center mb-4 text_def">
        귀하의 계정과 연결된 이메일을 입력하십시오
      </h6>
      <div className="form_forgot">
        <div id="wrapper_forgot">
          <label className="label">이메일</label>
          <input
            id="icon_forgot"
            className="input_forgot"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="sabahat@gmail.com"
            required
          />
        </div>
        <button disabled={!email} className="btn_forgot" onClick={resetPw}>
          이메일 제출
        </button>
        <div className="w-100 text-center mt-2 bottom_text">
          계정이 필요합니까? <Link to="/signup">가입하기</Link>
        </div>
      </div>
    </div>
  )
}
