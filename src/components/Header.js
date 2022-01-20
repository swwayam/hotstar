import React, {useState} from 'react'
import styled from 'styled-components'
import StartSearch from './StartSearch';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function Header() {

    const [BurgerNavStatus, BurgerNavSetStatus] = useState(false);

    const [SearchStatus, SearchSetStatus] = useState(false);

    const [UserInput, SetUserInputChanges] = useState('');


    return (
        <Nav>
            {!SearchStatus &&
                <CloseWrapper >
                    <CustomMenu onClick={() => BurgerNavSetStatus(true)} />
                    <BurgerNav show={BurgerNavStatus}>
                        <CloseBtnWrapper>
                            <CloseButton onClick={() => BurgerNavSetStatus(false)} />
                        </CloseBtnWrapper>
                        <LoginWatchList>
                            <li><a href='#'>Login
                                <p>For a better experience </p>
                            </a></li>
            
                            <li><a href='#'>Watchlist</a></li>
                        </LoginWatchList>
                        <li><a href='#'>Channels</a></li>
                        <li><a href='#'>Languages</a></li>
                        <li><a href='#'>Genres</a></li>
                    </BurgerNav>
                    <Logo>
                        <a href='#'><img src="https://raw.githubusercontent.com/swwayam/hotstar/4f107917be990c1b1c4b545021c5e6d9f153a843/public/images/disney-hotstar-logo-dark.svg" alt="logo" /></a>
                    </Logo>
            <Subscribe>
                <button>Subscribe</button>
            </Subscribe>
                </CloseWrapper>
            }

            { !SearchStatus && <SearchImg onClick={() => {
                SearchSetStatus(true)
            }} />
            }
            {SearchStatus &&
            <Search scroll={UserInput}>
                    <SearchBox>
                        <CloseSearch onClick={(event) => { SearchSetStatus(false); SetUserInputChanges('') }} />
                        <input type="text"
                            onChange={(event) => {
                                SetUserInputChanges(event.target.value);
                            }}
                            placeholder='Start Searching...' value={UserInput}/>
                        <ClearSearch onClick={() => {
                            SetUserInputChanges('');
                        }} />
                    </SearchBox>
                    {UserInput && <Container >
                        <StartSearch number={10}/>
                    </Container>
                    }
                    {!UserInput && <Content>
                        <p>Search for <span>Shows, movies, sports and TV</span> channels</p>
                    </Content>}
                </Search> 
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: 60px;
    background: linear-gradient(to bottom, #192133, #111826);
    color: #fff;
    padding:0 30px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const CloseWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

const CustomMenu = styled(MenuIcon)`
   cursor: pointer;
   font-size: 1.7rem;
   opacity: 0.6;
   margin-bottom: 4px;
   margin-right: 10px;
`

const CloseBtnWrapper = styled.div`
    padding: 20px 10px;
   
`

const CloseButton = styled(CloseIcon)`
   cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    top:0;
    bottom:0;
    left:0;
    z-index: 10;
    background: #192133;
    padding-top: 5px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s;

    li{
        font-weight: 400;
        font-size: 16px;
        line-height: 14px;
        padding:20px 30px;
        
        
        :hover{
            background-color: #0c111b;
        }
    }

    a{
        color: white;
        padding-right: 100%; 
    }
`

const LoginWatchList = styled.div`
    
    li{
        border-bottom:solid gray 1px;
    }

    p{
        font-size: 12px;
        padding-top: 10px;
    }

    h1{
        display: inline-block;
    }

`

const Logo = styled.div`
    width: 4rem;
`

const Subscribe = styled.div`
    margin:0px 10px 5px 65px;
    
    button{
        text-transform: uppercase;
        font-weight: 600;
        font-size: 12px;
        color: white;
        background: #1f80e0;
        border: none;
        padding:4px 7px;
        border-radius: 5px;
        cursor: pointer;
    }
`

const Search = styled.div`
    position: fixed;
    top: 5px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:#0c111b;
    overflow-y: ${props => props.scroll ?  'auto':'hidden'};
    
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #23324e; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`

const SearchImg = styled(SearchIcon)`
    cursor: pointer;
    margin-top: 7px;
    opacity: 0.7;
`

const SearchBox = styled.div`
  background: #192438;
  margin: 10px 7px;

  input{
   width: 100%;
   height: 32px;
   margin: 13px 0;
   color: white;
   border: 0;
   background: inherit;
   font-size: 18px;
   padding: 0 50px;
    
   :focus{
       outline: none;
   }

   ::placeholder{
       color:white;
       opacity: 0.8;
   }

  }
`

const CloseSearch = styled(ArrowBackIcon)`
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 20px;
    opacity: 0.7;
`

const ClearSearch = styled(CloseIcon)`
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 25px;
    opacity: 0.7;
`

const Content = styled.div`
    p{
        text-align: center;
        margin: 50vh auto;
        font-size: 18px;
        opacity: 0.5;
    }

    span{
        display: block;
        padding:5px 0;
    }
`

const Container = styled.div`

`