import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
import { LightweightChart } from './Chart';
import CryptoNewsFeed from './CryptoNewsFeed';
import DashboardComponent from './DashboardComponent';
import BinancePrice from './BinancePrice';
import Trading from './Trading';
import Watchlist from './Watchlist';
import MyTabs from './Tab';


class MainComponent extends Component {
    render() {
        return (
            <div className="container-full-bg" >
              {/* <Header/>  
              <LandingPage/>
              <CryptoNewsFeed/>
              <Footer/> */}
              {/*<Transaction />*/}
              {/*<MyTabs/>*/}
               <DashboardComponent/> 
              {/* <BinancePrice/> */}
              {/* <Trading/> */}
             {/* <LightweightChart/> */}
             {/* <Watchlist/> */}
            </div>
        );
    }
}

export default MainComponent;