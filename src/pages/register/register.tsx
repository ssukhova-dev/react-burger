import React, { FC } from 'react' 
import style from './register.module.css';

import { Button,  PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';

import {registerThunk} from '../../services/actions/register';

import {Link} from 'react-router-dom'


const RegisterPage: FC = () => {

    const dispatch = useDispatch();
    const [data, setData] = React.useState({name: '', email: '', password: ''});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        //@ts-ignore
        dispatch(registerThunk(data));
    }

    return (
        <div className={style.content}>

            <form onSubmit={handleSubmit} className={style.form}>
                <p className="text text_type_main-default">Регистрация</p>
                <Input onChange={handleChange} name={'name'} placeholder={'Имя'} value={data.name}/>
                <EmailInput onChange={handleChange} name={'email'}  value={data.email}/>
                <PasswordInput onChange={handleChange} name={'password'}  value={data.password}/>
                <Button type="primary" size="medium"  htmlType="submit">Зарегистрироваться</Button>
            </form>

            <div className={style.row}>
                <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                <Link className="text text_type_main-default" to="/login">Войти</Link>
            </div>


        </div> 
    )
}

export default RegisterPage;