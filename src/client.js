import fetch from 'node-fetch';
import { encode } from 'base-64';
import chalk from 'chalk';

const client = mozaik => {

  return {

    async sprint( board ) {

      mozaik.logger.info(chalk.yellow(`[jira] calling board: ${board}`));

      const res = await fetch(`https://delivery.gfi.fr/jira/rest/agile/1.0/board/${board}/sprint`, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + encode(`${process.env[JIRA_USERNAME]}:${process.env[JIRA_PASSWORD]}`),
          'Accept': 'application/json'
        }
      });
      return res.json;
    }
    
  }
}


export default client;