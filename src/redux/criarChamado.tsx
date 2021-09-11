import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const criarChamadoSlice = createSlice({
  name: "criarChamado",
  initialState: {
    Descricao: null,
  },
  reducers: {
    descricaoHandler: (state, action) => {
      state.Descricao = action.payload;
    },
  },
});

export const { descricaoHandler } = criarChamadoSlice.actions;

export const selectCriarChamada = (state: RootState) =>
  state.criarChamado.Descricao;

export default criarChamadoSlice.reducer;
