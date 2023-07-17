const CarPark = ({ carPark }) => {
  const { code, availableLots } = carPark

  return (
    <div>
      code: {code}
      available lots: {availableLots}
    </div>
  )
}

export default CarPark