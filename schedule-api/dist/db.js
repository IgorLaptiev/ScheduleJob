"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const mongoose_1 = require("mongoose");
async function run(DB_HOST) {
    // 4. Connect to MongoDB
    await mongoose_1.connect(DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
exports.run = run;
//# sourceMappingURL=db.js.map