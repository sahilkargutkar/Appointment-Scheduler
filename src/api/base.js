import Airtable, { default_config } from 'airtable';


const base  = new Airtable({apiKey:'<!--Your Api KEY-->'}).base('appZ8OQHFGEoqVlcS')

export default base;