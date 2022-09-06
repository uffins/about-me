import React from 'react';

interface Item {
    type: string;
    name: string;
    icon: string;
}
interface listProps {
    list: Item[]
}

const SkillSetElements = ({list}: listProps) => <ul className="list-inline">
    {
        list.map((item, index) => {
            return <li key={index} className="list-inline-item fs-1">
                <i className={item.icon}></i><span className="d-none">{item.name}</span>
            </li>
        })
    }
</ul>

export default SkillSetElements;