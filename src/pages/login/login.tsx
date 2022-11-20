import React, { FC } from 'react' 
import loginStyle from './login.module.css';

import { Button,  PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../services/hooks';

import {loginThunk} from '../../services/actions/login';

import {Link} from 'react-router-dom'
import { useForm } from '../../utils/hooks/useForm';


const LoginPage: FC = () => {

    const dispatch = useDispatch();
    const {values, handleChange} = useForm({email: '', password: ''});

    const loginFailed = useSelector((store) => !!store.login.loginFailed);

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        dispatch(loginThunk({email: values.email, password: values.password}));
    }

    return (
        <div className={loginStyle.content}>

            <form onSubmit={handleSubmit} className={loginStyle.form}>
                <p className="text text_type_main-default">Вход</p>
                <EmailInput onChange={handleChange} name={'email'}  value={values.email}/>
                <PasswordInput onChange={handleChange} name={'password'}  value={values.password}/>
                <Button type="primary" size="medium" htmlType="submit">Войти</Button>
                {loginFailed && 
                    <p className={`${loginStyle.error} text text_type_main-default`}>Не верный Email или пароль</p>
                }
            </form>

            <div className={loginStyle.row}>
                <p className="text text_type_main-default text_color_inactive">Вы - новый пользователь?</p>
                <Link className="text text_type_main-default" to="/register">Зарегистрироваться</Link>
            </div>

            <div className={loginStyle.row}>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                <Link className="text text_type_main-default" to="/forgot-password">Восстановить пароль</Link>
            </div>

        </div> 
    )
}

export default LoginPage;