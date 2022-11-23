import React from 'react'

function Table() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Market Capitalization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>17k</td>
            <td>18k</td>
            <td>19k</td>
            <td>20k</td>
            <td>170k</td>
            <td>170 M</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table