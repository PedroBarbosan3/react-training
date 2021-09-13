import { createSlice} from "@reduxjs/toolkit";

export const criarChamadoSlice = createSlice({
  name: "criarChamado",
  initialState: [
    {
      Projeto: "",
      StatusChamado: "",
      Descricao: "",
    },
  ],
  reducers: {
    descricaoHandler: (state, action) => {
      const newCall = {
        Projeto: action.payload.StatusChamado,
        StatusChamado: "Solicitado",
        Descricao: action.payload.Descricao,
      };
      state.push(newCall);
    },
  },
});

export const { descricaoHandler } = criarChamadoSlice.actions;

export default criarChamadoSlice.reducer;
