import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import './style.scss';

export default (props) => {

    const { chat, user } = props;
    const curUser = user ? user : 'Guest';
    const text = chat ? chat.title : 'To main';

    return <AppBar position="static" className='header'>
        <Toolbar className='header__wraper'>

            <Breadcrumbs aria-label="breadcrumb" className='header__breadcrumbs'>
                <RouterLink to='/' className='MuiTypography-root MuiLink-root MuiLink-underlineHover breadcrumbs__link MuiTypography-colorInherit'>
                    Main
                </RouterLink>
                <RouterLink to='/profile' className='MuiTypography-root MuiLink-root MuiLink-underlineHover breadcrumbs__link MuiTypography-colorInherit'>
                    {curUser}
                </RouterLink>
                <Link href='/' color='inherit' className='MuiTypography-root MuiLink-root MuiLink-underlineHover breadcrumbs__link MuiTypography-colorInherit'>
                    {text}
                </Link>
            </Breadcrumbs>

            <h1>{text}</h1>

            <RouterLink to='/profile' color='inherit' className='header__profile'>
                <Avatar>{curUser[0]}</Avatar>
                &nbsp;
                {curUser}
            </RouterLink>

        </Toolbar>

    </AppBar>;
}