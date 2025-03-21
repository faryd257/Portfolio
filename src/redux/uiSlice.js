import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idioma: 'es',       // español por defecto
  modoClaro: false,   // modo oscuro por defecto
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    cambiarIdioma: (state) => {
      state.idioma = state.idioma === 'es' ? 'en' : 'es';
    },
    toggleModoClaro: (state) => {
      state.modoClaro = !state.modoClaro;
    },
  },
});

export const { cambiarIdioma, toggleModoClaro } = uiSlice.actions;
export default uiSlice.reducer;
