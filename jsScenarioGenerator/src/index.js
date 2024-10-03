function generateScenarios()
{
    //Declare input and output variables
    const inputRoomPool = document.getElementById("inputRoomPool").value;
    const scenarioSequence = [];

    //Declare output divs
    const numOfScenariosResult = document.getElementById("numOfScenariosResult");
    const scenarioSequenceResult = document.getElementById("scenarioSequenceResult");

    //Generate a random integer between 1 and 70% of the input room pool.
    const numOfScenarios = Math.floor((Math.random() * (inputRoomPool*.70))+1);

    //Generate a random block of numbers. The number of numbers generated is equal to the number of scenarios previously generated
    for (let i = 0; i < numOfScenarios;i++)
    {
        const scenario = Math.floor((Math.random() * inputRoomPool)+1);
        //console.log(scenario);
        scenarioSequence.push(scenario);
    }
    //console.log(numOfScenarios);
    //console.log(scenarioSequence);
    numOfScenariosResult.textContent = `${numOfScenarios}`;
    scenarioSequenceResult.textContent = `${scenarioSequence.join(' ➡ ')}`;
}