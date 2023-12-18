Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "DrMalloyDice", name: "Dr Malloy's Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/DrMalloyDice/DrMalloyDice_d2.glb",
		system: "DrMalloyDice"
	});
});
