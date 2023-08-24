import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "./features/HeaderSlice";
import serviceSlice from "./features/ServiceSlice";

export const store = configureStore({
    reducer: {
        header: headerSlice.reducer,
        service: serviceSlice.reducer
    }
})
