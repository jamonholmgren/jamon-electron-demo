import * as React from 'react'
import { CSSProperties } from 'react'
import { Text, ScrollableContent, spacing, cssProps } from '../../../platform'
import { css } from 'glamor'

const PADDED = cssProps({
  paddingBottom: spacing.large,
})

const ROOT = cssProps({
  padding: spacing.large,
})

export interface LongTabProps {
  style?: CSSProperties | CSSProperties[] | null | false
}

export class LongTab extends React.PureComponent<LongTabProps, {}> {
  render() {
    const root = css(ROOT, this.props.style)

    return (
      <ScrollableContent style={root}>
        <Text style={PADDED}>
          Lomo kombucha irony, keffiyeh man bun pitchfork helvetica organic godard brunch XOXO
          subway tile. Vexillologist gluten-free prism air plant godard raw denim tacos forage
          neutra kogi lyft beard. Direct trade retro ramps, pour-over slow-carb 8-bit hell of
          cold-pressed XOXO. Hashtag live-edge iceland readymade ethical. Meggings chia portland
          schlitz twee paleo. Knausgaard deep v farm-to-table iPhone. Migas tumblr YOLO chicharrones
          meh heirloom echo park vegan air plant sriracha next level actually. Vexillologist banjo
          lo-fi meggings affogato schlitz. Chicharrones messenger bag la croix hexagon ramps
          keffiyeh church-key food truck quinoa hella. Pabst trust fund cold-pressed gastropub
          bicycle rights. Post-ironic selfies gochujang franzen master cleanse chicharrones ethical
          coloring book keytar 8-bit poutine fixie.
        </Text>
      </ScrollableContent>
    )
  }
}
