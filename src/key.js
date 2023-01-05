import Configstore from 'configstore';
import pkg from '../package.json';
import inquirer from 'inquirer';
import colors from 'colors';

export function cliKeySubCommands(keyProgram){
    const configs = new Configstore(pkg.name);

    keyProgram.command('set').description('Set the API key')
    .action(async () => {
        let input = await inquirer.prompt([{
            type:'input',
            name:'key',
            message:'Enter API key:'.green,
            validate: input => input.length < 4 ? 'The API key length is short' : true
        }]);
        configs.set('apiKey', input.key);
        console.log(`set function called ${input.key}`);
    });
    keyProgram.command('show').description('Show the API key')
    .action(() => {
        let key = configs.get('apiKey');
        let msg = key ? `show function called ${configs.get('apiKey')}`.yellow : 'No API key found'.red;
        console.log(msg);
    });
    keyProgram.command('remove').description('Remove the API key')
    .action(async () => {
        let input = await inquirer.prompt([{
            type:'prompt',
            name:'delete',
            message:'Delete API Key?'.red,
            default: false
        }]);

        if(input.delete){
            configs.delete('apiKey');
            console.log('API key deleted');
        }
    });
}