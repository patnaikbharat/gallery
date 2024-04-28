import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const historyDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="main-container">
        <p className="paragraph margin">{timeAccessed}</p>
        <img src={logoUrl} className="list-logo" alt="domain logo" />
        <p className="paragraph">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={historyDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItems
