"use client"

import Image from 'next/image';
import style from './navbar.module.css'
import avatar from '../../assets/user_avatar.png'
import { FaBell, FaCloud } from 'react-icons/fa';
import { SearchBar } from '../searchBar';
import { StyledButton } from '../buttons';

export const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.grid_container}>
                <div className={style.update_container}>
                    <StyledButton>
                        Update
                    </StyledButton>
                </div>
                <div className={style.navbar}>
                    <SearchBar />
                    <div className={style.icon_container}>
                        <FaBell size={26} className={style.icon} />
                        <FaCloud size={26} className={style.icon} />
                    </div>
                    <div className={style.avatar_container}>
                        <Image src={avatar} alt={"user-avatar.png"} className={style.user_avatar} />
                    </div>
                </div>
            </div>
        </div>
    );
}