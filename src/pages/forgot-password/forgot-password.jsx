import React from 'react' 
import style from './forgot-password.module.css';

import { Button,  PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';

import {forgotPasswordThunk} from '../../services/actions/password';

import {Link} from 'react-router-dom'

import { Redirect } from 'react-router-dom';


function ForgotPasswordPage (){

    const dispatch = useDispatch();
    const [data, setData] = React.useState({email: ''});

    const forgotPswSuccess  = useSelector((store) => store.login.forgotPswSuccess);

    function handleChange(e){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();

        console.log("forgotPasswordThunk", data);
        dispatch(forgotPasswordThunk(data));
    }

    console.log('forgotPswSuccess', forgotPswSuccess);

    if (forgotPswSuccess) {
        return (
          <Redirect to="/reset-password" />
        )
      }

    return (
        <div className={style.content}>

            <form onSubmit={handleSubmit} className={style.form}>
                <p className="text text_type_main-default">Восстановление пароля</p>
                <Input onChange={handleChange} name={'email'} placeholder={'укажите e-mail'} value={data.email}/>              
                <Button type="primary" size="medium"  onClick={handleSubmit}>Восстановить</Button>
            </form>

            <div className={style.row}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link className="text text_type_main-default" to="/login">Войти</Link>
            </div>


        </div> 
    )
}

export default ForgotPasswordPage;