import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { colors } from '../../assets/global'

import AnalyticsIcon from '../../assets/svg/icon/Analytics'
import HomeIcon from '../../assets/svg/icon/HomeIcon'
import MembersIcon from '../../assets/svg/icon/Members'
import TasksIcon from '../../assets/svg/icon/Tasks'
import NotificationIcon from '../../assets/svg/icon/Notification'
import MessageIcon from '../../assets/svg/icon/Message'
import SettingsIcon from '../../assets/svg/icon/Settings'
import ProfileIcon from '../../assets/svg/icon/Profile'

import { Flex } from '../../components/elements'
import TaskList from '../../components/Dashboard/TaskList'


// side nav
const StyledNavLink = styled(NavLink)`
  margin-bottom: 12px;
`

const SideNav = styled.div`
  height: 100vh;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.alpha};
`

const SideNavItem = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  .active & div {
    background-color: ${colors.secondary};
    fill: ${colors.primary};
  }

  .active & p {
    color: ${colors.black};
  }
`

const SideNavItemIcon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  border-radius: 4px;
  background-color: ${colors.white};
  fill: ${colors.offGray};
  box-shadow:
    0 0 0 1px rgba(67,41,163,.08),
    0 1px 5px 0 rgba(67,41,163,.08);
`

const SideNavItemText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.offGray};
  text-align: center;
`

// main
const MainContainer = styled.div`
  height: 100vh;
  width: calc(100% - 90px);
`

const Main = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
`

const NavBar = styled.div`
  height: 50px;
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #777; */
`

const Logo = styled.div`

`

const Nav = styled.nav`
  display: flex;
  margin-right: 8px;
`

const NavItem = styled.span`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  border-radius: 36px;
  background-color: ${colors.alpha};
`


const Dashboard = (props) => {
  const { match } = props

  return (
    <Flex>
      <SideNav>
        <StyledNavLink exact to={`${match.path}`}>
          <SideNavItem>
            <SideNavItemIcon>
              <HomeIcon
                height="28"
                width="28"
              />
            </SideNavItemIcon>
            <SideNavItemText>
              Home
            </SideNavItemText>
          </SideNavItem>
        </StyledNavLink>
        <StyledNavLink exact to={`${match.path}/tasks`}>
          <SideNavItem>
            <SideNavItemIcon>
              <TasksIcon
                height="28"
                width="28"
              />
            </SideNavItemIcon>
            <SideNavItemText>
              Tasks
            </SideNavItemText>
          </SideNavItem>
        </StyledNavLink>
        <StyledNavLink exact to={`${match.path}/members`}>
          <SideNavItem>
            <SideNavItemIcon>
              <MembersIcon
                height="28"
                width="28"
              />
            </SideNavItemIcon>
            <SideNavItemText>
              Members
            </SideNavItemText>
          </SideNavItem>
        </StyledNavLink>
        <StyledNavLink exact to={`${match.path}/analytics`}>
          <SideNavItem>
            <SideNavItemIcon>
              <AnalyticsIcon
                height="28"
                width="28"
              />
            </SideNavItemIcon>
            <SideNavItemText>
              Analytics
            </SideNavItemText>
          </SideNavItem>
        </StyledNavLink>
      </SideNav>

      <MainContainer>
        <NavBar>
          <Logo>
            managie
          </Logo>
          <Nav>
            <NavItem>
              <MessageIcon
                height="20"
                width="20"
              />
            </NavItem>
            <NavItem>
              <NotificationIcon
                height="20"
                width="20"
              />
            </NavItem>
            <NavItem>
              <ProfileIcon
                height="20"
                width="20"
              />
            </NavItem>
            <NavItem>
              <SettingsIcon
                height="20"
                width="20"
              />
            </NavItem>
          </Nav>
        </NavBar>
        <Main>
          <TaskList />
        </Main>
      </MainContainer>
    </Flex>
  )
}

export default Dashboard