import React from 'react';
import { Conteiner, Header, BackIcon, ProfileInfo } from './styles';

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

            {/* <ProfilePage /> */}

            {/* <BottomMenu>
                <HomeIcon />
                <Searchicon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu> */}
        </Conteiner>
    )
}

export default Main;