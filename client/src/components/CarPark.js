const CarPark = ({ carPark }) => {
  if (!carPark) {
    return (
      <div>
        No matching car park found
      </div>
    )
  }

  const { id, availableLots } = carPark
  return (
    <div>
      code: {id}
      available lots: {availableLots}
    </div>
  )
}

export default CarPark