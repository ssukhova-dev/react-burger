import React, { FC } from 'react' 
import style from './register.module.css';

import { Button,  PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from '../../services/hooks';

import {registerThunk} from '../../services/actions/register';

import {Link} from 'react-router-dom'
import { useForm } from '../../utils/hooks/useForm';


const RegisterPage: FC = () => {

    const dispatch = useDispatch();
    const {values, handleChange} = useForm({name: '', email: '', password: ''});

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        dispatch(registerThunk({name: values.name, email: values.email, password: values.password}));
    }

    return (
        <div className={style.content}>

            <form onSubmit={handleSubmit} className={style.form}>
                <p className="text text_type_main-default">Регистрация</p>
                <Input onChange={handleChange} name={'name'} placeholder={'Имя'} value={values.name}/>
                <EmailInput onChange={handleChange} name={'email'}  value={values.email}/>
                <PasswordInput onChange={handleChange} name={'password'}  value={values.password}/>
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