import React from 'react' 
import style from './register.module.css';

import { Button, Logo, PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';

import {loginThunk} from '../../services/actions/user';

import {Link} from 'react-router-dom'


function RegisterPage (){

    const dispatch = useDispatch();
    const [data, setData] = React.useState({name: '', email: '', password: ''});

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
                <p className="text text_type_main-default">Регистрация</p>
                <Input onChange={handleChange} name={'name'} placeholder={'Имя'}/>
                <EmailInput onChange={handleChange} name={'email'} />
                <PasswordInput onChange={handleChange} name={'password'} />
                <Button type="primary" size="medium"  onClick={handleSubmit}>Зарегистрироваться</Button>
            </form>

            <div className={style.row}>
                <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                <Link className="text text_type_main-default" to="/login">Войти</Link>
            </div>


        </div> 
    )
}

export default RegisterPage;