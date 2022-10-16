import React from 'react' 
import style from './profile.module.css';

import { Button, Logo, PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';

import { saveUserThunk } from '../../services/actions/profile';
import { logoutThunk } from '../../services/actions/logout';

import {NavLink} from 'react-router-dom'

function ProfilePage (){

    const dispatch = useDispatch();

    const { name, email, password } = useSelector(store => store.login.user);
    const [data, setData] = React.useState({name: name, email: email, password: password});

    function handleChange(e){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(saveUserThunk(data));
    }

    function onCancel(e) {
        e.preventDefault();
        setData({name: name, email: email, password: password});
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
            <div className={style.buttons_panel}>
                <Button type="primary" size="medium"  onClick={handleSubmit}>Сохранить</Button>
                <Button type="primary" size="medium"  onClick={onCancel}>Отмена</Button>
            </div>
        </form>

      </section>
    );
}

export default ProfilePage;