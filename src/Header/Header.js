import { headerData } from '../constants';
import './Header.scss';
import classNames from 'classnames';

function Header({ bgColor, color, icon, buttonBg }) {
    return (
        <div className={classNames('header', {
            'transparentBackground': bgColor
        })}>
            <div className='inner_header' style={{ background: bgColor && bgColor }}>
                <div className='logo_container'>
                    <p>Soft UI Dashbord </p>
                </div>
                <ul className='navigation'>
                    {headerData.map(item =>
                    <a href={item.path}>
                        <li>
                            <img src={icon ? item.whiteIcon : item.blackIcon} alt={item.iconAlt} />
                            <span style={{color: color && color}}>{item.name}</span>
                        </li>
                    </a>)}
                </ul>
                <button className={classNames('button',
                {'lightBackground': buttonBg})}>FREE DOWNLOAD</button>
            </div>
        </div>   
    )
}

export default Header;