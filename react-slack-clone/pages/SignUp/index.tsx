import React, { useCallback, useState, VFC } from 'react';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';

const SignUp = () => {
  const [email] = useState('');
  const [nickname] = useState('');
  const [password] = useState('');
  const [passwordCheck] = useState('');
  const onChangeEmail = useCallback(() => {}, []);
  const onChangeNickname = useCallback(() => {}, []);
  const onChangePassword = useCallback(() => {}, []);
  const onChangePasswordCheck = useCallback(() => {}, []);
  const onSubmit = useCallback(() => {}, []);

  return (
    <div id="container">
    <Header>Sleact</Header>
    <Form onSubmit={onSubmit}>
      <Label id="email-label">
        <span>이메일 주소</span>
        <div>
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
        </div>
      </Label>
      <Label id="nickname-label">
        <span>닉네임</span>
        <div>
          <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
        </div>
      </Label>
      <Label id="password-label">
        <span>비밀번호</span>
        <div>
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
        </div>
      </Label>
      <Label id="password-check-label">
        <span>비밀번호 확인</span>
        <div>
          <Input
            type="password"
            id="password-check"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </div>
      </Label>
      <Button type="submit">회원가입</Button>
    </Form>
    <LinkContainer>
    </LinkContainer>
  </div>
  )
}

export default SignUp;