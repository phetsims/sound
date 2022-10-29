// Copyright 2022, University of Colorado Boulder

/**
 * Panel subclass that applies styling specific to this simulation. Copied from Wave Interference
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Panel, { PanelOptions } from '../../../../sun/js/Panel.js';
import { Node } from '../../../../scenery/js/imports.js';
import sound from '../../sound.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';

type SelfOptions = EmptySelfOptions;
export type SoundPanelOptions = PanelOptions & SelfOptions;

class SoundPanel extends Panel {

  public constructor( content: Node, providedOptions?: PanelOptions ) {
    const options = optionize<SoundPanelOptions, SelfOptions, PanelOptions>()( {
      yMargin: 7,
      xMargin: 10,
      stroke: 'gray',
      fill: 'rgb(230,231,232)',
      cornerRadius: 6
    }, providedOptions );
    super( content, options );
  }
}

sound.register( 'SoundPanel', SoundPanel );
export default SoundPanel;