import { useState } from 'react'
import './App.css';
import caffe from './83114F25-F108-445E-9953-694558471CCD.jpg'

function App() {

  const [drinks, setDrinks] = useState([
    {
      name: "Caffe",
      img: caffe
    }
  ])

  const [coffe, setCoffe] = useState([
    {
      name: "Espresso",
      img: caffe,
      price: 1.50
    },
    {
      name: "Cappuccino",
      img: caffe,
      price: 2.50
    },
    {
      name: "Latte",
      img: caffe,
      price: 3.00
    },
    {
      name: "Mocha",
      img: caffe,
      price: 3.50
    },
    {
      name: "Americano",
      img: caffe,
      price: 2.00
    },
    {
      name: "Flat White",
      img: caffe,
      price: 3.20
    },
    {
      name: "Macchiato",
      img: caffe,
      price: 2.20
    },
    {
      name: "Iced Coffee",
      img: caffe,
      price: 1.7
    }
  ])

  // start
  const [popup, setPopup] = useState(false);
  const showPopup = () => {
    setPopup(!popup);
  }

  const closePopup = () => {
    setPopup(false)
  }

  const [clicked, setClicked] = useState(false);
  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  }

  // end

  return (
    <div className="App">
      <div className="product-list">
        <div className="caffe">
          {drinks.map((d, index) => (
            <div className='wrapper'>
              <div className="caffe-drop" onClick={() => toggle(index)}>
                <h2>{d.name}</h2>
              </div>

              {clicked === index ? (
                <div className='coffe-list'>
                  {coffe.map((item, i) => (
                    <div className='border' onClick={showPopup}>
                      <div className='image'>
                        <img src={item.img} alt="" />
                      </div>
                      <p>{item.name}</p>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              ) : null}

            </div>
          ))}

          {/* start */}
          {popup ? <div className="backdrop" onClick={closePopup}></div> : null}

          {popup ?
            <div className="product-card">
              <div className="title">
                <div className="h4">Coffee</div>
                <div className="x-close" onClick={closePopup}>X</div>
              </div>
              <div className="product-image">
                <img src={caffe} alt="" />
              </div>

              <div className="price">1.50</div>

              <div className="close-button" onClick={closePopup}>
                Close
              </div>
              
            </div> : null
          }
          {/* end... */}
        </div>
      </div>
    </div>
  );
}

export default App;
