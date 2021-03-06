import React, { Component } from "react";
import "./style.scss";
import DexTools from "../../../../assets/logos/dextools.png";
import CoinGecko from "../../../../assets/logos/coingecko.webp";
import UniSwap from "../../../../assets/logos/uniswap.png";
import PhoenixBG from "../../../../assets/logos/governor-bg.svg";

export default class S1 extends Component {
  render() {
    const Image = ({ source, className }) => (
      <img src={source} className={className} alt="" draggable={false} />
    );

    return (
      <div className="s1-gradient-bg">
        <div className="max-width-container">
          <div className="s1">
            <div className="cta-container">
              <div className="left">
                <h1>Governance.</h1>
                <h1>As a Service.</h1>
                <h2>
                  Effective solutions ensuring proper governance for blockchain
                  projects of all sizes
                </h2>
                <div className="cta-btn-container">
                  <button className="cta-btn" 
                  onClick={() => {
                    window.open("https://app.uniswap.org/#/swap?inputCurrency=0x515d7e9d75e2b76db60f8a051cd890eba23286bc")
                  }}>Buy GDAO</button>
                  <button
                    className="cta-btn dark"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + "/papers/GDAO-Litepaper.pdf",
                        "_blank"
                      )
                    }
                  >
                    Litepaper
                  </button>
                </div>
              </div>
              {this.props.state.isLarge && (
                <div className="right">
                  <Image source={PhoenixBG} className="phoenix-r" />
                </div>
              )}
            </div>
            <div className="logo-container">
              <a
                href="https://www.dextools.io/app/uniswap/pair-explorer/0x4d184bf6f805ee839517164d301f0c4e5d25c374"
                target="_blank"
                rel="noreferrer"
              >
                <Image source={DexTools} className="logo-logo light" />
              </a>
              <a
                href="https://www.coingecko.com/en/coins/governor-dao"
                target="_blank"
                rel="noreferrer"
              >
                <Image source={CoinGecko} className="logo-logo" />
              </a>
              <a
                href="https://app.uniswap.org/#/swap?inputCurrency=0x515d7e9d75e2b76db60f8a051cd890eba23286bc"
                target="_blank"
                rel="noreferrer"
              >
                <Image source={UniSwap} className="logo-logo lighter" />
              </a>
            </div>
            {!this.props.state.isLarge && (
              <Image source={PhoenixBG} className="phoenix-bg" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
