import * as React from 'react'
import { SampleTabs, SampleTabType } from './sample-tabs'
// import { LongTab } from '../long-tab'
// import { DogTab } from '../dog-tab'
import { ReservationTab } from '../reservation-tab'
import { styles, cssProps } from '../../../platform'
import Store = require('electron-store')
import { css } from 'glamor'
import { lensProp, set } from 'ramda'

const HIDDEN = cssProps({
  display: 'none',
})

// a sample store
const store = new Store()

interface WelcomeScreenState {
  tab: SampleTabType
  reservations: any
}

export class WelcomeScreen extends React.Component<{}, WelcomeScreenState> {
  state: WelcomeScreenState = {
    tab: 'one',
    reservations: {
      l1: false,
      c1: false,
      r1: false,
      l2: false,
      c2: false,
      r2: false,
      l3: false,
      c3: false,
      r3: false,
    },
  }

  componentDidMount() {
    // grab the persisted tab if we have one
    const tab = store.get('tab') || 'reservation'
    const reservations = store.get('reservations') || {
      l1: false,
      c1: false,
      r1: false,
      l2: false,
      c2: false,
      r2: false,
      l3: false,
      c3: false,
      r3: false,
    }
    this.setState({ tab, reservations })
  }

  setTab = (tab: SampleTabType) => {
    // persist the store... pretty trivial example, but ya, it's that easy.
    // Probably not the best idea to hit disk everytime you change a tab, but
    // if you're gunning for a prototype, everything is fair game.
    store.set('tab', tab)
    this.setState({ tab })
  }

  reserve = (name: string) => {
    return () => {
      const currentReservation = this.state.reservations[name]
      const reservations = set(lensProp(name), !currentReservation, this.state.reservations)
      store.set('reservations', reservations)
      this.setState({ reservations })
    }
  }

  render() {
    return (
      <div id='WelcomeScreen' {...css(styles.column, styles.flex1)}>
        <SampleTabs tab={this.state.tab} onChangeTab={this.setTab} />
        <ReservationTab
          style={this.state.tab !== 'reservation' && HIDDEN}
          reservations={this.state.reservations}
          onReserve={this.reserve}
        />
      </div>
    )
  }
}
