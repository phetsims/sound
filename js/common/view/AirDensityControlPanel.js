// Copyright 2022, University of Colorado Boulder

/**
 * Shows the controls for the pressure box.
 */

import merge from '../../../../phet-core/js/merge.js';
import { Node, Text } from '../../../../scenery/js/imports.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import WaveInterferencePanel from '../../../../wave-interference/js/common/view/WaveInterferencePanel.js';
import WaveInterferenceConstants from '../../../../wave-interference/js/common/WaveInterferenceConstants.js';
import sound from '../../sound.js';
import SoundStrings from '../../SoundStrings.js';
import PropertyControlSlider from './PropertyControlSlider.js';

const titleString = SoundStrings.airDensityControlPanel.title;
const resetString = SoundStrings.airDensityControlPanel.reset;

class AirDensityControlPanel extends WaveInterferencePanel {

  /**
   * @param {SoundModel} model
   * @param {AlignGroup} alignGroup
   * @param {Object} [options]
   */
  constructor( model, alignGroup, options ) {
    options = merge( {
      maxWidth: WaveInterferenceConstants.PANEL_MAX_WIDTH,
      yMargin: 4
    }, options );

    const container = new Node();

    const resetButton = new RectangularPushButton( {
      content: new Text( resetString ),
      listener: () => {
        model.pressureProperty.set( 1 );
      }
    } );

    const airPressureContol = new PropertyControlSlider( titleString, model.pressureProperty );
    container.children = [
      airPressureContol,
      resetButton
    ];

    resetButton.top = airPressureContol.bottom + options.yMargin;

    const content = alignGroup.createBox( container );
    content.setXAlign( 'center' );

    super( content, options );
  }
}

sound.register( 'AirDensityControlPanel', AirDensityControlPanel );
export default AirDensityControlPanel;