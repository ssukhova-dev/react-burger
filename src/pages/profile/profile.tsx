import React, { FC } from 'react' 
import style from './profile.module.css';

import { Button, PasswordInput, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../services/hooks';

import { saveUserThunk } from '../../services/actions/profile';
import { logoutThunk } from '../../services/actions/logout';

import {Switch, Route, NavLink, useRouteMatch} from "react-router-dom"
import Orders from '../../components/orders/orders';
import { TOrder } from '../../utils/types';
import { wsProfileOrdersConnect, wsProfileOrdersDisconnect } from '../../services/actions/profile-socket';
import { WS_PROFILE_ORDERS_URL } from '../../utils/burger-api';
import JsCookie from "js-cookie"
import { Token } from '../../utils/constants';

interface IProfilePageProps{
    orderInfoDlgOpen: (order: TOrder) => void;
}

const ProfilePage: FC<IProfilePageProps> = ({orderInfoDlgOpen}) => {

    const dispatch = useDispatch();
    const {path} = useRouteMatch();

    const {name, email, password} = useSelector((store)  => store.login.user);
    const [data, setData] = React.useState({name: name, email: email, password: password});

    React.useEffect(()=> {
        setData({name: name , email: email, password: password});
    }, [name, email, password])


    React.useEffect(() => {
        const accessToken = JsCookie.get(Token.access)!.replace("Bearer ", "");
        dispatch(wsProfileOrdersConnect(WS_PROFILE_ORDERS_URL + `?token=${accessToken}`));
        return () => {
          dispatch(wsProfileOrdersDisconnect());
        }
      }, [dispatch]);

    const { loading } = useSelector(state => state.feed);


    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        dispatch(saveUserThunk(data));
    }

    function onLogout(e: React.SyntheticEvent) {
        e.preventDefault();
        dispatch(logoutThunk());
    }

    function onCancel(e: React.SyntheticEvent) {
        e.preventDefault();
        setData({name: name, email: email, password: password});
    }

    const isModified = React.useMemo(() => {
        return name !== data.name || email !== data.email || password !== data.password;
      }, [data, name, email, password]);
    
    

    return (
       <section className={style.profile}>
        <nav className={style.nav}>
            <ul className={style.list}>
            <li className={style.item}>
                <NavLink exact={true} className={`${style.link} text text_type_main-medium text_color_inactive`}
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
                    onClick={onLogout}> Выход </a>
            </li>
            </ul>
            <p className={`${style.text} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете
            изменить свои персональные данные</p>
        </nav>


        <Switch>
            <Route exact path={path}>

                <form onSubmit={handleSubmit} className={style.form}>
                    <Input onChange={handleChange} name={'name'} placeholder={'Имя'} value={data.name}/>
                    <EmailInput onChange={handleChange} name={'email'}  value={data.email}/>
                    <PasswordInput onChange={handleChange} name={'password'} value={data.password} />
                    {isModified &&
                        <div className={style.buttons_panel}>
                            <Button type="primary" size="medium"  htmlType="submit">Сохранить</Button>
                            <Button type="primary" size="medium"  onClick={onCancel}>Отмена</Button>
                        </div>
                    }
                </form>

            </Route>
            <Route exact path="/profile/orders">
                <Orders orderInfoDlgOpen={orderInfoDlgOpen} feedPage={false}/>
            </Route>
        </Switch>



      </section>
    );
}

export default ProfilePage;