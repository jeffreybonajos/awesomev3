import React from 'react';

import classes from './Login.css';
import Input from '../Login/Input/Input';
const login = () => (
    <div className={classes.Wrapper}>
        <div className={classes.container}>
        <h1><img src="/static/cjr.png" alt="logo"/></h1>
           <Input/>     

        </div>
        <ul className={classes.bgbubbles}>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
            <li></li>
    	</ul>
    </div>

);

export default login;