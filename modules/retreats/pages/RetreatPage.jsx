const RetreatPage = ({ retreat }) => {
  console.log('Retreat Details', retreat)

  return (
    <div className='container p-16 mx-auto'>
      <h1>
        {retreat.title}
      </h1>
    </div>
  )
}

export default RetreatPage
