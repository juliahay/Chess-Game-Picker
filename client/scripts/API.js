var API = { // this object acts as our API Wrapper. It works standalone! (with the exception of the axios lib)
    api: axios.create({ baseURL: "http://localhost:3000/api" }),
    getProblem: function (type) {
        return this.api.get(`/selector?type=${type}`)
            .then(response => response.data)
    },
    solvedProblem: function (problem, solved) {
        return this.api.put(`/selector/${problem}?solved=${solved}`)
            .then(response => response.data)
    },
};