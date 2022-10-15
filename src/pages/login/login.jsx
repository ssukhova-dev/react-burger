import React from 'react' 
import loginStyle from './login.module.css';

import { Button, Logo, PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';

import {loginThunk} from '../../services/actions/login';

import {Link} from 'react-router-dom'


function LoginPage (){

    const dispatch = useDispatch();
    const [data, setData] = React.useState({email: '', password: ''});

    function handleChange(e){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(loginThunk(data));
    }

    return (
        <div className={loginStyle.content}>

            <Logo  />

            <form onSubmit={handleSubmit} className={loginStyle.form}>
                <p className="text text_type_main-default">Вход</p>
                <EmailInput onChange={handleChange} name={'email'}  value={data.email}/>
                <PasswordInput onChange={handleChange} name={'password'}  value={data.password}/>
                <Button type="primary" size="medium"  onClick={handleSubmit}>Войти</Button>
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