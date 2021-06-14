import './styles.styl'

const ModuleTitle = props => {
  const { enTitle, cnTitleLeft, cnTitleRight } = props
  return (
    <div className='module-title'>
      {!!enTitle && <h3>{enTitle}</h3>}
      <h2 className='block-text'>
        {cnTitleLeft}<strong>{cnTitleRight}</strong>
      </h2>
    </div>
  )
}

export default ModuleTitle
