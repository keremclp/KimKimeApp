const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig;


const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
    extraNodeModules: {
      "missing-asset-registry-path": require.resolve(
        "react-native/Libraries/Image/AssetRegistry"
      ),
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
