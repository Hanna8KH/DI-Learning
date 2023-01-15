const fs = require('fs/promises');

async function HandleFiles() {
await fs.readFile('./text.txt').then((res) => console.log(res)).catch(console.error);

await fs.writeFile("data.txt", 'some text');
await fs.appendFile("data.txt", '\nsome NEW text');
await fs.unlink("data.txt");
}