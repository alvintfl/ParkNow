const CarPark = ({ carPark }) => {
  if (!carPark) {
    return (
      <div>
        No matching car park found
      </div>
    )
  }

  const { development, availableLots } = carPark
  return (
    <div>
      <span> Location: {development} </span>
      <span> Lots Available: {availableLots} </span>
    </div>
  )
}

export default CarPark