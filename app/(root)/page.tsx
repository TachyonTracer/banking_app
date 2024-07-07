import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/ui/RightSideBar';
import React from 'react'

const Home = () => {
    const loggedIn={firstName:'Alpha', lastName:'Beta', email:'alpha@gmasil.com'};
  return (
    <section className='home'>
     <div className='home-content'>
<header className='home-header'>
     <HeaderBox 
     type="greeting"
     title="Welcome"
     user={loggedIn?.firstName ||'Guest'}
     subtext="Access and Manage"
     />
     <TotalBalanceBox 
     accounts={[]}
     totalBanks={1}
    totalCurrentBalance={1234}/>
     </header>
     
     </div>
     <RightSideBar user={loggedIn}
     transactions={[]}
     banks={[{currentBalance:1234},{currentBalance:1234}]}></RightSideBar>
    </section>
  )
}

export default Home
