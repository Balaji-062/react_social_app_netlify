

const Footer = () => {
    const today = new Date();
  return (
    <footer className='Footer'>
        <p>Copiright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer