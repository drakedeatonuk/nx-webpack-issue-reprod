import { composePlugins, withNx } from "@nx/webpack";

console.log("Hello world!");

const webpack = composePlugins(withNx(), (config, { options, context }) => {
  config.target = 'node';
  return config;
});

export default webpack;

