import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


function Table() {

  const { vs_currency = 'usd' } = useParams();
  const { order = 'market_cap_desc' } = useParams();
  const { page = '1' } = useParams();
  const { per_page = '50' } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + vs_currency
    + "&order=" + order
    + "&page=" + page
    + "&per_page=" + per_page;


  useEffect(() => {
    async function fetchData() {
      await axios.get(url).then((res) => {
        console.log(res);
        setData(res.data)
      }).catch((err) => {
        setErr(err);
      }).finally(() => {
        setLoading(false);
      })
    }
    setLoading(true);
    fetchData();

    return;
  }, [url])


  
  if (loading) return <h1>Loading ...</h1>
  if (err) console.log(err);



  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h percentage change</th>
            <th>24h High</th>
            <th>24h Low</th>
            <th>24h Volume</th>
            <th>Market Capitalization</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>{row.market_cap_rank}</td>
              <td>{row.name}</td>
              <td>{row.current_price}</td>
              <td>{row.market_cap_change_percentage_24h}</td>
              <td>{row.high_24h}</td>
              <td>{row.low_24h}</td>
              <td>{row.total_volume}</td>
              <td>{row.market_cap}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div >
  )
}

export default Table