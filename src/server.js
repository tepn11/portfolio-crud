'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {enumerable: true, value: v});
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
var express_1 = __importDefault(require('express'));
var dotenv = __importStar(require('dotenv'));
var cors_1 = __importDefault(require('cors'));
var helmet_1 = __importDefault(require('helmet'));
var mongoose_1 = __importDefault(require('mongoose'));
var routes_1 = require('./routes');
dotenv.config();
if (!process.env.PORT || !process.env.DB_CONNECTION_STRING) {
  process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose_1.default.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
var app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.Router);
app.get('/', function (req, res) {
  res.send('Welcome to your API!');
});
app.listen(PORT, function () {
  console.log('The application is listening on port ' + PORT + '!');
});
