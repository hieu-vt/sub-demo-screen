"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var HomeComponent = function (_a) {
    var title = _a.title, subtitle = _a.subtitle;
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text style={styles.title}>{title}</react_native_1.Text>
      {subtitle && <react_native_1.Text style={styles.subtitle}>{subtitle}</react_native_1.Text>}
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14,
        color: 'gray'
    }
});
exports["default"] = HomeComponent;
