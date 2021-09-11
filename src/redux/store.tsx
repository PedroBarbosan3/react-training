import { configureStore } from "@reduxjs/toolkit";
import criarChamadoReducer from "./criarChamado";

export const store = configureStore({
  reducer: {
    criarChamado: criarChamadoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
