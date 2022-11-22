import React, { FC } from 'react' 
import style from './reset-password.module.css';

import { Button, PasswordInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../services/hooks';

import {resetPasswordThunk} from '../../services/actions/password';

import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { useForm } from '../../utils/hooks/useForm';


const ResetPasswordPage: FC = () => {

    const dispatch = useDispatch();
    const {values, handleChange} = useForm({token: '', password: ''});

    const resetPswSuccess = useSelector((store) => store.login.resetPswSuccess);

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        dispatch(resetPasswordThunk({token: values.token, password: values.password}));
    }

    if (resetPswSuccess) {
        return (
          <Redirect to="/login" />
        )
      }

    return (
        <div className={style.content}>

            <form onSubmit={handleSubmit} className={style.form}>
                <p className="text text_type_main-default">Восстановление пароля</p>
                <PasswordInput onChange={handleChange} name={'password'} value={values.password}/>  
                <Input onChange={handleChange} name={'token'} placeholder={'Введите код из письма'} value={values.token}/>              
                <Button type="primary" size="medium"  htmlType="submit">Восстановить</Button>
            </form>

            <div className={style.row}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link className="text text_type_main-default" to="/login">Войти</Link>
            </div>



        </div> 
    )
}

export default ResetPasswordPage;