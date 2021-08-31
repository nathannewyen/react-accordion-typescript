import React, {useState} from 'react';

interface Props {
  accordion: { title: string, icon: string;}
}

export const Accordion: React.FC<Props> = (props) => {

  const { accordion } = props;

  const [indicatorIcon, setIndicatorIcon] = useState('👈')
  const toggleAccordion = () => {
    setIndicatorIcon(currentIndicatorIcon => currentIndicatorIcon === '👇'? '👈':'👇')
  }

  return (
    <div>
        <button onClick={() => toggleAccordion()}>
        {accordion.icon}
        {indicatorIcon}
      </button>
        {accordion.title}
      </div>
    )
};