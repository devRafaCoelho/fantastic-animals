export default function initFetchBitcoin() {
  async function fetchBTC() {
    try {
      const response = await fetch("https://blockchain.info/ticker");
      const data = await response.json();

      const btcPrice = document.querySelector(".btc-price");
      btcPrice.innerText = (1000 / data.BRL.sell).toFixed(4);
    } catch (error) {
      console.error("Error when fetching data:", error);
    }
  }

  fetchBTC();
}
