/**
 * This program converts length
 *   to weight in a 1100kg truck.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const logLengthString = prompt('How long are your logs (m)? ')
const logLength = parseFloat(logLengthString)
const truckCapacity = 1100 / 20 / logLength

console.log(`You can fit ${truckCapacity} logs in a 1100kg capacity truck.`)

console.log('\nDone.')
