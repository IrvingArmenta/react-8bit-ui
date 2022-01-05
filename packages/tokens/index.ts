import { convert, FormatOptions } from 'theo';
import path from 'path';
import { promises } from 'fs';
import registerEasing from './src/transforms/easing-transform';

const formats: { type: FormatOptions['type']; ext: string }[] = [
  { type: 'custom-properties.css', ext: '.css' },
  { type: 'scss', ext: '.scss' },
  { type: 'json', ext: '.json' }
];

async function trans(file: string) {
  try {
    registerEasing();
    console.log('trans', file);

    const transformArr = formats.map(({ type, ext }) => {
      const data = convert({
        transform: {
          type: 'web',
          file: `./src/${file}`
        },
        format: { type }
      });

      return {
        data,
        ext
      };
    });

    if (file === 'tokens.json') {
      await promises.mkdir('./build', { recursive: true });
    } else {
      await promises.mkdir(`./build/${file.replace('.json', '')}`, {
        recursive: true
      });
    }

    for (const formatStr of transformArr) {
      const { data, ext } = formatStr;
      const fileName = file.replace('.json', '');
      const vars = await data;
      if (file === 'tokens.json') {
        await promises.writeFile(`./build/${fileName}${ext}`, vars, 'utf8');
        if (vars[0] === '{') {
          await promises.writeFile(
            `./build/${fileName}.ts`,
            `
            const tokens = ${JSON.stringify(JSON.parse(vars), null, 2)}; 
            export default tokens;
            `,
            'utf8'
          );
        }
      } else {
        await promises.writeFile(
          `./build/${fileName}/${fileName}${ext}`,
          vars,
          'utf8'
        );
      }

      console.log(`${fileName}${formatStr.ext} was generated in build`);
    }
  } catch (e) {
    console.error(`Something went wrong: ${e}`);
  }
}

async function build() {
  const filesRead = await promises.readdir('./src');

  console.log(filesRead);

  const tokenFiles = filesRead.filter(
    (file) => path.extname(file).toLowerCase() === '.json'
  );

  for (const file of tokenFiles) {
    await trans(file);
  }
}

build();
