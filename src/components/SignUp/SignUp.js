import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './SignUp.css'
import Logo from '../../assets/img/gradation.svg'
import {auth} from '../../firebase/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPw, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function onSignUp() {
    if (password !== confirmPw) {
      alert('비밀번호가 일치하지 않습니다')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    try {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      history.push('/')
    } catch {
      alert('계정 생성 실패')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <div className="image">
        <img src={Logo} alt=" Logo" />
      </div>
      <h2 className="text-center mb-4 form_title">가입하기</h2>

      <div className="form_signup">
        <div id="wrapper_signup">
          <label className="label">이메일</label>
          <input
            id="icon_signup"
            className="input_signup"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="sabahat@gmail.com"
            required
          />
        </div>
        <div id="wrapper_signup">
          <label className="label">비밀본호</label>
          <input
            id="icon2_signup"
            className="input_signup"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="**********"
            required
          />
        </div>
        <div id="wrapper_signup">
          <label className="label">비밀번호 확인</label>
          <input
            id="icon2_signup"
            className="input_signup"
            type="password"
            value={confirmPw}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="**********"
            required
          />
        </div>

        <button
          disabled={!email || !password}
          className="btn_signup"
          onClick={onSignUp}
        >
          {loading ? '가입 중...' : '가입하기'}
        </button>
      </div>
      <div className="bottom_text">
        이미 계정이 있습니까?
        <Link to="/"> 로그인</Link>
      </div>
    </div>
  )
}
