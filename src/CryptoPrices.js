import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const CryptoPrices = () => {
  const [cryptoPrices, setCryptoPrices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();
        setCryptoPrices(data.bpi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderCryptoCards = () => {
    return (
      <>
        {Object.keys(cryptoPrices).map((code, index) => {
          let currencyImage;
          switch (cryptoPrices[code].code) {
            case "USD":
              currencyImage =
                "https://img.freepik.com/premium-vector/usd-coin-cryptocurrencyusd-logo-gold-coindecentralized-digital-money-concept_268461-149.jpg"; // Replace with actual USD image URL
              break;
            case "GBP":
              currencyImage =
                "https://img.freepik.com/premium-vector/digital-currency-symbol-uk-pound_607646-213.jpg"; // Replace with actual GBP image URL
              break;
            case "EUR":
              currencyImage =
                "https://cdn.imgbin.com/2/9/21/imgbin-pound-sign-pound-sterling-gold-coin-coin-XCXfDDX3jmZGLDLKYvk6jaVQQ.jpg"; // Replace with actual EUR image URL
              break;
            default:
              currencyImage =
                "https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2022-08-bitcoin-logo-2010-by-satoshi-nakamoto-min.jpg"; // Replace with a default image URL
          }

          return (
            <Grid key={index} item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#f7f1b4" }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={currencyImage}
                      alt="Cryptocurrency Logo"
                      style={{
                        width: "50px",
                        marginRight: "10px",
                        borderRadius: "50%",
                      }}
                    />
                    <div>
                      <Typography variant="h5" component="h2">
                        {cryptoPrices[code].description}
                      </Typography>
                      <Typography color="textSecondary">
                        Price: ${cryptoPrices[code].rate}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </>
    );
  };

  return (
    <Grid container spacing={3}>
      {renderCryptoCards()}
    </Grid>
  );
};

export default CryptoPrices;
