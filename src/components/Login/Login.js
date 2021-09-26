import React, {useState} from 'react'
import './Login.css'
import Logo from '../../assets/img/gradation.svg'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../../firebase/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

export default function Login() {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function onLogin() {
    // if (email === 'test@luxpmsoft.com' && password === 'test1234!') {
    //   signInWithEmailAndPassword(auth, 'test@luxpmsoft.com', 'test1234!')
    // } else {
    //   alert('로그인 실패')
    // }
    try {
      setError('')
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      history.push('/dashboard')
    } catch {
      alert('로그인 실패')
      setEmail('')
      setPassword('')
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <div className="image">
        <img src={Logo} alt=" Logo" />
      </div>
      <h2 className="text-center mb-4 form_title">로그인</h2>
      <div className="form_login">
        <div id="wrapper_login">
          <label className="label">이메일</label>
          <input
            id="icon_login"
            type="email"
            className="input_login"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="sabahat@gmail.com"
            required
          />
        </div>
        <div id="wrapper_login">
          <label className="label">비밀본호</label>
          <input
            id="icon2_login"
            className="input_login"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="**********"
            required
          />
        </div>
        <div className="forgot_pw">
          <Link to="/forgotPW"> 비밀번호 찾기</Link>
        </div>
        <button
          disabled={!email || !password}
          className="btn_login"
          onClick={onLogin}
        >
          {loading ? '로깅 중입니다...' : '로그인'}
        </button>
      </div>
      <div className="bottom_text_login">
        계정이 없으신가요?
        <Link to="/signup"> 가입하기</Link>
      </div>
    </div>
  )
}
