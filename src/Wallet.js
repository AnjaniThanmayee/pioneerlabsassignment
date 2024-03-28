import React, { Component } from "react";

import MetaMaskIntegration from "./MetaMaskIntegration";

class Wallet extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1>Connect to MetaMask Wallet</h1>
          <p>
            MetaMask is a software cryptocurrency wallet used to interact with
            the Ethereum blockchain. It allows users to access their Ethereum
            wallet through a browser extension or mobile app, which can then be
            used to interact with decentralized applications. MetaMask is
            developed by ConsenSys Software Inc., a blockchain software company
            focusing on Ethereum-based tools and infrastructure. MetaMask allows
            users to store and manage account keys, broadcast transactions, send
            and receive Ethereum-based cryptocurrencies and tokens, and securely
            connect to decentralized applications through a compatible web
            browser or the mobile app's built-in browser. Websites or other
            decentralized applications are able to connect, authenticate, and/or
            integrate other smart contract functionality with a user's MetaMask
            wallet (and any other similar blockchain wallet browser extensions)
            via JavaScript code that allows the website to send action prompts,
            signature requests, or transaction requests to the user through
            MetaMask as an intermediary. The application includes an integrated
            service for exchanging Ethereum tokens by aggregating several
            decentralized exchanges (DEXs) to find the best exchange rate. This
            feature, branded as MetaMask Swaps, charges a service fee of 0.875%
            of the transaction amount. As of November 2021, MetaMask's browser
            extension had over 21 million monthly active users, according to
            Bloomberg.
          </p>
          <MetaMaskIntegration />
        </div>
      </div>
    );
  }
}

export default Wallet;
