var actions = {
    getProblem: function() {
        let type = document.querySelector('input[name="difficulty"]:checked').value;
        console.log(type)
        API.getProblem(type).then(response => {
            if (response.message) {
                alert(response.message)
            } else if (response.problem) {
                window.location.href = 'problem.html';
                //document.getElementById("problem-number").innerHTML = response.problem
                
            }
        }).catch(alert)
    },
    solved: function() {
        let problem = document.getElementById("problem-number").innerHTML
        console.log(problem)
        API.solvedProblem(problem, true)
            .then((response) => {
                window.location.href = 'index.html';
                alert("Problem solved.")
            }).catch(alert)
    },
    notSolved: function() {
        let problem = document.getElementById("problem-number").innerHTML
        API.solvedProblem(problem, false)
            .then((response) => {
                window.location.href = 'index.html';
                alert("Problem not solved.")
            }).catch(alert)
    },

}