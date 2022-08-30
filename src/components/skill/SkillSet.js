const SkillSet = ({list}) => {
  return (
    <ul className="list-inline">
      {
        list.map((item, index) => {
          return (
            <li key={index} className="list-inline-item fs-1">
              <i className={item.icon}/>
            </li>
          )
        })
      }
    </ul>
  )
};

export default SkillSet;