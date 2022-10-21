import React from 'react' 
import style from './reset-password.module.css';

import { Button, PasswordInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';

import {resetPasswordThunk} from '../../services/actions/password';

import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';


function ResetPasswordPage (){

    const dispatch = useDispatch();
    const [data, setData] = React.useState({token: '', password: ''});
    const resetPswSuccess = useSelector(store => store.login.resetPswSuccess);

    function handleChange(e){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(resetPasswordThunk(data));
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
                <PasswordInput onChange={handleChange} name={'password'} placeholder={'Введите новый пароль'} value={data.password}/>  
                <Input onChange={handleChange} name={'token'} placeholder={'Введите код из письма'} value={data.token}/>              
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