import React, { FC } from 'react' 
import style from './forgot-password.module.css';

import { Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../services/hooks';

import {forgotPasswordThunk} from '../../services/actions/password';

import {Link} from 'react-router-dom'

import { Redirect } from 'react-router-dom';
import { useForm } from '../../utils/hooks/useForm';


const ForgotPasswordPage: FC = () => {

    const dispatch = useDispatch();
    const forgotPswSuccess  = useSelector((store) => store.login.forgotPswSuccess);
    const {values, handleChange} = useForm({email: ''});

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        dispatch(forgotPasswordThunk({email: values.email}));
    }

    if (forgotPswSuccess) {
        return (
          <Redirect to="/reset-password" />
        )
      }

    return (
        <div className={style.content}>

            <form onSubmit={handleSubmit} className={style.form}>
                <p className="text text_type_main-default">Восстановление пароля</p>
                <Input onChange={handleChange} name={'email'} placeholder={'укажите e-mail'} value={values.email}/>              
                <Button type="primary" size="medium" htmlType="submit">Восстановить</Button>
            </form>

            <div className={style.row}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link className="text text_type_main-default" to="/login">Войти</Link>
            </div>


        </div> 
    )
}

export default ForgotPasswordPage;