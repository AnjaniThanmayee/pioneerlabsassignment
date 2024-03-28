import React, { Component } from "react";

import CryptoPrices from "./CryptoPrices";

class Crypto extends Component {
  render() {
    return (
      <div className="home">
        <div className="bitcoin-container" style={{ marginTop: "10px" }}>
          <img
            alt="bitcoin"
            className="bitcoin"
            src="https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2022-08-bitcoin-logo-2010-by-satoshi-nakamoto-min.jpg"
          />

          <h1>Bitcoin</h1>
        </div>
        <p>
          Bitcoin (abbreviation: BTC[a]) is the first decentralized
          cryptocurrency. Nodes in the peer-to-peer bitcoin network verify
          transactions through cryptography and record them in a public
          distributed ledger, called a blockchain, without central oversight.
          Consensus between nodes is achieved using a computationally intensive
          process based on proof of work, called mining, that requires
          increasing quantities of electricity and guarantees the security of
          the bitcoin blockchain.Based on a free market ideology, bitcoin was
          invented in 2008 by Satoshi Nakamoto, an unknown person.Use of bitcoin
          as a currency began in 2009, with the release of its open-source
          implementation.In 2021, El Salvador adopted it as legal tender.
          Bitcoin is currently used more as a store of value and less as a
          medium of exchange or unit of account. It is mostly seen as an
          investment and has been described by many scholars as an economic
          bubble. As bitcoin is pseudonymous, its use by criminals has attracted
          the attention of regulators, leading to its ban by several countries
          as of 2021.
        </p>
        <CryptoPrices />
      </div>
    );
  }
}

export default Crypto;
