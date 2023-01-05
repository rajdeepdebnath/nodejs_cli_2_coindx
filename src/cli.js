import program from 'commander';

export function cli(){
    program.version('1.0.0').parse(process.argv);
    console.log('Hello');
}