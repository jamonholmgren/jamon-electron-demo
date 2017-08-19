import * as React from 'react'
import { CSSProperties } from 'react'
import { ScrollableContent, spacing, cssProps, ReservationTable } from '../../../platform'
import { css } from 'glamor'

// const PADDED = cssProps({
//   paddingBottom: spacing.large,
// })

const ROOT = cssProps({
  padding: spacing.large,
})

export interface ReservationTabProps {
  style?: CSSProperties | CSSProperties[] | null | false
  reservations: any
  onReserve: (name: string) => () => void
}

export class ReservationTab extends React.PureComponent<ReservationTabProps, {}> {
  render() {
    const root = css(ROOT, this.props.style)

    return (
      <ScrollableContent style={root}>
        <ReservationTable
          name={'l1'}
          onClick={this.props.onReserve('l1')}
          reserved={this.props.reservations.l1}
          style={{ left: 100, top: 100 }}
        />
        <ReservationTable
          name={'c1'}
          onClick={this.props.onReserve('c1')}
          reserved={this.props.reservations.c1}
          style={{ left: 300, top: 100 }}
        />
        <ReservationTable
          name={'r1'}
          onClick={this.props.onReserve('r1')}
          reserved={this.props.reservations.r1}
          style={{ left: 500, top: 100 }}
        />

        <ReservationTable
          name={'l2'}
          onClick={this.props.onReserve('l2')}
          reserved={this.props.reservations.l2}
          style={{ left: 100, top: 300 }}
        />
        <ReservationTable
          name={'c2'}
          onClick={this.props.onReserve('c2')}
          reserved={this.props.reservations.c2}
          style={{ left: 300, top: 300 }}
        />
        <ReservationTable
          name={'r2'}
          onClick={this.props.onReserve('r2')}
          reserved={this.props.reservations.r2}
          style={{ left: 500, top: 300 }}
        />

        <ReservationTable
          name={'l3'}
          onClick={this.props.onReserve('l3')}
          reserved={this.props.reservations.l3}
          style={{ left: 100, top: 500 }}
        />
        <ReservationTable
          name={'c3'}
          onClick={this.props.onReserve('c3')}
          reserved={this.props.reservations.c3}
          style={{ left: 300, top: 500 }}
        />
        <ReservationTable
          name={'r3'}
          onClick={this.props.onReserve('r3')}
          reserved={this.props.reservations.r3}
          style={{ left: 500, top: 500 }}
        />
      </ScrollableContent>
    )
  }
}
