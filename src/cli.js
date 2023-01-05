import program from 'commander';
import pkg from '../package.json'
import {cliKeySubCommands} from './key'
import {checkSubCommands} from './check'

export function cli(){
    program.version(pkg.version);
    const keyProgram = program.command('key').description('API key');
    cliKeySubCommands(keyProgram);

    const checkProgram = program.command('check').description('Check price');
    checkSubCommands(checkProgram);

    program.parse(process.argv);
}