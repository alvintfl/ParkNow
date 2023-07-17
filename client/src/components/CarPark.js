const CarPark = ({ carPark }) => {
  const { code, availableLots } = carPark

  return (
    <div>
      codex: {code}
      available lots: {availableLots}
    </div>
  )
}

export default CarPark