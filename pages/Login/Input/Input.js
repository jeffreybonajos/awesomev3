import React from 'react';

import classes from './Input.css';
import Axulliary from '../../../hoc/Auxilliary';
var holder= "\u00A9";
const input = (props) => {
    return (
        <Axulliary>
       
        <form className={classes.form}>
            <input required id="username" type="text" placeholder="Employee Username"></input>
            <input required id="password" type="password" placeholder="Password"></input>
            <button type="submit">Login</button>
            <p className={classes.text1}>After login you will be redirected to http://offsourcing.osnet/</p>
        </form>
        <p className={classes.text}>{holder} OSnet. All Rights Reserved. <br/>
        <span className="spantext"><strong>This site is best viewed in Chrome, Firefox or Safari. 
        <br/>Make sure Javascript is always enabled.</strong></span></p>
        <style jsx>{`
            .spantext{
                color: grey;
                font-size: 10px;
            }
        `}</style>
    </Axulliary>

    );
   
};

export default input;