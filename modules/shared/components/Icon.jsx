import iconData from './icons'

const Icon = ({
  name,
  width = '1.5rem',
  className = '',
  innerClassName,
  ...props
}) => {
  const { groups, paths, ...svgProps } = iconData[name] || {}

  return iconData[name] && (
    <span {...{ className }}>
      <svg {...{width}} {...svgProps} {...props} className={innerClassName}>
        {groups && groups.map(({ paths, ...groupProps }, gIndex) => (
          <g {...groupProps} key={`icon-${name}-g-${gIndex}`}>
            {paths.map((path, pIndex) => (
              <path {...path} key={`icon-${name}-g-${gIndex}-p-${pIndex}`} />
            ))}
          </g>
        ))}
        {paths && paths.map((path, index) => (
          <path {...path} key={`icon-${name}-p-${index}`} />
        ))}
      </svg>
    </span>
  )
}

export default Icon
