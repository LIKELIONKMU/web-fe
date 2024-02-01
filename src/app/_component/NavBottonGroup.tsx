'use client'

import React from 'react'
import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { get } from 'http'

interface ITabs {
  label: string
  value: string
  onClick: () => void
}

interface INavButtonGroupProps {
  getPathValue: (path: string) => string
  tabList: ITabs[]
  oreintation: 'vertical' | 'horizontal'
  ariaLabel: string
}

const NavButtonGroup = ({
  getPathValue,
  tabList,
  oreintation,
  ariaLabel,
}: INavButtonGroupProps) => {
  const path = usePathname()
  const [value, setValue] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    setValue(getPathValue(path))
  }, [path])

  return (
    <ToggleButtonGroup
      orientation={oreintation}
      value={value}
      exclusive
      aria-label={ariaLabel}
      onChange={(_event, newValue) => {
        setValue(newValue)
      }}
    >
      {tabList.map((tab) => (
        <ToggleButton
          key={tab.value}
          value={tab.value}
          onClick={tab.onClick}
          selected={value === tab.value}
        >
          <Typography color={value === tab.value ? 'primary' : '#fff'}>
            {tab.label}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default NavButtonGroup
