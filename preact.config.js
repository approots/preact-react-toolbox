import path from "path";

const reactToolboxPath = path.resolve("./node_modules", "react-toolbox");

export default (config, env, helpers) => {
  const rules = helpers.getLoadersByName(config, "postcss-loader");
  const cssModulesRule = rules[0].rule;
  cssModulesRule.include.push(reactToolboxPath); // this enables css modules for react-toolbox
  const globalCssRule = rules[1].rule;
  globalCssRule.exclude.push(reactToolboxPath); // exclude react-toolbox from global css
};
