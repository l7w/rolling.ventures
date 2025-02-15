/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const research = [
  {
    id: 1,
    data: 'Talk #2: A Brief Synopsis of Cyber security research on Connected Vehicles, Hacker Village - DC0471 Meet-up 0x03 - Agenda and Talks, https://events.dc0471.org/dc0471-meetup-0x03/, 11th of May, 2019 B-Hub, Mar Ivanios Vidyanagar, Nalanchira, Trivandrum',
  },
];

export default research;
