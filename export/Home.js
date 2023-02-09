"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const HomeComponent = ({ title, subtitle, onGetData }) => {
    // state
    const [todos, setTodos] = (0, react_1.useState)([]);
    // func
    const renderItem = ({ item }) => {
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null,
                "Todo: ",
                item.title),
            react_1.default.createElement(react_native_1.Text, null,
                "Completed: ",
                item.completed)));
    };
    // effect
    (0, react_1.useEffect)(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield onGetData();
            setTodos(data);
        }))();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // render
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, title),
        subtitle && react_1.default.createElement(react_native_1.Text, { style: styles.subtitle }, subtitle),
        react_1.default.createElement(react_native_1.View, { style: styles.space }),
        todos.length <= 0 && react_1.default.createElement(react_native_1.ActivityIndicator, { size: 'large' }),
        react_1.default.createElement(react_native_1.FlatList, { data: todos, renderItem: renderItem })));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
    },
    space: {
        flex: 1,
        height: 5,
        width: '100%',
        backgroundColor: 'black',
    },
});
exports.default = HomeComponent;
