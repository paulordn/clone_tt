import React from 'react';

import ProfilePage from '../ProfilePage';

import { Conteiner, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, BellIcon, SearchIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
    return (
        <Conteiner>
            <Header>
                <button>
                    <BackIcon/>
                </button>
                
                <ProfileInfo>
                    <strong>Paulo Rondon</strong>
                    <span> 321 Tweets</span>
                </ProfileInfo>
            </Header>

             <ProfilePage /> 

            <BottomMenu>
                <HomeIcon className= "active" />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Conteiner>
    )
}

export default Main;