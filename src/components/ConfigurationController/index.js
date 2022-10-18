// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = () => {
        onToggleShowContent()
      }

      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onClickRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="cc-bg">
          <h1 className="layout-heading">Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onClickContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onClickLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onClickRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
