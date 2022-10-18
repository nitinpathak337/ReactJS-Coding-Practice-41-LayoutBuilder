// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-nav-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="list">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="body-heading">Content</h1>
              <p className="list-item">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                euismod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-nav-container">
              <h1 className="body-heading">Right Navbar</h1>
              <div>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
