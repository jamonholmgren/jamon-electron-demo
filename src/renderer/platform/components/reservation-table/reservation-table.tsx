import * as React from 'react'
import { CSSProperties } from 'react'
import { colors, spacing, fontSizes, Text, styles, cssProps, EnterAnimation } from '../..'
import { css, compose } from 'glamor'

export interface ReservationTableProps {
  reserved?: boolean
  style?: CSSProperties | CSSProperties[]
  name: string
  onClick: () => void
  // Start and end time?
  // How many people?
  // Special event?
}

const BASE = compose(
  styles.noWindowDrag,
  cssProps({
    cursor: 'pointer',
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    backgroundColor: colors.reservations.open,
    position: 'absolute',
    width: 100,
    height: 100,
  }),
)

const RESERVED = cssProps({
  backgroundColor: colors.reservations.reserved,
})

const BASE_TEXT = cssProps({ color: colors.nav.inactive, fontSize: fontSizes.mediumPlus })
const RESERVED_TEXT = cssProps({ color: colors.nav.active })

/**
 * A box that represents a restaurant table.
 */
export function ReservationTable(props: ReservationTableProps) {
  // work out the styles
  const styleProps = css(BASE, props.reserved && RESERVED, props.style)
  const textStyle = css(BASE_TEXT, props.reserved && RESERVED_TEXT)

  return (
    <EnterAnimation animation='grow' speed={100} delay={400}>
      <div {...styleProps} onClick={props.onClick}>
        <Text style={textStyle}>
          {props.name} : {props.reserved ? 'RESERVED' : 'OPEN'}
        </Text>
      </div>
    </EnterAnimation>
  )
}
