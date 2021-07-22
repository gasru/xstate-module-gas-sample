/* eslint-disable new-cap */

/* global XState */

/* exported global */
const global = this; // re-define for the xstate module

/* exported run */
/**
 * A base sample
 */
function run() {
  const toggleMachine = XState.Machine({
    id: 'toggle',
    initial: 'inactive',
    states: {
      inactive: { on: { TOGGLE: 'active' } },
      active: { on: { TOGGLE: 'inactive' } },
    },
  });

  // Machine instance with internal state
  const toggleService = XState.interpret(toggleMachine)
    .onTransition((state) => console.log(state.value))
    .start();
  // => 'inactive'

  toggleService.send('TOGGLE');
  // => 'active'

  toggleService.send('TOGGLE');
  // => 'inactive'
}
