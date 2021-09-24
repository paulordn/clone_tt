import React from 'react';

 import { Containern, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage,  } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Containern>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
            {/* <EditButton outlined>Editar perfil</EditButton> */}

              <h1>Paulo Rondon</h1>
              <h2>@paulo11rondon</h2>

              <p>
                  Developer F/A <a href='https://www.google.com'>Google</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido em 18 de fevereiro de 2003
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>95</strong>
                  </span>
                  <span>
                      <strong>720</strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
      </Containern>
  )
}

export default ProfilePage;