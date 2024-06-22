import './header.css'

const Header = () =>{
   
    return(
        <header>
         <div className='innerHeader'>
            <h1><a href=""><img src="./assets/logo-w.svg" alt="logo" /></a></h1>
            <div className='ham'>
                <span></span>
                <span></span>
            </div>
         </div>
        </header>
    )
}

export default Header