import program from 'commander';
import pkg from '../package.json'
import {cliKeySubCommands} from './key'

export function cli(){
    program.version(pkg.version);
    const keyProgram = program.command('key').description('API key');

    cliKeySubCommands(keyProgram);

    program.parse(process.argv);
}