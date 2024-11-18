var API = { // this object acts as our API Wrapper. It works standalone! (with the exception of the axios lib)
    api: axios.create({ baseURL: "http://localhost:3000/api" }),
    getProblem: function () {
        return this.api.get(`/selector/`)
            .then(response => response.data)
    },
    solvedProblem: function (id) {
        return this.api.put(`/selector/${id}`)
            .then(response => response.data)
    },
};