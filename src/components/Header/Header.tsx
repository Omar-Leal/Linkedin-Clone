import { 
  DownIcon, 
  HomeIcon, 
  JobIcons, 
  NavMessages, 
  NavNetwork, 
  NavNotifications, 
  NavWork, 
  SearchIcon, 
} from "../assets"
import { 
  Content, 
  HeaderContainer, 
  Logo, 
  Nav, 
  Search, 
  SearchIconWrapp, 
  NavListWrap,
  NavList,
  User,
  SignOut,
  Work,
} from "./Header.styles"

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Content>
        <Logo>
          <a href='/home'  >
            <img src='/images/home-logo.svg' alt='Linkedin Clone' />
          </a>
        </Logo>
        <Search>
           <div>
              <input type='text' placeholder='Search'  />
           </div>
           <SearchIconWrapp>
              <SearchIcon />
           </SearchIconWrapp>
        </Search>
        <Nav>
              <NavListWrap>
                <NavList>
                  <a>
                    <HomeIcon />
                    <span>Home</span>
                  </a>
                </NavList>

                <NavList>
                  <a>
                    <NavNetwork />
                    <span>My Network</span>
                  </a>
                </NavList>

                <NavList>
                  <a>
                    <JobIcons />
                    <span>Jobs</span>
                  </a>
               </NavList>

               <NavList>
                  <a>
                    <NavMessages />
                    <span>Messaging</span>
                  </a>
               </NavList>

               <NavList>
                  <a>
                    <NavNotifications />
                    <span>Notifications</span>
                  </a>
               </NavList>
              
               <User>
                  <a>
                    <img src="/images/user.svg" alt="" />
                    <span>Me</span>
                    <img src="/images/down-icon.svg" alt="" />
                  </a>

                  <SignOut>
                    <a>Sign Out</a>
                  </SignOut>
              </User>
              <Work>
                <a>
                  <NavWork />
                  <span>
                    Work
                    <DownIcon />
                  </span>
                </a>
            </Work>

              </NavListWrap>
           </Nav>
      </Content>
    </HeaderContainer>
  )
}
