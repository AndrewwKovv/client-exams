export default {
  state: {
    vacancies: [],
  },
  getters: {
    validVacancies(state) {
      return state.vacancies.filter((v) => {
        return v.title;
      });
    },
    allVacancies(state) {
      return state.vacancies;
    },
  },
  mutations: {
    updateVacancies(state, vacancies) {
      state.vacancies = vacancies;
    },
    createVacancies(state, newVacancies) {
      state.vacancies.unshift(newVacancies);
    },
  },
  actions: {
    async fetchVacancies(ctx) {
      const main = await fetch('http://localhost:3000/vacancies');
      const vacancies = await main.json();

      ctx.commit('updateVacancies', vacancies);
    },
  },
};
