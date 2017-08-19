import * as React from 'react'
import {
  Tab,
  bindKey,
  unbindKey,
  spacing,
  colors,
  styles,
  cssProps,
  commandOrControlKey,
  EnterAnimation,
} from '../../../platform'
import { css } from 'glamor'

export type SampleTabType = 'one' | 'two' | 'three' | 'reservation'

export interface SampleTabsProps {
  tab: SampleTabType
  onChangeTab: (tab: SampleTabType) => void
}

const KEY_1 = `${commandOrControlKey}+1`
// const KEY_2 = `${commandOrControlKey}+2`
// const KEY_3 = `${commandOrControlKey}+3`
// const KEY_4 = `${commandOrControlKey}+4`

// an extra layer just for the drag style due to electron bug
const ROOT = css(styles.windowDrag)

const BAR = css(
  styles.row,
  styles.windowDrag,
  cssProps({
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    paddingTop: spacing.small,
    backgroundColor: colors.nav.background,
    justifyContent: 'center',
    borderBottom: 1,
    borderBottomColor: colors.nav.line,
    borderBottomStyle: 'solid',
  }),
)

export class SampleTabs extends React.PureComponent<SampleTabsProps, {}> {
  // changeTab1 = () => this.props.onChangeTab('one')
  // changeTab2 = () => this.props.onChangeTab('two')
  // changeTab3 = () => this.props.onChangeTab('three')
  changeTabReservation = () => this.props.onChangeTab('reservation')

  componentDidMount() {
    bindKey(KEY_1, this.changeTabReservation)
    // bindKey(KEY_2, this.changeTab1)
    // bindKey(KEY_3, this.changeTab2)
    // bindKey(KEY_4, this.changeTab3)
  }

  componentWillUnmount() {
    unbindKey(KEY_1)
    // unbindKey(KEY_2)
    // unbindKey(KEY_3)
    // unbindKey(KEY_4)
  }

  render() {
    const { tab } = this.props

    return (
      <div {...ROOT}>
        <EnterAnimation animation='slide' delay={100} y={-60}>
          <div {...BAR}>
            <Tab
              onClick={this.changeTabReservation}
              active={tab === 'reservation'}
              text='Jamoñ Restaurant'
            />
            {/* <Tab onClick={this.changeTab1} active={tab === 'one'} text='doggo' />
            <Tab onClick={this.changeTab2} active={tab === 'two'} text='paragraphs' />
            <Tab onClick={this.changeTab3} active={tab === 'three'} text='empty' /> */}
          </div>
        </EnterAnimation>
      </div>
    )
  }
}
