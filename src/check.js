import Configstore from 'configstore';
import pkg from '../package.json';
import inquirer from 'inquirer';
import colors from 'colors';

export function checkSubCommands(checkProgram){
    checkProgram.command('price')
    .option('--coin <type> ', 'Add a Coin from BTC,ETR,XRP', 'BTC')
    .option('--cur <currency>', 'Add a Currency from EUR,USD', 'EUR')
    .description('Check the price')
    .action((ops) => console.log(`price called ${ops.coin}, ${ops.cur}`.cyan));

}