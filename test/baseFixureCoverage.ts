import * as fs from 'fs';
import * as path from 'path';
import {test as baseTest, expect} from '@playwright/test';
 
const canyonOutputDirPath = path.join(process.cwd(), '.nyc_output');
 
const test = baseTest.extend({
  context: async ({context}, use) => {

    await context.addInitScript(() => 
      window.addEventListener('beforeunload', () => 
        (window as any).collectIstanbulCoverage((window as any).__coverage__)));

    await fs.promises.mkdir(canyonOutputDirPath, {recursive: true});
    // await context.exposeFunction('collectIstanbulCoverage', (coverageJSON, canyonJSON) => {
    //   if (coverageJSON && canyonJSON) {
    //     fs.writeFileSync(path.join(canyonOutputDirPath, `${new Date().valueOf()}.json`), JSON.stringify({
    //       ...canyonJSON,
    //       coverage: coverageJSON
    //     }));
    //   }
    // });

    await context.exposeFunction('collectIstanbulCoverage', (coverageJSON) => {
      // console.log(coverageJSON)
      if (coverageJSON) {
        fs.writeFileSync(path.join(canyonOutputDirPath, `${new Date().valueOf()}.json`),JSON.stringify(coverageJSON));
      }
    });

    await use(context);
    
    
    
    // for (const page of context.pages()) {
    //   await page.evaluate(() => (window as any).collectIstanbulCoverage((window as any).__coverage__, (window as any).__canyon__))
    // }
    for (const page of context.pages()) {
      await page.evaluate(() => (window as any).collectIstanbulCoverage((window as any).__coverage__));
    }
    
  }
});
 
export {
  test,
  expect
};