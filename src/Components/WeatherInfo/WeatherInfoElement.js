export default function WeatherInfoElement({ image, title, result, symbol, last }) {

  return (
    <tr className={`align-middle ${last ? '' : 'border-bottom border-secondary'} `}>
      <th scope="row" className="border-0 d-flex justify-content-center">
        {image ? <img src={image} alt={`${title} ikona`} /> : null}
      </th>
      <td className="border-0">{title}</td>
      <td className="border-0">{result} {symbol ? symbol : null}</td>
    </tr>
  )
}