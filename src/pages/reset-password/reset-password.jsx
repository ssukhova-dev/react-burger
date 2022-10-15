import React from 'react' 
import style from './reset-password.module.css';

import { Button, Logo, PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';

import {loginThunk} from '../../services/actions/login';

import {Link} from 'react-router-dom'


function ResetPasswordPage (){

    const dispatch = useDispatch();
    const [data, setData] = React.useState({code: '', password: ''});

    function handleChange(e){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(loginThunk(data));
    }

    return (
        <div className={style.content}>

            <Logo  />

            <form onSubmit={handleSubmit} className={style.form}>
                <p className="text text_type_main-default">Восстановление пароля</p>
                <PasswordInput onChange={handleChange} name={'password'} placeholder={'Введите новый пароль'} value={data.password}/>  
                <Input onChange={handleChange} name={'code'} placeholder={'Введите код из письма'} value={data.code}/>              
                <Button type="primary" size="medium"  onClick={handleSubmit}>Восстановить</Button>
            </form>

            <div className={style.row}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link className="text text_type_main-default" to="/login">Войти</Link>
            </div>



        </div> 
    )
}

export default ResetPasswordPage;