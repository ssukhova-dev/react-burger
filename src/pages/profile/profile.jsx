import React from 'react' 
import style from './profile.module.css';

import { Button, Logo, PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';

import { logoutThunk, isLoggedInSelector } from '../../services/actions/user';

import {NavLink} from 'react-router-dom'

function ProfilePage (){

    const dispatch = useDispatch();

    const [data, setData] = React.useState({name: '', email: '', password: ''});

    function handleChange(e){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(logoutThunk());
    }

    return (
       <section className={style.profile}>
        <nav className={style.nav}>
            <ul className={style.list}>
            <li className={style.item}>
                <NavLink className={`${style.link} text text_type_main-medium text_color_inactive`}
                    activeClassName={style.active}
                    to="/profile">
                    Профиль
                </NavLink>
            </li>
            <li className={style.item}>
                <NavLink  className={`${style.link} text text_type_main-medium text_color_inactive`}
                    activeClassName={style.active}
                    to="/profile/orders">
                    История заказов
                </NavLink>
            </li>
            <li className={style.item}>
                <a href="#" className={`${style.link} text text_type_main-medium text_color_inactive`}
                    onClick={(e) => {e.preventDefault(); dispatch(logoutThunk())} }> Выход </a>
            </li>
            </ul>
            <p className={`${style.text} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете
            изменить свои персональные данные</p>
        </nav>

        <form onSubmit={handleSubmit} className={style.form}>
            <Input onChange={handleChange} name={'name'} placeholder={'Имя'} value={data.name}/>
            <EmailInput onChange={handleChange} name={'email'}  value={data.email}/>
            <PasswordInput onChange={handleChange} name={'password'} value={data.password} />
        </form>

      </section>
    );
}

export default ProfilePage;