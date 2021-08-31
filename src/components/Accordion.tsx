import React, {useState, useRef} from 'react';

interface Props {
  accordion: { title: string, icon: string;}
}

export const Accordion: React.FC<Props> = (props) => {

  const { accordion } = props;

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [indicatorIcon, setIndicatorIcon] = useState('👈')

  const contentSpace = useRef(null)

  const toggleAccordion = () => {
    setActive(active === false ? true : false)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setIndicatorIcon(currentIndicatorIcon => currentIndicatorIcon === '👇' ? '👈' : '👇')
  }

  return (
      <div>
        <button onClick={toggleAccordion}>
          {accordion.icon}
          {indicatorIcon}
        </button>
        <div
          className="overflow-auto transition-max-height duration-500 ease-in-out"
          ref={contentSpace}
          style={{
            maxHeight: `${height}`,
          }}
        >
          {accordion.title}
        </div>
      </div>
    )
};