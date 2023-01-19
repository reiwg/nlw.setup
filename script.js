const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-01","02-01","03-01","04-01"],
    water: ["01-01","02-01","03-01","04-01"],
    food: ["01-01","02-01","03-01","04-01"],
    study: ["01-01","02-01","03-01","04-01"],
    gym: ["01-01","02-01","03-01","04-01"],
    

}

nlwSetup.setData(data)
nlwSetup.load()