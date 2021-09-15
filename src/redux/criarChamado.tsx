import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

export const criarChamadoSlice = createSlice({
  name: "criarChamado",
  initialState: data.Chamado,
  reducers: {
    descricaoHandler: (state, action) => {
      const newCall = {
        Id: state.map((idi) => idi.Id) + action.payload.Id,
        Idprojeto: action.payload.Idprojeto,
        IdStatusChamado: 0,
        Descricao: action.payload.Descricao,
      };
      state.push(newCall);
    },
  },
});

export const { descricaoHandler } = criarChamadoSlice.actions;

export default criarChamadoSlice.reducer;
